'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'

interface SectionHeaderProps {
  eyebrow?: string
  title: string
  titleAccent?: string
  subtitle?: string
  centered?: boolean
  className?: string
}

export default function SectionHeader({
  eyebrow,
  title,
  titleAccent,
  subtitle,
  centered = false,
  className = '',
}: SectionHeaderProps) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      className={`${centered ? 'text-center' : ''} ${className}`}
    >
      {eyebrow && (
        <motion.p
          variants={fadeInUp}
          className="text-xs font-heading font-bold tracking-[0.2em] text-accent uppercase mb-4"
        >
          {eyebrow}
        </motion.p>
      )}
      <motion.h2
        variants={fadeInUp}
        className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white leading-tight"
      >
        {title}{' '}
        {titleAccent && (
          <span className="text-accent-light">{titleAccent}</span>
        )}
      </motion.h2>
      {subtitle && (
        <motion.p
          variants={fadeInUp}
          className="mt-4 text-text-secondary text-lg leading-relaxed max-w-2xl"
        >
          {subtitle}
        </motion.p>
      )}
      <motion.div
        variants={fadeInUp}
        className={`mt-6 h-px bg-gradient-to-r from-accent/50 to-transparent ${centered ? 'mx-auto w-24' : 'w-24'}`}
      />
    </motion.div>
  )
}
