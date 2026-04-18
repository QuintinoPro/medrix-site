'use client'

import { motion } from 'framer-motion'
import { staggerContainer, slideInFromBottom } from '@/lib/animations'
import { IMPACT_PHRASES } from '@/lib/constants'

export default function ImpactQuote() {
  return (
    <section className="py-20 lg:py-32 bg-surface relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-purple-glow opacity-60 pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs font-heading font-bold tracking-[0.2em] text-accent uppercase text-center mb-12"
        >
          Nossa Filosofia
        </motion.p>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="space-y-6 lg:space-y-8 text-center"
        >
          {IMPACT_PHRASES.map((phrase, index) => {
            const isLast = index === IMPACT_PHRASES.length - 1
            return (
              <motion.p
                key={phrase}
                variants={slideInFromBottom}
                className={`font-heading font-bold leading-tight ${
                  isLast
                    ? 'text-3xl sm:text-4xl lg:text-5xl text-accent-light'
                    : index === 0
                    ? 'text-xl sm:text-2xl lg:text-3xl text-white'
                    : 'text-xl sm:text-2xl lg:text-3xl text-text-secondary'
                }`}
              >
                {phrase}
              </motion.p>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
