import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  ArrowRight,
  Brain,
  Code2,
  Database,
  Monitor,
  Settings2,
} from 'lucide-react'

const VIDEO_SRC = '/skills-video.mp4'

function Sparkle({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 0c.4 5.4 1.8 9.2 6.2 11.2C13.8 13.2 12.4 17 12 22.4 11.6 17 10.2 13.2 5.8 11.2 10.2 9.2 11.6 5.4 12 0Z" />
    </svg>
  )
}

function ReactLogo() {
  return (
    <svg viewBox="0 0 24 24" className="w-7 h-7" aria-hidden>
      <circle cx="12" cy="12" r="2.2" fill="#61DAFB" />
      <g fill="none" stroke="#61DAFB" strokeWidth="1.2">
        <ellipse cx="12" cy="12" rx="10" ry="4.2" />
        <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(120 12 12)" />
      </g>
    </svg>
  )
}

function JsLogo() {
  return (
    <svg viewBox="0 0 24 24" className="w-7 h-7 rounded-md overflow-hidden" aria-hidden>
      <rect width="24" height="24" rx="3" fill="#F7DF1E" />
      <path
        fill="#111"
        d="M11.2 17.6c0 1.7-1 2.8-2.6 2.8-1.4 0-2.2-.7-2.6-1.6l1.4-.8c.2.4.5.8 1.1.8.6 0 1-.2 1-1.2v-5.4h1.7v5.4zm3.3 2.7c-1.6 0-2.7-.8-3.2-1.8l1.4-.8c.3.6.9 1.1 1.8 1.1.8 0 1.3-.4 1.3-1 0-.7-.5-1-1.4-1.4l-.5-.2c-1.4-.6-2.3-1.3-2.3-2.9 0-1.4 1.1-2.5 2.8-2.5 1.2 0 2.1.4 2.7 1.5l-1.3.9c-.3-.5-.7-.8-1.4-.8-.6 0-1 .4-1 .9 0 .6.4.9 1.4 1.3l.5.2c1.6.7 2.5 1.4 2.5 3.1 0 1.7-1.3 2.6-3.1 2.6z"
      />
    </svg>
  )
}

function HtmlLogo() {
  return (
    <svg viewBox="0 0 24 24" className="w-7 h-7" aria-hidden>
      <path fill="#E44D26" d="M3.2 2.2h17.6L19.2 21 12 23 4.8 21z" />
      <path fill="#F16529" d="M12 3.4V21.6l5.8-1.6 1.5-16.6z" />
      <path fill="#EBEBEB" d="M7.8 8.2h4.2V6.2H5.6l.2 2.2.6 6.8H12v-2H8.6l-.2-2.2H12V8.2z" />
      <path fill="#fff" d="M12 15.2h3.2l-.3 3.2L12 19.2v2.1l5.1-1.4.1-1 .5-5.7H12z" />
      <path fill="#fff" d="M12 8.2h4.6l.2-2H12z" />
    </svg>
  )
}

function CssLogo() {
  return (
    <svg viewBox="0 0 24 24" className="w-7 h-7" aria-hidden>
      <path fill="#1572B6" d="M3.2 2.2h17.6L19.2 21 12 23 4.8 21z" />
      <path fill="#33A9DC" d="M12 3.4V21.6l5.8-1.6 1.5-16.6z" />
      <path fill="#fff" d="M12 8.2H7.6l.2 2H12v2H8l.3 3.2L12 16.2v2.1l-5-.1-.1-1.1L6.4 12H12z" />
      <path fill="#EBEBEB" d="M16.6 10.2l.2-2H12v2h4.6zM12 16.2l-1.6-.4-.1-1.2H8.2l.2 2.4L12 18.3v-2.1z" />
    </svg>
  )
}

function PythonLogo() {
  return (
    <svg viewBox="0 0 24 24" className="w-7 h-7" aria-hidden>
      <path
        fill="#3776AB"
        d="M12.1 2.2c-4.3 0-4 1.9-4 1.9v2h4.1v.6H6.3S3.2 6.5 3.2 11.1c0 4.5 2.5 4.3 2.5 4.3h1.5v-2.1s-.1-2.5 2.5-2.5h4.3s2.4.1 2.4-2.3V4.3s.4-2.1-4.3-2.1zm-2.2 1.4a.8.8 0 1 1 0 1.6.8.8 0 0 1 0-1.6z"
      />
      <path
        fill="#FFD43B"
        d="M11.9 21.8c4.3 0 4-1.9 4-1.9v-2h-4.1v-.6h5.9s3.1.2 3.1-4.4c0-4.5-2.5-4.3-2.5-4.3h-1.5v2.1s.1 2.5-2.5 2.5H9.9s-2.4-.1-2.4 2.3v4.1s-.4 2.1 4.4 2.2zm2.2-1.4a.8.8 0 1 1 0-1.6.8.8 0 0 1 0 1.6z"
      />
    </svg>
  )
}

