import { spawn } from 'node:child_process'
import { mkdir, writeFile, rm } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { setTimeout as delay } from 'node:timers/promises'

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'
const out = process.argv[2] || 'skills-shot.png'
const width = Number(process.argv[3] || 1440)
const height = Number(process.argv[4] || 900)
const port = 9334
const profile = join(tmpdir(), `chrome-shot-${Date.now()}`)
await mkdir(profile, { recursive: true })

console.log('launching chrome')
const chrome = spawn(
  chromePath,
  [
    `--remote-debugging-port=${port}`,
    `--user-data-dir=${profile}`,
    '--headless=new',
    '--disable-gpu',
    '--hide-scrollbars',
    `--window-size=${width},${height}`,
    'about:blank',
  ],
  { stdio: 'ignore' },
)

try {
  let targets
  for (let i = 0; i < 20; i++) {
    try {
      targets = await fetch(`http://127.0.0.1:${port}/json/list`).then((r) => r.json())
      if (targets?.length) break
    } catch {
      await delay(250)
    }
  }
  if (!targets?.length) throw new Error('no debugging targets')
  console.log('targets', targets.length, targets[0].type)

  const pageTarget =
    targets.find((t) => t.type === 'page' && t.webSocketDebuggerUrl) ||
    targets.find((t) => t.type === 'page') ||
    targets[0]
  console.log('using target', pageTarget.type, pageTarget.url)
  const ws = new WebSocket(pageTarget.webSocketDebuggerUrl)
  let id = 0
  const pending = new Map()
  function send(method, params = {}) {
    const messageId = ++id
    ws.send(JSON.stringify({ id: messageId, method, params }))
    return new Promise((resolve, reject) => {
      pending.set(messageId, resolve)
      setTimeout(() => reject(new Error('timeout ' + method)), 15000)
    })
  }

  await new Promise((resolve, reject) => {
    ws.addEventListener('open', resolve)
    ws.addEventListener('error', reject)
  })
  console.log('ws open')

  ws.addEventListener('message', (event) => {
    const data = JSON.parse(event.data)
    if (data.id && pending.has(data.id)) {
      pending.get(data.id)(data.result)
      pending.delete(data.id)
    }
  })

  await send('Page.enable')
  await send('Emulation.setDeviceMetricsOverride', {
    width,
    height,
    deviceScaleFactor: 1,
    mobile: false,
  })
  console.log('navigate')
  await send('Page.navigate', { url: 'http://localhost:5174/' })
  await new Promise((resolve) => {
    const timer = setTimeout(resolve, 4000)
    ws.addEventListener('message', function onMsg(event) {
      const data = JSON.parse(event.data)
      if (data.method === 'Page.loadEventFired') {
        clearTimeout(timer)
        ws.removeEventListener('message', onMsg)
        resolve()
      }
    })
  })
  await delay(1500)
  await send('Runtime.evaluate', {
    expression:
      "document.getElementById('skills')?.scrollIntoView({behavior:'instant',block:'center'}); document.getElementById('skills')?.innerText?.slice(0,80)",
  }).then((r) => console.log('skills text', JSON.stringify(r)))
  await delay(1200)

  const shot = await send('Page.captureScreenshot', { format: 'png', fromSurface: true })
  await writeFile(out, Buffer.from(shot.data, 'base64'))
  console.log('wrote', out)
  ws.close()
} finally {
  chrome.kill()
  await delay(300)
  await rm(profile, { recursive: true, force: true }).catch(() => {})
}
