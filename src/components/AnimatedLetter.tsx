import { motion, useScroll, useTransform } from 'framer-motion'

interface AnimatedLetterProps {
  char: string
  index: number
  totalChars: number
  containerRef: React.RefObject<HTMLElement | null>
}

export default function AnimatedLetter({
  char,
  index,
  totalChars,
  containerRef,
}: AnimatedLetterProps) {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.95', 'start 0.5'],
  })

  const charProgress = index / Math.max(totalChars, 1)
  const start = charProgress * 0.7
  const end = Math.min(1, start + 0.22)
  const opacity = useTransform(scrollYProgress, [start, end], [0.55, 1])

  return (
    <motion.span style={{ opacity }} className="inline">
      {char === ' ' ? ' ' : char}
    </motion.span>
  )
}
