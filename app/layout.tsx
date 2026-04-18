import type { Metadata } from 'next'
import { Inter, Syne } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  weight: ['700', '800'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Medrix | Agência de Marketing Estratégico com Audiovisual',
  description:
    'A Medrix une audiovisual, tráfego pago e estratégia para transformar sua presença digital em resultado real. Meta Ads, Google Ads, vídeos estratégicos e branding.',
  keywords: [
    'agência de marketing',
    'tráfego pago',
    'audiovisual',
    'Meta Ads',
    'Google Ads',
    'branding',
    'social media',
    'performance',
  ],
  openGraph: {
    title: 'Medrix | Conteúdo que posiciona. Estratégia que converte.',
    description:
      'A Medrix une audiovisual, tráfego pago e estratégia para transformar sua presença digital em resultado real.',
    siteName: 'Medrix',
    locale: 'pt_BR',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${syne.variable}`}>
      <body className="bg-background text-text-primary font-body antialiased">
        {children}
      </body>
    </html>
  )
}
