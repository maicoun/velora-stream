import { useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { POSTER_FALLBACK_URL, type CatalogItem } from '../data/catalog'

type Props = {
  title: string
  items: CatalogItem[]
  anchorId?: string
  onItemClick?: (item: CatalogItem) => void
}

function CatalogPoster({ item }: { item: CatalogItem }) {
  const [src, setSrc] = useState(item.image)

  useEffect(() => {
    setSrc(item.image)
  }, [item.image])

  return (
    <img
      src={src}
      alt=""
      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.06]"
      loading="lazy"
      decoding="async"
      onError={() => setSrc(POSTER_FALLBACK_URL)}
    />
  )
}

export function ContentRow({ title, items, anchorId, onItemClick }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scrollByDir = (dir: -1 | 1) => {
    const el = scrollRef.current
    if (!el) return
    const delta = Math.round(el.clientWidth * 0.72) * dir
    el.scrollBy({ left: delta, behavior: 'smooth' })
  }

  return (
    <section
      id={anchorId}
      className="relative mb-10 sm:mb-12"
      aria-labelledby={`${anchorId ?? 'row'}-heading`}
    >
      <div className="mb-3 flex items-end justify-between gap-4 px-4 sm:px-6 lg:px-10">
        <h2
          id={`${anchorId ?? 'row'}-heading`}
          className="font-[family-name:var(--font-display)] text-lg font-semibold tracking-tight text-white sm:text-xl"
        >
          {title}
        </h2>
        <div className="hidden gap-2 sm:flex">
          <button
            type="button"
            onClick={() => scrollByDir(-1)}
            className="rounded-full border border-white/15 bg-white/5 p-2 text-white/90 transition-colors hover:bg-white/12"
            aria-label={`Ver anteriores em ${title}`}
          >
            <ChevronLeft className="size-5" />
          </button>
          <button
            type="button"
            onClick={() => scrollByDir(1)}
            className="rounded-full border border-white/15 bg-white/5 p-2 text-white/90 transition-colors hover:bg-white/12"
            aria-label={`Ver próximos em ${title}`}
          >
            <ChevronRight className="size-5" />
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="scroll-row flex gap-3 overflow-x-auto overflow-y-hidden px-4 pb-2 pt-1 sm:gap-4 sm:px-6 lg:px-10"
        tabIndex={0}
        role="region"
        aria-label={title}
      >
        {items.map((item, index) => (
          <motion.article
            key={item.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ delay: index * 0.04, duration: 0.35 }}
            whileHover={{ y: -6, transition: { duration: 0.22 } }}
            className="group relative w-[42vw] max-w-[220px] shrink-0 sm:w-[28vw] sm:max-w-[260px] lg:w-[18vw] lg:max-w-[300px]"
          >
            <button
              type="button"
              className="block w-full overflow-hidden rounded-lg ring-1 ring-white/10 transition-[box-shadow,ring-color] duration-300 group-hover:shadow-xl group-hover:shadow-violet-500/20 group-hover:ring-violet-400/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-400"
              onClick={() => onItemClick?.(item)}
            >
              <div className="relative aspect-[2/3] overflow-hidden bg-zinc-900">
                <CatalogPoster item={item} />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-100"
                  aria-hidden
                />
                <p className="absolute bottom-0 left-0 right-0 p-3 text-left text-sm font-semibold leading-snug text-white drop-shadow-md sm:text-base">
                  {item.title}
                </p>
              </div>
            </button>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
