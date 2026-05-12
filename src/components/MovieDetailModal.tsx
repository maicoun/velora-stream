import { useEffect, useId, useState } from 'react'
import { createPortal } from 'react-dom'
import { Clock, Play, X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { POSTER_FALLBACK_URL, withMovieDefaults, type CatalogItem } from '../data/catalog'

type Props = {
  item: CatalogItem | null
  onClose: () => void
  /** Chamado com o item original quando há trailer — o pai abre o player e pode fechar este painel. */
  onPlayTrailer: (item: CatalogItem) => void
}

export function MovieDetailModal({ item, onClose, onPlayTrailer }: Props) {
  const [mounted, setMounted] = useState(false)
  const [posterSrc, setPosterSrc] = useState('')
  const titleId = useId()

  const detail = item ? withMovieDefaults(item) : null
  const open = Boolean(item && detail)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (detail) setPosterSrc(detail.image)
  }, [detail])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [open, onClose])

  if (!mounted) return null

  const hasTrailer = Boolean(detail?.trailerYoutubeId)

  return createPortal(
    <AnimatePresence>
      {open && detail ? (
        <motion.div
          key={detail.id}
          className="fixed inset-0 z-[260] flex items-center justify-center overflow-y-auto p-4 sm:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <button
            type="button"
            className="absolute inset-0 bg-black/86 backdrop-blur-md"
            aria-label="Fechar detalhes"
            onClick={onClose}
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className="relative z-10 my-auto w-full max-w-4xl overflow-hidden rounded-2xl bg-[#0c0b14] shadow-2xl ring-1 ring-white/12"
            initial={{ scale: 0.96, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.96, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 border-b border-white/10 px-5 py-4 sm:px-6">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-violet-300/90">
                VELORA+
              </p>
              <button
                type="button"
                onClick={onClose}
                className="shrink-0 rounded-full p-2 text-white/85 transition-colors hover:bg-white/10 hover:text-white"
                aria-label="Fechar"
              >
                <X className="size-5" strokeWidth={2} />
              </button>
            </div>

            <div className="flex flex-col gap-8 p-5 sm:p-8 lg:flex-row lg:gap-10">
              <div className="mx-auto w-full max-w-[220px] shrink-0 sm:max-w-[260px] lg:mx-0">
                <img
                  src={posterSrc}
                  alt=""
                  className="aspect-[2/3] w-full rounded-xl object-cover shadow-xl ring-1 ring-white/15"
                  loading="eager"
                  decoding="async"
                  onError={() => setPosterSrc(POSTER_FALLBACK_URL)}
                />
              </div>

              <div className="flex min-w-0 flex-1 flex-col gap-4">
                <h2
                  id={titleId}
                  className="font-[family-name:var(--font-display)] text-2xl font-semibold leading-tight tracking-tight text-white sm:text-3xl"
                >
                  {detail.title}
                </h2>

                <div className="flex flex-wrap items-center gap-2 text-xs text-white/80 sm:text-sm">
                  {detail.year ? (
                    <span className="rounded border border-white/25 px-2 py-0.5 font-medium">
                      {detail.year}
                    </span>
                  ) : null}
                  <span className="rounded bg-white/15 px-2 py-0.5 font-semibold">
                    {detail.rating}
                  </span>
                  {detail.duration ? (
                    <span className="inline-flex items-center gap-1.5 text-white/70">
                      <Clock className="size-3.5 opacity-80" strokeWidth={2} />
                      {detail.duration}
                    </span>
                  ) : null}
                </div>

                <p className="text-sm text-violet-200/85">{detail.genre}</p>

                <p className="text-pretty text-base leading-relaxed text-white/88">
                  {detail.synopsis}
                </p>

                <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:flex-wrap">
                  <button
                    type="button"
                    disabled={!hasTrailer}
                    onClick={() => {
                      if (item && hasTrailer) onPlayTrailer(item)
                    }}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-semibold text-black shadow-lg shadow-black/25 transition-[opacity,transform] hover:opacity-95 active:scale-[0.98] disabled:cursor-not-allowed disabled:bg-white/25 disabled:text-white/70 disabled:opacity-60 disabled:shadow-none"
                  >
                    <Play className="size-5 fill-current" />
                    Assistir
                  </button>
                  {!hasTrailer ? (
                    <p className="text-sm text-white/45">
                      Trailer não disponível nesta demonstração.
                    </p>
                  ) : null}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>,
    document.body,
  )
}