function FastApiLogo() {
  return (
    <div className="w-7 h-7 rounded-full bg-[#009688] flex items-center justify-center">
      <svg viewBox="0 0 24 24" className="w-4 h-4" aria-hidden>
        <path fill="#fff" d="M13.2 2 4 13.2h6.2L9.4 22 20 9.6h-6.4L13.2 2z" />
      </svg>
    </div>
  )
}

function MysqlLogo() {
  return (
    <svg viewBox="0 0 24 24" className="w-8 h-8" aria-hidden>
      <path
        fill="#00758F"
        d="M16.7 16.4c-1.3.3-1.6-.2-2.2-.8l-3.8-4.5v4.4c0 .9-.3 1.2-1.2 1.2s-1.2-.3-1.2-1.2V8.3c0-.8.4-1.2 1.3-1.2.6 0 1.6.1 3.2 2.2l3.2 4V8.3c0-.8.3-1.2 1.1-1.2.9 0 1.1.4 1.1 1.2v6.8c0 .8-.2 1.4-1.5 1.3z"
      />
      <path
        fill="#F29111"
        d="M5.6 7.1c.9 0 2.4.1 3.6 1.6.2.3 0 .4-.2.3C7.5 8.4 6 8.3 5.4 8.6c-.6.3-.4 1.3-.4 1.3s.3-.6 1.3-.5c1.1.1 1.1 1 1.1 1S6.7 10 5.8 10c-1.6 0-2.4 1.3-2.4 2.6 0 2.4 1.5 2.3 1.8 2.3.7 0 1-.2 1-.2s-.1.5-.4.7c-.3.2-1 .4-1.8.3-2-.2-3.1-1.8-3.1-3.6 0-3.1 2.6-4.9 4.7-5z"
      />
    </svg>
  )
}

function MongoLogo() {
  return (
    <svg viewBox="0 0 24 24" className="w-7 h-7" aria-hidden>
      <path
        fill="#10AA50"
        d="M12.4 2s3.8 3.4 3.8 9.2c0 4.6-2.1 7.2-3.3 8.4-.2.2-.4.2-.5 0-1.2-1.2-3.3-3.8-3.3-8.4C9.1 5.4 12.4 2 12.4 2z"
      />
      <path fill="#B8C4C2" d="M12 19.6v2.2s.1.4.4.2c.2-.1.3-.4.3-.4v-2.1c-.1.1-.4.2-.7.1z" />
    </svg>
  )
}

function SqlServerLogo() {
  return (
    <svg viewBox="0 0 24 24" className="w-7 h-7" aria-hidden>
      <path
        fill="#CC2927"
        d="M12.2 3c-4.6 0-7.3 1.2-7.3 2.7v12.6c0 1.5 2.7 2.7 7.3 2.7s7.3-1.2 7.3-2.7V5.7C19.5 4.2 16.8 3 12.2 3zm0 1.6c3.9 0 5.8.9 5.8 1.5s-1.9 1.5-5.8 1.5-5.8-.9-5.8-1.5 1.9-1.5 5.8-1.5z"
      />
      <ellipse cx="12.2" cy="5.9" rx="5.8" ry="1.5" fill="#F25022" />
    </svg>
  )
}

function JavaLogo() {
  return (
    <svg viewBox="0 0 24 24" className="w-7 h-7" aria-hidden>
      <path
        fill="#5382A1"
        d="M9.3 16.9s.7.6 1.7.3c1.2-.3 1.8-1.1 1.8-1.1s-1 .5-2.1.4c-1.3-.2-1.4.4-1.4.4zm-1.6 1.4s.8.7 2 .4c1.5-.4 2.6-1.4 2.6-1.4s-1.5.9-2.9.9c-1.6 0-1.7.1-1.7.1zm6.5-2.7c.8-.7.4-1.4.4-1.4s.4.6-.4 1.6c-1 1.2-2.2.7-2.2.7s.1.1.4.1c.8 0 1.8-1 1.8-1zm-5.3 3.7s.6.5 1.7.3c1.8-.4 3.1-1.7 3.1-1.7s-1.8 1.4-3.6 1.5c-1.3.1-1.2-.1-1.2-.1z"
      />
      <path
        fill="#E76F00"
        d="M13.4 13.3s2.5-1.3 1.3-2.9c-1.1-1.5-3-1-3-1s2.2.2 2.3 1.6c.2 1.4-1.6 2-1.6 2s.4.2 1 .3zm-2.1-6.5 1.1 3.7s.9-.5.5-1.5c-.4-1-.8-1.2-1.6-2.2zm4.6 8.4s.3.2 0 .5c-.3.3-1.8 1.1-4.1.7-2.7-.4-2.3-2.6-2.3-2.6s.6 1.6 2.8 1.8c2.3.2 3.6-.4 3.6-.4z"
      />
      <path
        fill="#5382A1"
        d="M14.8 18.7c-2.4 1.1-5.5.5-7 .2 0 0 .7.6 2.3.8 2.4.4 6-.3 6-.3s-.4.4-1.3.7c-1 .3-3.2.5-5.3.1-1.8-.3-2.2-.8-2.2-.8s1.2 1.9 6.2 1.9c4.9 0 5.5-2.6 5.5-2.6z"
      />
    </svg>
  )
}

