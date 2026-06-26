'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { staggerContainer, fadeIn } from '@/lib/animations'
import { Sparkles } from '@/components/ui/sparkles'

const CLIENTS = [
  { src: '/images/clients/stocks.png', alt: 'Stocks' },
  { src: '/images/clients/zain.jpeg', alt: 'Zaín Tricologia Avançada' },
  { src: '/images/clients/assistencia.png', alt: 'World Pax — Assistência Familiar & Bem-Estar' },
  { src: '/images/clients/dr-eric-aguiar.png', alt: 'Dr. Éric Aguiar — Tricologia Médica e Transplante Capilar' },
]

export default function Clients() {
  return (
    <section id="clientes" className="relative py-20 lg:py-28 bg-background overflow-hidden">
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

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="flex flex-wrap justify-center gap-6"
        >
          {CLIENTS.map((client) => (
            <motion.div
              key={client.alt}
              variants={fadeIn}
              className="group relative w-40 h-40 sm:w-48 sm:h-48 rounded-2xl overflow-hidden border border-border hover:border-accent/40 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(131,80,232,0.15)]"
            >
              <Image
                src={client.src}
                alt={client.alt}
                fill
                sizes="192px"
                className="object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

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
