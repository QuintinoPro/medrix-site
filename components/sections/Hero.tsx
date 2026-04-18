'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { buildWhatsAppUrl } from '@/lib/constants'
import Button from '@/components/ui/Button'
import { GLSLHills } from '@/components/ui/glsl-hills'

const heroMessage =
  'Olá! Vim pelo site da Medrix e gostaria de solicitar um diagnóstico gratuito. 🚀'

export default function Hero() {
  const { scrollY } = useScroll()
  const scrollIndicatorOpacity = useTransform(scrollY, [0, 200], [1, 0])

  const scrollToServices = () => {
    document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-background">
      {/* GLSL Hills background */}
      <div className="absolute inset-0 pointer-events-none">
        <GLSLHills width="100%" height="100%" speed={0.4} cameraZ={125} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 border border-accent/30 bg-accent/5 rounded-full px-4 py-1.5 mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          <span className="text-xs font-heading font-bold tracking-[0.2em] text-accent uppercase">
            Agência de Audiovisual Estratégico
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-heading font-bold leading-[1.05] tracking-tight mb-6"
        >
          Conteúdo que posiciona.{' '}
          <br className="hidden sm:block" />
          <span className="text-accent-light">
            Estratégia que converte.
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="text-lg sm:text-xl text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          A Medrix une audiovisual e estratégia de marca para transformar sua presença digital em resultado real.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            variant="primary"
            href={buildWhatsAppUrl(heroMessage)}
            target="_blank"
            className="text-base px-8 py-4 text-sm"
          >
            <span>→</span>
            Quero meu diagnóstico grátis
          </Button>
          <Button
            variant="secondary"
            onClick={scrollToServices}
            className="text-base px-8 py-4 text-sm"
          >
            Conheça nossos serviços
          </Button>
        </motion.div>

        {/* Trust signal */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.85 }}
          className="mt-6 text-xs text-text-muted"
        >
          Sem compromisso · Resposta em até 24h
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        style={{ opacity: scrollIndicatorOpacity }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 pointer-events-none"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-2 rounded-full bg-accent/60" />
        </motion.div>
      </motion.div>
    </section>
  )
}
