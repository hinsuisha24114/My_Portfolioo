import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

interface WordsPullUpProps {
  text: string
  className?: string
  showAsterisk?: boolean
  delay?: number
}

export default function WordsPullUp({
  text,
  className = '',
  showAsterisk = false,
  delay = 0,
}: WordsPullUpProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const words = text.split(' ')

  return (
    <span ref={ref} className={`inline-flex flex-wrap ${className}`}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.2em] last:mr-0">
          <motion.span
            className="inline-block"
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{
              duration: 0.5,
              delay: delay + i * 0.08,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {word}
            {showAsterisk && i === words.length - 1 && word.toLowerCase().endsWith('a') && (
              <span
                className="absolute top-[0.65em] -right-[0.3em] text-[0.31em]"
                style={{ position: 'relative', top: '-0.65em', right: '-0.1em', fontSize: '0.31em' }}
              >
                *
              </span>
            )}
          </motion.span>
        </span>
      ))}
    </span>
  )
}
