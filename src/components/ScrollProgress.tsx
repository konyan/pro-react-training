import { motion, useScroll, useReducedMotion } from 'framer-motion'

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      style={{ scaleX: shouldReduceMotion ? 0 : scrollYProgress }}
      className="fixed left-0 right-0 top-0 z-[60] h-[3px] origin-left bg-action"
    />
  )
}
