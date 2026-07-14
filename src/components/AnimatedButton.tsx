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
    'inline-flex items-center justify-center rounded-[6px] font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-focus/50'

  const variants = {
    primary: 'bg-action text-white hover:bg-action-hover',
    secondary: 'bg-surface text-text border border-border-default hover:border-text-muted',
    outline: 'bg-transparent text-white border border-border-inverse hover:border-border-default',
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
