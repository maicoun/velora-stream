import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Info, Play, Plus } from 'lucide-react'
import type { HeroFeature as HeroFeatureType } from '../data/catalog'
import { TrailerModal } from './TrailerModal'

type Props = {
  feature: HeroFeatureType
}

export function Hero({ feature }: Props) {
  const reduceMotion = useReducedMotion()
  const [trailerOpen, setTrailerOpen] = useState(false)

  return (
    <section
      id="inicio"
      className="relative min-h-[72vh] w-full overflow-hidden sm:min-h-[78vh] lg:min-h-[85vh]"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 overflow-hidden">
          {/*
            Wrapper centraliza com translate CSS; o motion.div interno só recebe scale/x do Framer.
            Se os dois no mesmo nó, o inline transform do Framer sobrescreve o -translate-x-1/2 e a animação para.
          */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[120%] w-[120%] max-w-none -translate-x-1/2 -translate-y-1/2">
            <motion.div
              className="h-full w-full will-change-transform"
              style={{ transformOrigin: '48% 38%' }}
              animate={
                reduceMotion
                  ? { scale: 1, x: '0%' }
                  : {
                      scale: [1, 1.08],
                      x: ['-4%', '3%'],
                    }
              }
              transition={
                reduceMotion
                  ? { duration: 0 }
                  : {
                      duration: 28,
                      repeat: Infinity,
                      repeatType: 'mirror',
                      ease: 'easeInOut',
                    }
              }
            >
              <img
                src={feature.backdrop}
                alt=""
                className={`h-full w-full object-cover object-[center_28%] ${feature.backdropMirror ? 'scale-x-[-1]' : ''}`}
                fetchPriority="high"
              />
            </motion.div>
          </div>
        </div>
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
            <motion.button
              type="button"
              whileTap={{ scale: 0.98 }}
              className="group relative inline-flex overflow-hidden rounded-full bg-white px-6 py-3 text-sm font-semibold text-black shadow-lg shadow-black/30 ring-1 ring-white/15 transition-shadow duration-300 hover:shadow-xl hover:shadow-violet-500/25 hover:ring-violet-400/40"
              onClick={() => {
                if (feature.trailerYoutubeId) setTrailerOpen(true)
                else document.getElementById('series')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              <span
                className="pointer-events-none absolute inset-x-0 bottom-0 h-[135%] translate-y-full rounded-t-[42%] bg-gradient-to-t from-violet-700 via-violet-600 to-fuchsia-500 transition-transform duration-500 ease-[cubic-bezier(0.33,1,0.68,1)] group-hover:translate-y-0"
                aria-hidden
              />
              <span className="relative z-10 flex items-center gap-2 transition-colors duration-300 group-hover:text-white">
                <Play className="size-5 fill-current" />
                Assistir
              </span>
            </motion.button>
            <motion.button
              type="button"
              whileTap={{ scale: 0.98 }}
              className="group relative inline-flex overflow-hidden rounded-full border border-white/25 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur-md ring-1 ring-white/10 transition-shadow duration-300 hover:border-violet-400/35 hover:shadow-lg hover:shadow-violet-600/20"
            >
              <span
                className="pointer-events-none absolute inset-x-0 bottom-0 h-[135%] translate-y-full rounded-t-[42%] bg-gradient-to-t from-violet-600/95 via-fuchsia-600/85 to-violet-500/90 transition-transform duration-500 ease-[cubic-bezier(0.33,1,0.68,1)] group-hover:translate-y-0"
                aria-hidden
              />
              <span className="relative z-10 flex items-center gap-2 transition-[text-shadow] duration-300 group-hover:text-white group-hover:drop-shadow-sm">
                <Plus className="size-5" strokeWidth={2.25} />
                Minha lista
              </span>
            </motion.button>
            <motion.button
              type="button"
              whileTap={{ scale: 0.98 }}
              className="group relative inline-flex overflow-hidden rounded-full border border-white/15 bg-black/40 px-5 py-3 text-sm font-semibold text-white/95 backdrop-blur-md ring-1 ring-white/10 transition-shadow duration-300 hover:border-fuchsia-500/30 hover:shadow-lg hover:shadow-fuchsia-900/30"
            >
              <span
                className="pointer-events-none absolute inset-x-0 bottom-0 h-[135%] translate-y-full rounded-t-[42%] bg-gradient-to-t from-fuchsia-900/95 via-violet-800/90 to-cyan-600/75 transition-transform duration-500 ease-[cubic-bezier(0.33,1,0.68,1)] group-hover:translate-y-0"
                aria-hidden
              />
              <span className="relative z-10 flex items-center gap-2 transition-colors duration-300 group-hover:text-white">
                <Info className="size-5" strokeWidth={2} />
                Sinopse
              </span>
            </motion.button>
          </div>
        </motion.div>
      </div>

      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#07060d] to-transparent"
        aria-hidden
      />

      {feature.trailerYoutubeId ? (
        <TrailerModal
          open={trailerOpen}
          onClose={() => setTrailerOpen(false)}
          youtubeId={feature.trailerYoutubeId}
          title={feature.title}
        />
      ) : null}
    </section>
  )
}
