type LoaderParams = { src: string; width: number; quality?: number }

// Static-export loader for GitHub Pages. There's no resizing backend, so the
// returned URL points at the original file. We append `?w=<width>` as a cache-key:
// the static host ignores the query, but it makes the loader's output vary with
// width, which is exactly what Next checks for before emitting the
// "loader does not implement width" warning.
export default function imageLoader({ src, width }: LoaderParams): string {
  // Absolute URLs (e.g. Unsplash) must pass through untouched — never prefix basePath.
  if (/^https?:\/\//.test(src)) return src

  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? ''
  const sep = src.includes('?') ? '&' : '?'
  return `${base}${src}${width ? `${sep}w=${width}` : ''}`
}
