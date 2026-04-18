export const WHATSAPP_NUMBER = '5521993969489'
export const WHATSAPP_BASE_URL = `https://wa.me/${WHATSAPP_NUMBER}`
export const INSTAGRAM_URL = 'https://www.instagram.com/medrix.oficial/'

export function buildWhatsAppUrl(message: string): string {
  return `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(message)}`
}

export const WHATSAPP_DEFAULT_MESSAGE =
  'Olá! Vim pelo site da Medrix e quero saber mais sobre os serviços. 👋'

export const NAV_LINKS = [
  { label: 'Serviços', href: '#servicos' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Processo', href: '#processo' },
  { label: 'Contato', href: '#contato' },
]

export const SERVICES = [
  {
    number: '01',
    title: 'Audiovisual',
    description:
      'Vídeos estratégicos que vendem. Produção cinematográfica, conteúdo para redes sociais e criativos para anúncios. Cada frame com propósito.',
    icon: 'video',
  },
  {
    number: '02',
    title: 'Tráfego Pago',
    description:
      'Seu dinheiro trabalhando certo. Gestão de Meta Ads e Google Ads com foco em conversão real. Otimização contínua, sem desperdício.',
    icon: 'chart',
  },
  {
    number: '03',
    title: 'Social Media',
    description:
      'Presença que posiciona. Planejamento editorial estratégico, criação de conteúdo e gestão de perfis que constroem autoridade.',
    icon: 'social',
  },
  {
    number: '04',
    title: 'Branding',
    description:
      'Sua marca vista como escolha óbvia. Identidade visual, posicionamento e percepção de valor que fazem sua marca ser lembrada e escolhida.',
    icon: 'brand',
  },
  {
    number: '05',
    title: 'Performance',
    description:
      'Crescimento estruturado e mensurável. Estratégias de geração de leads, funis de conversão e crescimento escalável com dados reais.',
    icon: 'performance',
  },
]

export const DIFFERENTIALS = [
  {
    title: 'Visão Integrada',
    description:
      'Estratégia, conteúdo e tráfego trabalhando juntos, não em silos separados.',
    icon: 'integrate',
  },
  {
    title: 'Foco em Resultado',
    description:
      'Não medimos sucesso por curtidas. Medimos por conversão, leads e faturamento.',
    icon: 'target',
  },
  {
    title: 'Conteúdo com Direção',
    description:
      'Cada vídeo, post ou anúncio tem um objetivo claro dentro da sua estratégia.',
    icon: 'direction',
  },
  {
    title: 'Parceria de Verdade',
    description:
      'Não entregamos relatório. Entregamos crescimento. Estamos no seu lado estratégico.',
    icon: 'partner',
  },
]

export const STATS = [
  { value: 50, prefix: '+', suffix: '', label: 'Clientes Atendidos' },
  { value: 200, prefix: '+', suffix: '', label: 'Vídeos Produzidos' },
  { value: 2, prefix: '+R$', suffix: 'M', label: 'Faturamento Gerado' },
  { value: 3, prefix: '', suffix: '', label: 'Anos de Experiência' },
]

export const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Diagnóstico Estratégico',
    description:
      'Entendemos seu negócio, mercado, concorrência e objetivos. Nada é feito sem entender onde você está e onde quer chegar.',
  },
  {
    number: '02',
    title: 'Planejamento e Direção',
    description:
      'Criamos uma estratégia personalizada com conteúdo, canais e metas claras. Sua marca recebe uma direção real.',
  },
  {
    number: '03',
    title: 'Produção e Execução',
    description:
      'Audiovisual, anúncios, social media, tudo produzido e ativado com qualidade e intenção estratégica.',
  },
  {
    number: '04',
    title: 'Otimização e Crescimento',
    description:
      'Analisamos resultados, otimizamos continuamente e escalamos o que funciona. Crescimento não é sorte, é processo.',
  },
]

export const IMPACT_PHRASES = [
  'Postar não é estratégia.',
  'Tráfego sem posicionamento é dinheiro perdido.',
  'Conteúdo sem direção não converte.',
  'Não é sobre aparecer. É sobre ser escolhido.',
]

// Adicione aqui os links dos posts/reels do Instagram da Medrix
// Ex: 'https://www.instagram.com/reel/CODIGO_DO_REEL/'
export const INSTAGRAM_WORKS: { url: string; label: string }[] = [
  { url: 'https://www.instagram.com/reel/COLOQUE_O_LINK_1/', label: 'Case 01' },
  { url: 'https://www.instagram.com/reel/COLOQUE_O_LINK_2/', label: 'Case 02' },
  { url: 'https://www.instagram.com/reel/COLOQUE_O_LINK_3/', label: 'Case 03' },
]

export const SERVICE_OPTIONS = [
  'Audiovisual',
  'Tráfego Pago',
  'Social Media',
  'Branding',
  'Performance',
  'Quero entender o que preciso',
]
