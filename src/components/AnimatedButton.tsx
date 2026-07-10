import { motion, useReducedMotion } from 'framer-motion'
import { type ReactNode } from 'react'

interface AnimatedButtonProps {
  children: ReactNode
  className?: string
  variant?: 'primary' | 'secondary' | 'outline'
  onClick?: () => void
  type?: 'button' | 'submit'
}

export default function AnimatedButton({
  children,
  className = '',
  variant = 'primary',
  onClick,
  type = 'button',
}: AnimatedButtonProps) {
  const shouldReduceMotion = useReducedMotion()

  const baseStyles =
    'inline-flex items-center justify-center rounded-lg font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50'

  const variants = {
    primary: 'bg-primary text-white hover:bg-primary-dark',
    secondary: 'bg-bg-light text-text-primary border border-border hover:border-text-secondary',
    outline: 'bg-transparent text-white border border-border-dark hover:border-border',
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      whileHover={shouldReduceMotion ? {} : { scale: 1.03, y: -1 }}
      whileTap={shouldReduceMotion ? {} : { scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </motion.button>
  )
}
