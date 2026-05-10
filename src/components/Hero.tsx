import { motion } from 'framer-motion'
import { Info, Play, Plus } from 'lucide-react'
import type { HeroFeature as HeroFeatureType } from '../data/catalog'

type Props = {
  feature: HeroFeatureType
}

export function Hero({ feature }: Props) {
  return (
    <section
      id="inicio"
      className="relative min-h-[72vh] w-full overflow-hidden sm:min-h-[78vh] lg:min-h-[85vh]"
    >
      <div className="absolute inset-0">
        <img
          src={feature.backdrop}
          alt=""
          className="h-full w-full object-cover object-[center_25%]"
          fetchPriority="high"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-[#07060d] via-[#07060d]/75 to-transparent sm:via-[45%]"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#07060d]/95 via-[#07060d]/45 to-transparent sm:via-35%"
          aria-hidden
        />
      </div>

      <div className="relative mx-auto flex max-w-[1600px] flex-col justify-end px-4 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-36 lg:px-10 lg:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          <p className="mb-3 font-medium uppercase tracking-[0.2em] text-violet-300/90 text-xs sm:text-sm">
            Destaque VELORA
          </p>
          <h1 className="font-[family-name:var(--font-display)] text-4xl font-semibold leading-[1.08] tracking-tight text-white drop-shadow-lg sm:text-5xl lg:text-6xl xl:text-7xl">
            {feature.title}
          </h1>
          <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-white/85">
            {feature.year ? (
              <span className="rounded border border-white/25 px-2 py-0.5 text-xs font-medium uppercase tracking-wide">
                {feature.year}
              </span>
            ) : null}
            {feature.rating ? (
              <span className="rounded bg-white/15 px-2 py-0.5 text-xs font-semibold">
                {feature.rating}
              </span>
            ) : null}
            {feature.genre ? (
              <span className="text-white/75">{feature.genre}</span>
            ) : null}
          </div>
          {feature.synopsis ? (
            <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-white/88 sm:text-lg">
              {feature.synopsis}
            </p>
          ) : null}

          <div className="mt-8 flex flex-wrap gap-3">
            <motion.a
              href="#play"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black shadow-lg shadow-black/30 transition-shadow hover:shadow-xl"
            >
              <Play className="size-5 fill-current" />
              Assistir
            </motion.a>
            <motion.button
              type="button"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur-md transition-colors hover:bg-white/15"
            >
              <Plus className="size-5" strokeWidth={2.25} />
              Minha lista
            </motion.button>
            <motion.button
              type="button"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/35 px-5 py-3 text-sm font-semibold text-white/95 backdrop-blur-md hover:bg-black/45"
            >
              <Info className="size-5" strokeWidth={2} />
              Sinopse
            </motion.button>
          </div>
        </motion.div>
      </div>

      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#07060d] to-transparent"
        aria-hidden
      />
    </section>
  )
}
