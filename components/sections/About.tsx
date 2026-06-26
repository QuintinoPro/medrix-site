'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { fadeInLeft, fadeInRight, staggerContainer, fadeInUp } from '@/lib/animations'

export default function About() {
  return (
    <section id="sobre" className="py-20 lg:py-32 lg:pb-64 bg-background">
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

          {/* Right: Rafael photo + quote card */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="relative"
          >
            {/* Camera icon — background decoration top-right */}
            <div className="absolute -top-6 -right-6 z-10 pointer-events-none select-none opacity-20">
              <Image
                src="/images/icons/camera.png"
                alt=""
                width={120}
                height={120}
                className="object-contain"
              />
            </div>

            {/* Photo */}
            <div className="relative h-[460px] sm:h-[560px] lg:h-[600px] rounded-2xl overflow-hidden border border-border shadow-2xl shadow-black/40">
              <Image
                src="/images/team/rafael.png"
                alt="Rafael — Founder da Medrix"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-[50%_15%]"
              />
              {/* Gradient overlay — stronger at bottom for card legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />

              {/* Founder badge */}
              <div className="absolute top-4 left-4 flex items-center gap-1.5 bg-black/60 backdrop-blur-sm border border-white/10 rounded-full px-2.5 py-1">
                <div className="w-1 h-1 rounded-full bg-accent animate-pulse" />
                <span className="text-[10px] font-heading font-bold tracking-[0.12em] text-white/90 uppercase">
                  Rafael · Founder
                </span>
              </div>
            </div>

            {/* Quote card — in normal flow on mobile, floats below the photo on lg+ */}
            <div className="relative mt-6 lg:mt-0 lg:absolute lg:bottom-0 lg:left-4 lg:right-4 lg:translate-y-[62%] bg-surface-2/95 backdrop-blur-sm border border-border rounded-2xl p-6 shadow-2xl shadow-black/60">
              <div className="absolute inset-0 rounded-2xl bg-accent/[0.04]" />
              <div className="relative space-y-4">
                <p className="text-sm font-heading font-semibold text-white/90 leading-relaxed">
                  <span className="text-accent/40 font-bold mr-0.5">&ldquo;</span>
                  A Medrix não é apenas uma produtora ou agência. É a união entre
                  estratégia, conteúdo e tráfego para gerar resultado real.
                </p>
                <div className="h-px bg-border" />
                <div className="flex flex-wrap gap-2">
                  {['Audiovisual', 'Tráfego Pago', 'Branding', 'Performance'].map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-heading font-bold tracking-wide text-accent-light border border-accent/30 bg-accent/10 px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Accent glows */}
            <div className="absolute -top-4 -right-4 w-32 h-32 rounded-full bg-accent/10 blur-2xl pointer-events-none" />
            <div className="absolute -bottom-8 -left-4 w-20 h-20 rounded-full bg-violet-500/10 blur-xl pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
