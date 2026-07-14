/**
 * Lightweight GA4 wrapper.
 * `gtag` is defined by the inline script in index.html.
 */

type GtagFn = (...args: unknown[]) => void
declare global {
  interface Window {
    gtag: GtagFn
  }
}

/** Send a custom GA4 event */
export function trackEvent(
  action: string,
  params?: Record<string, string | number>,
) {
  if (typeof window.gtag === 'function') {
    window.gtag('event', action, params)
  }
}

/** Track a CTA button click */
export function trackCta(label: string) {
  trackEvent('cta_click', { label })
}

/** Track when a section becomes visible (fired once per session) */
export function trackSectionView(section: string) {
  trackEvent('section_view', { section })
}
