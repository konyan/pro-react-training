import { motion, useReducedMotion } from 'framer-motion'
import { type ReactNode } from 'react'

interface AnimatedCardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  delay?: number
}

export default function AnimatedCard({ children, className = '', hover = true, delay = 0 }: AnimatedCardProps) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ type: 'spring', stiffness: 300, damping: 24, delay }}
      whileHover={
        hover && !shouldReduceMotion
          ? { y: -4, boxShadow: '0 12px 40px -12px rgba(0,0,0,0.15)' }
          : {}
      }
      className={className}
    >
      {children}
    </motion.div>
  )
}
