'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion } from 'framer-motion'
import { staggerContainer, fadeInUp, fadeInLeft, fadeInRight } from '@/lib/animations'
import { buildWhatsAppUrl, SERVICE_OPTIONS } from '@/lib/constants'
import InteractiveNeuralVortex from '@/components/ui/interactive-neural-vortex-background'

const schema = z.object({
  name: z.string().min(2, 'Informe seu nome completo'),
  phone: z.string().min(8, 'Informe um número válido'),
  company: z.string().optional(),
  service: z.string().min(1, 'Selecione um serviço'),
  message: z.string().min(10, 'Conte um pouco mais sobre seu projeto'),
})

type FormData = z.infer<typeof schema>

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  const onSubmit = (data: FormData) => {
    const msg = `Olá! Vim pelo site da Medrix. 👋

*Nome:* ${data.name}
*WhatsApp/Tel:* ${data.phone}${data.company ? `\n*Empresa:* ${data.company}` : ''}
*Serviço de interesse:* ${data.service}
*Sobre o projeto:* ${data.message}`

    const url = buildWhatsAppUrl(msg)
    window.open(url, '_blank', 'noopener,noreferrer')
    setSubmitted(true)
  }

  const inputClass =
    'w-full bg-surface border border-border hover:border-accent/40 focus:border-accent focus:outline-none text-white placeholder:text-text-muted text-sm px-4 py-3 rounded-lg transition-colors duration-200'

  const labelClass = 'block text-xs font-heading font-bold tracking-wide text-text-secondary uppercase mb-1.5'

  return (
    <section id="contato" className="relative py-20 lg:py-32 bg-surface overflow-hidden">
      <InteractiveNeuralVortex />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: Info */}
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
              Contato
            </motion.p>

            <motion.h2
              variants={fadeInLeft}
              className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white leading-tight"
            >
              Vamos conversar sobre{' '}
              <span className="text-accent-light">seu negócio.</span>
            </motion.h2>

            <motion.div
              variants={fadeInUp}
              className="w-16 h-px bg-gradient-to-r from-accent to-transparent"
            />

            <motion.p
              variants={fadeInUp}
              className="text-text-secondary leading-relaxed"
            >
              Preencha o formulário e você será redirecionado ao nosso WhatsApp
              com sua mensagem já formatada. Respondemos em até 24 horas.
            </motion.p>

            {/* Contact Info */}
            <motion.div variants={fadeInUp} className="space-y-3 pt-4">
              <div className="flex items-center gap-3 text-text-secondary text-sm">
                <div className="w-8 h-8 rounded-lg bg-[#25D366]/10 flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#25D366">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                +55 (21) 9 9396-9489
              </div>
              <div className="flex items-center gap-3 text-text-secondary text-sm">
                <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </div>
                @medrix.oficial
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-background border border-accent/30 rounded-2xl p-10 text-center space-y-4"
              >
                <div className="w-16 h-16 rounded-full bg-[#25D366]/10 flex items-center justify-center mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="#25D366">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <h3 className="text-xl font-heading font-bold text-white">
                  Perfeito! Abrimos o WhatsApp.
                </h3>
                <p className="text-text-secondary text-sm">
                  Sua mensagem já está formatada. Basta enviar e aguardar nosso
                  retorno em até 24 horas.
                </p>
                <button
                  onClick={() => { setSubmitted(false); reset() }}
                  className="text-xs text-text-muted hover:text-white underline transition-colors cursor-pointer mt-2"
                >
                  Enviar outra mensagem
                </button>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="bg-background border border-border rounded-2xl p-6 lg:p-8 space-y-5"
              >
                {/* Name */}
                <div>
                  <label className={labelClass}>Seu nome *</label>
                  <input
                    {...register('name')}
                    placeholder="João Silva"
                    className={inputClass}
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-red-400">{errors.name.message}</p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label className={labelClass}>WhatsApp / Telefone *</label>
                  <input
                    {...register('phone')}
                    placeholder="(21) 9 0000-0000"
                    className={inputClass}
                  />
                  {errors.phone && (
                    <p className="mt-1 text-xs text-red-400">{errors.phone.message}</p>
                  )}
                </div>

                {/* Company (optional) */}
                <div>
                  <label className={labelClass}>Empresa (opcional)</label>
                  <input
                    {...register('company')}
                    placeholder="Nome da sua empresa"
                    className={inputClass}
                  />
                </div>

                {/* Service */}
                <div>
                  <label className={labelClass}>Serviço de interesse *</label>
                  <select
                    {...register('service')}
                    className={`${inputClass} appearance-none cursor-pointer`}
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Selecione um serviço
                    </option>
                    {SERVICE_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                  {errors.service && (
                    <p className="mt-1 text-xs text-red-400">{errors.service.message}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label className={labelClass}>Sobre o projeto *</label>
                  <textarea
                    {...register('message')}
                    rows={4}
                    placeholder="Conte um pouco sobre seu negócio e o que você precisa..."
                    className={`${inputClass} resize-none`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-red-400">{errors.message.message}</p>
                  )}
                </div>

                {/* Submit */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className="w-full bg-accent hover:bg-accent-hover disabled:opacity-60 text-white font-heading font-bold text-sm py-4 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="white"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Enviar pelo WhatsApp
                </motion.button>

                <p className="text-xs text-text-muted text-center">
                  Ao enviar, você será redirecionado ao WhatsApp da Medrix com
                  sua mensagem já formatada.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
