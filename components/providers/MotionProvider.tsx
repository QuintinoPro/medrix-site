'use client'

import { MotionConfig } from 'framer-motion'

/**
 * Wraps the app in a Framer Motion config that honors the user's
 * `prefers-reduced-motion` setting. With `reducedMotion="user"`, transform and
 * layout animations are suppressed for those users while opacity transitions
 * (which don't trigger vestibular discomfort) still run — content never ships blank.
 */
export default function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>
}
