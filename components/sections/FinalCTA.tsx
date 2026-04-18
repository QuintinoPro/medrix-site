'use client'

import { motion } from 'framer-motion'
import { slideInFromBottom, staggerContainer, fadeInUp } from '@/lib/animations'
import WhatsAppButton from '@/components/ui/WhatsAppButton'

const ctaMessage =
  'Olá! Vim pelo site da Medrix e estou pronto para começar. Quero saber como a Medrix pode transformar minha marca. 🚀'

export default function FinalCTA() {
  return (
    <section className="py-20 lg:py-32 bg-background relative overflow-hidden">
      {/* Purple gradient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-violet-900/10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-accent/8 blur-[100px] rounded-full" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
            Próximo Passo
          </motion.p>

          <motion.h2
            variants={slideInFromBottom}
            className="text-3xl sm:text-4xl lg:text-6xl font-heading font-bold text-white leading-tight"
          >
            Pronto para parar de aparecer e começar a{' '}
            <span className="text-accent-light">ser escolhido?</span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-lg text-text-secondary max-w-xl mx-auto leading-relaxed"
          >
            Uma conversa pode mudar a direção da sua marca.
            Sem compromisso, sem enrolação.
          </motion.p>

          <motion.div variants={fadeInUp} className="pt-4">
            <WhatsAppButton
              message={ctaMessage}
              label="Falar com a Medrix no WhatsApp"
              className="text-base px-10 py-4"
            />
          </motion.div>

          <motion.p
            variants={fadeInUp}
            className="text-xs text-text-muted"
          >
            Respondemos em até 24 horas · Atendimento personalizado
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
