'use client'

import { motion } from 'framer-motion'
import { fadeInUp } from '@/lib/animations'
import SectionHeader from '@/components/ui/SectionHeader'
import { CircularGallery, GalleryItem } from '@/components/ui/circular-gallery'
import InteractiveNeuralVortex from '@/components/ui/interactive-neural-vortex-background'

// Substitua as URLs das fotos pelos links reais dos seus trabalhos quando disponíveis
// Substitua photo.url por um iframe do Instagram quando for adicionar os vídeos
const WORKS: GalleryItem[] = [
  {
    title: 'Audiovisual de Marca',
    subtitle: 'Produção cinematográfica',
    photo: {
      url: 'https://images.unsplash.com/photo-1536240478700-b869ad10e2a0?w=600&auto=format&fit=crop&q=80',
      text: 'Gravação profissional em estúdio',
      pos: '50% 30%',
    },
  },
  {
    title: 'Campanha de Tráfego',
    subtitle: 'Meta Ads · Google Ads',
    photo: {
      url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=80',
      text: 'Dashboard de performance de anúncios',
      pos: '50% 40%',
    },
  },
  {
    title: 'Identidade Visual',
    subtitle: 'Branding estratégico',
    photo: {
      url: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=600&auto=format&fit=crop&q=80',
      text: 'Desenvolvimento de identidade visual',
      pos: '50% 50%',
    },
  },
  {
    title: 'Conteúdo Social',
    subtitle: 'Social Media · Reels',
    photo: {
      url: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&auto=format&fit=crop&q=80',
      text: 'Criação de conteúdo para redes sociais',
      pos: '50% 20%',
    },
  },
  {
    title: 'Estratégia de Marca',
    subtitle: 'Posicionamento e direção',
    photo: {
      url: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&auto=format&fit=crop&q=80',
      text: 'Reunião de estratégia de marca',
      pos: '50% 35%',
    },
  },
  {
    title: 'Performance Digital',
    subtitle: 'Funis · Leads · Escala',
    photo: {
      url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop&q=80',
      text: 'Análise de dados de performance',
      pos: '50% 50%',
    },
  },
  {
    title: 'Produção em Campo',
    subtitle: 'Gravação externa',
    photo: {
      url: 'https://images.unsplash.com/photo-1598387993441-a364f854c3e1?w=600&auto=format&fit=crop&q=80',
      text: 'Equipe de produção em campo',
      pos: '50% 40%',
    },
  },
  {
    title: 'Criativos para Ads',
    subtitle: 'Conversão · Vendas',
    photo: {
      url: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&auto=format&fit=crop&q=80',
      text: 'Criação de peças publicitárias',
      pos: '50% 30%',
    },
  },
]

export default function Works() {
  return (
    <section id="trabalhos" className="relative py-20 lg:py-32 bg-surface overflow-hidden">
      <InteractiveNeuralVortex />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <SectionHeader
            eyebrow="Cases em Destaque"
            title="Conteúdo com propósito,"
            titleAccent="resultados que aparecem."
            subtitle="Role a página para girar a galeria. Em breve, vídeos reais dos nossos projetos."
            className="mb-0"
          />
        </motion.div>
      </div>

      {/* Galeria 3D — full width, sticky scroll */}
      <div className="relative z-10 w-full mt-10" style={{ height: '520px' }}>
        <CircularGallery items={WORKS} radius={520} autoRotateSpeed={0.018} className="w-full h-full" />
      </div>
    </section>
  )
}
