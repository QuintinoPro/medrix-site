'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { fadeInLeft, fadeInRight, staggerContainer, fadeInUp } from '@/lib/animations'
import SectionHeader from '@/components/ui/SectionHeader'

export default function About() {
  return (
    <section id="sobre" className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Text */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="space-y-6"
          >
            <motion.p
              variants={fadeInUp}
              className="text-xs font-heading font-bold tracking-[0.2em] text-accent uppercase"
            >
              Quem Somos
            </motion.p>

            <motion.h2
              variants={fadeInLeft}
              className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white leading-tight"
            >
              Não somos só uma agência.{' '}
              <span className="text-accent-light">Somos sua direção estratégica.</span>
            </motion.h2>

            <motion.div
              variants={fadeInUp}
              className="w-16 h-px bg-gradient-to-r from-accent to-transparent"
            />

            <motion.p
              variants={fadeInUp}
              className="text-text-secondary text-lg leading-relaxed"
            >
              A Medrix nasceu da necessidade real do mercado: marcas que precisam
              de mais do que posts bonitos ou anúncios aleatórios.
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="text-text-secondary leading-relaxed"
            >
              Integramos produção audiovisual de alto nível, gestão de tráfego
              pago e posicionamento de marca em uma única operação, com foco
              total em resultado.
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="text-text-secondary leading-relaxed"
            >
              Aqui, cada peça de conteúdo tem um objetivo. Cada anúncio tem uma
              estratégia. Cada projeto tem uma direção.
            </motion.p>
          </motion.div>

          {/* Right: Visual */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="relative"
          >
            {/* Main box */}
            <div className="relative bg-surface-2 border border-border rounded-2xl p-8 lg:p-10 overflow-hidden">
              {/* Glow */}
              <div className="absolute inset-0 rounded-2xl bg-accent/5" />

              {/* Camera background icon */}
              <Image
                src="/images/icons/camera.png"
                alt=""
                width={280}
                height={280}
                className="absolute -top-8 -right-8 object-contain opacity-10 pointer-events-none select-none"
              />

              <div className="relative space-y-6">
                {/* Quote */}
                <p className="text-5xl font-heading font-bold text-accent/20 leading-none">"</p>
                <p className="text-xl font-heading font-bold text-white leading-relaxed">
                  A Medrix não é apenas uma produtora ou agência. É a união entre
                  estratégia, conteúdo e tráfego para gerar resultado real.
                </p>

                {/* Divider */}
                <div className="h-px bg-border" />

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {['Audiovisual', 'Tráfego Pago', 'Branding', 'Performance'].map(
                    (tag) => (
                      <span
                        key={tag}
                        className="text-xs font-heading font-bold tracking-wide text-accent-light border border-accent/30 bg-accent/10 px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>

            {/* Floating accent */}
            <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-accent/10 blur-xl" />
            <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full bg-violet-500/10 blur-lg" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
