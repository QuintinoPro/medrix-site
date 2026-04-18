'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { staggerContainer, fadeInUp } from '@/lib/animations'
import SectionHeader from '@/components/ui/SectionHeader'
import { DIFFERENTIALS } from '@/lib/constants'

const DIFF_ICON_MAP: Record<string, string> = {
  integrate: '/images/icons/conexões.png',
  target: '/images/icons/alvo.png',
  direction: '/images/icons/foguete.png',
  partner: '/images/icons/xadrex.png',
}

export default function WhyMedrix() {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Por que a Medrix"
          title="A diferença entre aparecer e"
          titleAccent="ser escolhido."
          className="mb-14"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          {DIFFERENTIALS.map((item) => (
            <motion.div
              key={item.title}
              variants={fadeInUp}
              className="group flex gap-4 bg-surface border-l-2 border-l-accent/30 hover:border-l-accent border border-border rounded-xl p-6 transition-all duration-300"
            >
              {/* Icon */}
              <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-200">
                <Image
                  src={DIFF_ICON_MAP[item.icon]}
                  alt={item.title}
                  width={44}
                  height={44}
                  className="object-contain"
                />
              </div>

              {/* Text */}
              <div>
                <h3 className="font-heading font-bold text-white mb-1 group-hover:text-accent-light transition-colors duration-200">
                  {item.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
