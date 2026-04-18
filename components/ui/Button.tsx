'use client'

import { motion } from 'framer-motion'
import React from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'ghost'

interface ButtonProps {
  variant?: ButtonVariant
  children: React.ReactNode
  onClick?: () => void
  href?: string
  className?: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  target?: string
}

const variants: Record<ButtonVariant, string> = {
  primary:
    'bg-accent hover:bg-accent-hover text-white font-heading font-bold tracking-wide shadow-lg shadow-accent/20 hover:shadow-accent/40',
  secondary:
    'border border-white/20 hover:border-accent text-white hover:text-accent-light font-heading font-bold tracking-wide',
  ghost:
    'text-text-secondary hover:text-white underline underline-offset-4 font-body',
}

export default function Button({
  variant = 'primary',
  children,
  onClick,
  href,
  className = '',
  type = 'button',
  disabled = false,
  target,
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm transition-all duration-200 cursor-pointer select-none'

  const classes = `${base} ${variants[variant]} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`

  if (href) {
    return (
      <motion.a
        href={href}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : undefined}
        className={classes}
        whileHover={{ scale: disabled ? 1 : 1.02 }}
        whileTap={{ scale: disabled ? 1 : 0.98 }}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
    >
      {children}
    </motion.button>
  )
}
