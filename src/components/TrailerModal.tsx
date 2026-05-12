import { useEffect, useId, useState } from 'react'
import { createPortal } from 'react-dom'
import { X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'

type Props = {
  open: boolean
  onClose: () => void
  youtubeId: string
  title: string
  /** Se false, não altera overflow do body (ex.: trailer aberto por cima de outro modal). */
  lockBodyScroll?: boolean
}

export function TrailerModal({
  open,
  onClose,
  youtubeId,
  title,
  lockBodyScroll = true,
}: Props) {
  const [mounted, setMounted] = useState(false)
  const titleId = useId()

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    if (lockBodyScroll) document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      if (lockBodyScroll) document.body.style.overflow = prev
    }
  }, [open, onClose, lockBodyScroll])

  if (!mounted) return null

  const embed = `https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0&modestbranding=1`

  return createPortal(
    <AnimatePresence>
      {open ? (
        <motion.div
          key="velora-trailer-modal"
          className="fixed inset-0 z-[300] flex items-center justify-center p-4 sm:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <button
            type="button"
            className="absolute inset-0 bg-black/88 backdrop-blur-md"
            aria-label="Fechar player"
            onClick={onClose}
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className="relative z-10 w-full max-w-5xl overflow-hidden rounded-xl bg-[#0a0912] shadow-2xl ring-1 ring-white/15"
            initial={{ scale: 0.94, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.94, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-4 border-b border-white/10 px-4 py-3 sm:px-5">
              <h2
                id={titleId}
                className="truncate pr-2 text-sm font-semibold text-white sm:text-base"
              >
                Trailer · {title}
              </h2>
              <button
                type="button"
                onClick={onClose}
                className="shrink-0 rounded-full p-2 text-white/85 transition-colors hover:bg-white/10 hover:text-white"
                aria-label="Fechar trailer"
              >
                <X className="size-5" strokeWidth={2} />
              </button>
            </div>
            <div className="aspect-video w-full bg-black">
              <iframe
                src={embed}
                title={`Trailer de ${title}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="h-full w-full border-0"
              />
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>,
    document.body,
  )
}
