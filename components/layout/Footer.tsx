import Image from 'next/image'
import { NAV_LINKS, buildWhatsAppUrl, WHATSAPP_DEFAULT_MESSAGE, INSTAGRAM_URL } from '@/lib/constants'
import WhatsAppIcon from '@/components/ui/WhatsAppIcon'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-surface border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <Image
              src="/images/logo/logo-transparente.png"
              alt="Medrix"
              width={64}
              height={64}
              className="h-14 w-14 object-contain"
            />
            <p className="text-text-secondary text-sm leading-relaxed max-w-xs">
              Conteúdo que posiciona.{' '}
              <span className="text-accent-light">Estratégia que converte.</span>
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs font-heading font-bold tracking-[0.15em] text-text-muted uppercase mb-4">
              Navegação
            </p>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-text-secondary hover:text-white text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-heading font-bold tracking-[0.15em] text-text-muted uppercase mb-4">
              Contato
            </p>
            <div className="space-y-3">
              <a
                href={buildWhatsAppUrl(WHATSAPP_DEFAULT_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-text-secondary hover:text-white text-sm transition-colors duration-200"
              >
                <WhatsAppIcon width={16} height={16} className="text-[#25D366]" />
                +55 (21) 9 9396-9489
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-text-secondary hover:text-white text-sm transition-colors duration-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  focusable="false"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
                @medrix.oficial
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-text-muted text-xs">
            © {year} Medrix. Todos os direitos reservados.
          </p>
          <p className="text-text-muted text-xs">
            Conteúdo que posiciona. Estratégia que converte.
          </p>
        </div>
      </div>
    </footer>
  )
}
