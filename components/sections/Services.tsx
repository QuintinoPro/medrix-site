'use client'

'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import SectionHeader from '@/components/ui/SectionHeader'
import { SERVICES } from '@/lib/constants'
import InteractiveNeuralVortex from '@/components/ui/interactive-neural-vortex-background'

const SERVICE_ICON_MAP: Record<string, string> = {
  video: '/images/icons/play.png',
  chart: '/images/icons/trafego.png',
  social: '/images/icons/megafone.png',
  brand: '/images/icons/cerebro.png',
  performance: '/images/icons/up.png',
}

const DUPLICATED = [...SERVICES, ...SERVICES, ...SERVICES]

export default function Services() {
  const trackRef = useRef<HTMLDivElement>(null)
  const posRef = useRef(0)
  const rafRef = useRef<number>(0)
  const isDragging = useRef(false)
  const dragStartX = useRef(0)
  const dragStartPos = useRef(0)
  const velocityRef = useRef(0)
  const lastDragX = useRef(0)
  const lastDragTime = useRef(0)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    const SPEED = 0.5

    const getSingleSetWidth = () => {
      return (track.scrollWidth / DUPLICATED.length) * SERVICES.length
    }

    const clampPos = (pos: number) => {
      const w = getSingleSetWidth()
      let p = pos % w
      if (p < 0) p += w
      return p
    }

    const step = () => {
      if (!isDragging.current) {
        // apply momentum after drag
        if (Math.abs(velocityRef.current) > 0.1) {
          posRef.current += velocityRef.current
          velocityRef.current *= 0.95
        } else {
          velocityRef.current = 0
          posRef.current += SPEED
        }
        posRef.current = clampPos(posRef.current)
        track.style.transform = `translateX(-${posRef.current}px)`
      }
      rafRef.current = requestAnimationFrame(step)
    }

    rafRef.current = requestAnimationFrame(step)

    // --- Pointer drag ---
    const onPointerDown = (e: PointerEvent) => {
      isDragging.current = true
      dragStartX.current = e.clientX
      dragStartPos.current = posRef.current
      lastDragX.current = e.clientX
      lastDragTime.current = performance.now()
      velocityRef.current = 0
      track.setPointerCapture(e.pointerId)
      track.style.cursor = 'grabbing'
    }

    const onPointerMove = (e: PointerEvent) => {
      if (!isDragging.current) return
      const now = performance.now()
      const dt = now - lastDragTime.current
      const dx = e.clientX - lastDragX.current
      if (dt > 0) velocityRef.current = -dx / (dt / 16)
      lastDragX.current = e.clientX
      lastDragTime.current = now

      const delta = e.clientX - dragStartX.current
      posRef.current = clampPos(dragStartPos.current - delta)
      track.style.transform = `translateX(-${posRef.current}px)`
    }

    const onPointerUp = () => {
      isDragging.current = false
      track.style.cursor = 'grab'
    }

    track.addEventListener('pointerdown', onPointerDown)
    track.addEventListener('pointermove', onPointerMove)
    track.addEventListener('pointerup', onPointerUp)
    track.addEventListener('pointercancel', onPointerUp)

    return () => {
      cancelAnimationFrame(rafRef.current)
      track.removeEventListener('pointerdown', onPointerDown)
      track.removeEventListener('pointermove', onPointerMove)
      track.removeEventListener('pointerup', onPointerUp)
      track.removeEventListener('pointercancel', onPointerUp)
    }
  }, [])

  return (
    <section id="servicos" className="relative py-20 lg:py-32 bg-surface overflow-hidden">
      <InteractiveNeuralVortex />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Nossos Serviços"
          title="Tudo que você precisa para crescer,"
          titleAccent="em um só lugar."
          subtitle="Estratégia integrada do conteúdo ao resultado. Sem fragmentos, sem desperdício."
          className="mb-14"
        />
      </div>

      <div className="relative z-10 w-full overflow-hidden">
        <div
          ref={trackRef}
          className="flex gap-5 will-change-transform select-none"
          style={{ width: 'max-content', cursor: 'grab' }}
        >
          {DUPLICATED.map((service, i) => (
            <div
              key={`${service.number}-${i}`}
              className="group relative bg-background border border-border hover:border-accent/50 rounded-xl p-6 lg:p-8 transition-colors duration-300 hover:shadow-lg hover:shadow-accent/10 flex-shrink-0"
              style={{ width: 'clamp(280px, 30vw, 380px)' }}
            >
              <div className="mb-5">
                <Image
                  src={SERVICE_ICON_MAP[service.icon]}
                  alt={service.title}
                  width={52}
                  height={52}
                  className="object-contain pointer-events-none"
                  draggable={false}
                />
              </div>

              <h3 className="text-lg font-heading font-bold text-white mb-2 group-hover:text-accent-light transition-colors duration-200">
                {service.title}
              </h3>

              <p className="text-text-secondary text-sm leading-relaxed">
                {service.description}
              </p>

              <div className="absolute inset-0 rounded-xl bg-accent/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
