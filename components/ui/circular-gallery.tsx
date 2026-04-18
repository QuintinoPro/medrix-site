'use client'

import React, { useState, useEffect, useRef, HTMLAttributes } from 'react'

const cn = (...classes: (string | undefined | null | false)[]) =>
  classes.filter(Boolean).join(' ')

export interface GalleryItem {
  title: string
  subtitle: string
  photo: {
    url: string
    text: string
    pos?: string
  }
}

interface CircularGalleryProps extends HTMLAttributes<HTMLDivElement> {
  items: GalleryItem[]
  radius?: number
  autoRotateSpeed?: number
}

const CircularGallery = React.forwardRef<HTMLDivElement, CircularGalleryProps>(
  ({ items, className, radius = 560, autoRotateSpeed = 0.015, ...props }, ref) => {
    const [rotation, setRotation] = useState(0)
    const rotationRef = useRef(0)
    const isDragging = useRef(false)
    const lastX = useRef(0)
    const velocityRef = useRef(0)
    const lastDragX = useRef(0)
    const lastDragTime = useRef(0)
    const rafRef = useRef<number | null>(null)
    const containerRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
      const tick = () => {
        if (!isDragging.current) {
          if (Math.abs(velocityRef.current) > 0.01) {
            rotationRef.current += velocityRef.current
            velocityRef.current *= 0.94
          } else {
            velocityRef.current = 0
            rotationRef.current += autoRotateSpeed
          }
        }
        setRotation(rotationRef.current)
        rafRef.current = requestAnimationFrame(tick)
      }
      rafRef.current = requestAnimationFrame(tick)
      return () => {
        if (rafRef.current) cancelAnimationFrame(rafRef.current)
      }
    }, [autoRotateSpeed])

    const onPointerDown = (e: React.PointerEvent) => {
      isDragging.current = true
      lastX.current = e.clientX
      lastDragX.current = e.clientX
      lastDragTime.current = performance.now()
      velocityRef.current = 0
      ;(e.currentTarget as HTMLDivElement).setPointerCapture(e.pointerId)
    }

    const onPointerMove = (e: React.PointerEvent) => {
      if (!isDragging.current) return
      const now = performance.now()
      const dt = now - lastDragTime.current
      const dx = e.clientX - lastX.current
      if (dt > 0) velocityRef.current = (dx / dt) * 16 * 0.12
      lastX.current = e.clientX
      lastDragX.current = e.clientX
      lastDragTime.current = now
      rotationRef.current += dx * 0.12
    }

    const onPointerUp = () => {
      isDragging.current = false
    }

    const anglePerItem = 360 / items.length

    return (
      <div
        ref={(node) => {
          containerRef.current = node
          if (typeof ref === 'function') ref(node)
          else if (ref) ref.current = node
        }}
        className={cn('relative w-full h-full flex items-center justify-center select-none', className)}
        style={{ perspective: '2000px', cursor: isDragging.current ? 'grabbing' : 'grab' }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        {...props}
      >
        <div
          className="relative w-full h-full"
          style={{ transform: `rotateY(${rotation}deg)`, transformStyle: 'preserve-3d' }}
        >
          {items.map((item, i) => {
            const itemAngle = i * anglePerItem
            const totalRotation = rotation % 360
            const relativeAngle = (itemAngle + totalRotation + 360) % 360
            const normalizedAngle = Math.abs(relativeAngle > 180 ? 360 - relativeAngle : relativeAngle)
            const opacity = Math.max(0.2, 1 - normalizedAngle / 180)

            return (
              <div
                key={`${item.title}-${i}`}
                className="absolute w-[260px] h-[360px] pointer-events-none"
                style={{
                  transform: `rotateY(${itemAngle}deg) translateZ(${radius}px)`,
                  left: '50%',
                  top: '50%',
                  marginLeft: '-130px',
                  marginTop: '-180px',
                  opacity,
                  transition: 'opacity 0.3s linear',
                }}
              >
                <div className="relative w-full h-full rounded-2xl shadow-2xl overflow-hidden border border-white/10 bg-surface">
                  <img
                    src={item.photo.url}
                    alt={item.photo.text}
                    draggable={false}
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{ objectPosition: item.photo.pos || 'center' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 w-full p-4 text-white">
                    <h3 className="text-base font-heading font-bold leading-tight">{item.title}</h3>
                    <p className="text-xs text-white/60 mt-0.5">{item.subtitle}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
)

CircularGallery.displayName = 'CircularGallery'
export { CircularGallery }