const categories = [
  {
    title: 'Frontend',
    icon: Monitor,
    tools: [
      { name: 'React.js', logo: <ReactLogo /> },
      { name: 'JavaScript', logo: <JsLogo /> },
      { name: 'HTML5', logo: <HtmlLogo /> },
      { name: 'CSS3', logo: <CssLogo /> },
    ],
  },
  {
    title: 'Backend',
    icon: Code2,
    tools: [
      { name: 'Python', logo: <PythonLogo /> },
      { name: 'FastAPI', logo: <FastApiLogo /> },
    ],
  },
  {
    title: 'Databases',
    icon: Database,
    tools: [
      { name: 'MySQL', logo: <MysqlLogo /> },
      { name: 'MongoDB', logo: <MongoLogo /> },
      { name: 'SQL Server', logo: <SqlServerLogo /> },
    ],
  },
  {
    title: 'Concepts',
    icon: Settings2,
    tools: [
      { name: 'Java', logo: <JavaLogo /> },
      { name: 'Machine Learning', logo: <Brain className="w-7 h-7 text-sky-300" /> },
    ],
  },
]

function VideoPlayer() {
  return (
    <div className="relative w-full rounded-2xl overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.55)] ring-1 ring-white/15 bg-black/40">
      <video
        className="w-full aspect-[16/10] object-cover"
        src={VIDEO_SRC}
        autoPlay
        loop
        muted
        playsInline
      />
    </div>
  )
}

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="skills" className="relative min-h-screen overflow-hidden py-14 md:py-20 px-4 md:px-10">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={VIDEO_SRC}
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/45 to-black/70" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" />
      <div className="bg-noise absolute inset-0 opacity-[0.18] pointer-events-none" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <VideoPlayer />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="relative text-center"
          >
            <Sparkle className="hidden lg:block w-4 h-4 text-[#F4E7C5] absolute top-0 right-6 opacity-90" />

            <p className="text-[#E8D9B0] text-[11px] tracking-[0.38em] uppercase mb-4">
              — My Skills —
            </p>

            <Sparkle className="w-5 h-5 text-[#F4E7C5] mx-auto mb-3 opacity-90" />
            <h2 className="font-serif text-[2.6rem] sm:text-5xl text-[#F3E6C4] mb-4 leading-tight">
              Tools I Work With
            </h2>

            <p className="text-[#D7CBB0]/80 text-sm sm:text-[15px] max-w-md mx-auto mb-8 leading-relaxed">
              I use these technologies to build modern, scalable
              <br className="hidden sm:block" /> and user-friendly web applications.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {categories.map((category) => {
                const Icon = category.icon
                return (
                  <div
                    key={category.title}
                    className="rounded-2xl border border-white/10 bg-[#0b0b0d]/70 backdrop-blur-md px-4 py-5 text-left min-h-[148px] hover:border-white/20 transition-colors"
                  >
                    <div className="flex items-center justify-between mb-5">
                      <div className="flex items-center gap-2.5">
                        <Icon className="w-4 h-4 text-[#E8D9B0]" />
                        <span className="text-[#F0E6C8] text-sm font-medium">{category.title}</span>
                      </div>
                      <ArrowRight className="w-4 h-4 text-white/40" />
                    </div>
                    <div className="flex items-end justify-around gap-2">
                      {category.tools.map((tool) => (
                        <div key={tool.name} className="flex flex-col items-center gap-2 min-w-0">
                          {tool.logo}
                          <span className="text-[10px] sm:text-[11px] text-[#D8CCB0] text-center leading-tight">
                            {tool.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="mt-10 flex flex-col items-center lg:items-center">
              <p className="font-script text-3xl sm:text-4xl text-[#E9D7A8] tracking-wide">
                Code · Create · Build
              </p>
              <Sparkle className="w-4 h-4 text-[#F4E7C5] mt-3 opacity-90" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
