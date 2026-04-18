'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { STATS } from '@/lib/constants'

function StatItem({
  value,
  prefix,
  suffix,
  label,
  inView,
}: {
  value: number
  prefix: string
  suffix: string
  label: string
  inView: boolean
}) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return
    const duration = 2000
    const steps = 60
    const increment = value / steps
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)
    return () => clearInterval(timer)
  }, [inView, value])

  return (
    <div className="flex flex-col items-center text-center px-6 py-4">
      <p className="text-3xl sm:text-4xl font-heading font-bold text-white mb-1">
        {prefix}
        {count}
        {suffix}
      </p>
      <p className="text-xs text-text-secondary tracking-wide uppercase font-body">
        {label}
      </p>
    </div>
  )
}

export default function StatsBar() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <section ref={ref} className="bg-surface border-y border-border py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-border"
        >
          {STATS.map((stat) => (
            <StatItem key={stat.label} {...stat} inView={inView} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
