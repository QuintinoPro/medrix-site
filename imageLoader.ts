type LoaderParams = { src: string; width: number; quality?: number }

export default function imageLoader({ src }: LoaderParams): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? ''
  return `${base}${src}`
}
