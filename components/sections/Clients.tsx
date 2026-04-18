'use client'

import { motion } from 'framer-motion'
import { staggerContainer, fadeIn } from '@/lib/animations'
import { Sparkles } from '@/components/ui/sparkles'

const CLIENT_PLACEHOLDERS = [
  'Cliente 01',
  'Cliente 02',
  'Cliente 03',
  'Cliente 04',
  'Cliente 05',
  'Cliente 06',
]

export default function Clients() {
  return (
    <section id="clientes" className="relative py-20 lg:py-28 bg-background overflow-hidden">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-xs font-heading font-bold tracking-[0.2em] text-accent uppercase mb-4">
            Quem Confia na Medrix
          </p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">
            Marcas que escolheram crescer{' '}
            <span className="text-accent-light">com estratégia.</span>
          </h2>
          <div className="mt-6 h-px w-24 bg-gradient-to-r from-accent/50 to-transparent mx-auto" />
        </motion.div>

        {/* Logo Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4"
        >
          {CLIENT_PLACEHOLDERS.map((client) => (
            <motion.div
              key={client}
              variants={fadeIn}
              className="group h-20 bg-surface border border-border hover:border-accent/30 rounded-xl flex items-center justify-center transition-all duration-300"
            >
              <span className="text-text-muted group-hover:text-text-secondary text-xs font-heading font-bold tracking-widest transition-colors duration-200">
                {client}
              </span>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-6 text-xs text-text-muted"
        >
          * Logos dos clientes serão adicionados em breve.
        </motion.p>
      </div>

      {/* Sparkles bottom glow */}
      <div className="relative -mt-20 h-72 w-full overflow-hidden [mask-image:radial-gradient(50%_50%,white,transparent)]">
        <div className="absolute inset-0 before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,#8350e8,transparent_70%)] before:opacity-30" />
        <div className="absolute -left-1/2 top-1/2 aspect-[1/0.7] z-10 w-[200%] rounded-[100%] border-t border-white/5 bg-background" />
        <Sparkles
          density={600}
          speed={0.8}
          color="#8B5CF6"
          className="absolute inset-x-0 bottom-0 h-full w-full [mask-image:radial-gradient(50%_50%,white,transparent_85%)]"
        />
      </div>
    </section>
  )
}
