'use client'

import { motion } from 'framer-motion'
import { buildWhatsAppUrl, WHATSAPP_DEFAULT_MESSAGE } from '@/lib/constants'
import WhatsAppIcon from '@/components/ui/WhatsAppIcon'

interface WhatsAppButtonProps {
  message?: string
  floating?: boolean
  className?: string
  label?: string
}

export default function WhatsAppButton({
  message = WHATSAPP_DEFAULT_MESSAGE,
  floating = false,
  className = '',
  label = 'Falar no WhatsApp',
}: WhatsAppButtonProps) {
  const url = buildWhatsAppUrl(message)

  if (floating) {
    return (
      <motion.a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar com a Medrix no WhatsApp"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2, duration: 0.4, type: 'spring' }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg shadow-[#25D366]/30 hover:shadow-[#25D366]/50 transition-shadow duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      >
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping-slow opacity-30" />
        <WhatsAppIcon width={26} height={26} className="text-white" />
      </motion.a>
    )
  }

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20C25E] text-white font-heading font-bold text-sm px-6 py-3 rounded-lg shadow-lg shadow-[#25D366]/20 hover:shadow-[#25D366]/40 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-background ${className}`}
    >
      <WhatsAppIcon width={20} height={20} className="text-white" />
      {label}
    </motion.a>
  )
}
