'use client'

import { motion } from 'framer-motion'
import { staggerContainer, fadeInUp } from '@/lib/animations'
import SectionHeader from '@/components/ui/SectionHeader'
import { PROCESS_STEPS } from '@/lib/constants'
import InteractiveNeuralVortex from '@/components/ui/interactive-neural-vortex-background'

export default function Process() {
  return (
    <section id="processo" className="relative py-20 lg:py-32 bg-surface overflow-hidden">
      <InteractiveNeuralVortex />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Como Trabalhamos"
          title="Do diagnóstico ao resultado"
          titleAccent="em 4 etapas."
          centered
          className="mb-16"
        />

        {/* Steps */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {PROCESS_STEPS.map((step, index) => (
            <motion.div
              key={step.number}
              variants={fadeInUp}
              className="relative"
            >
              {/* Connector line (desktop) */}
              {index < PROCESS_STEPS.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[calc(100%_-_12px)] w-full h-px bg-gradient-to-r from-accent/30 to-transparent z-10" />
              )}

              <div className="bg-background border border-border hover:border-accent/40 rounded-xl p-6 transition-colors duration-300 h-full">
                {/* Number */}
                <div className="w-12 h-12 rounded-full border border-accent/40 bg-accent/10 flex items-center justify-center mb-4">
                  <span className="text-sm font-heading font-bold text-accent">
                    {step.number}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-heading font-bold text-white mb-2">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-text-secondary text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
