import { useEffect, useRef } from 'react'
import { trackSectionView } from '../hooks/useAnalytics'

interface TrackedSectionProps {
  name: string
  children: React.ReactNode
}

/**
 * Wraps a section and fires a GA4 `section_view` event
 * the first time the section scrolls into view.
 */
export default function TrackedSection({ name, children }: TrackedSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const fired = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !fired.current) {
          fired.current = true
          trackSectionView(name)
          observer.disconnect()
        }
      },
      { threshold: 0.2 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [name])

  return <div ref={ref}>{children}</div>
}
