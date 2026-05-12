import { useState } from 'react'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { ContentRow } from './components/ContentRow'
import { Footer } from './components/Footer'
import { MovieDetailModal } from './components/MovieDetailModal'
import { TrailerModal } from './components/TrailerModal'
import {
  heroFeature,
  rows,
  withMovieDefaults,
  type CatalogItem,
} from './data/catalog'

function App() {
  const rowAnchors = ['series', 'comedias', 'filmes', 'kids'] as const
  const [selectedMovie, setSelectedMovie] = useState<CatalogItem | null>(null)
  const [catalogTrailer, setCatalogTrailer] = useState<{
    youtubeId: string
    title: string
  } | null>(null)

  const handlePlayTrailerFromCatalog = (item: CatalogItem) => {
    const d = withMovieDefaults(item)
    if (!d.trailerYoutubeId) return
    setSelectedMovie(null)
    setCatalogTrailer({ youtubeId: d.trailerYoutubeId, title: d.title })
  }

  return (
    <div className="min-h-dvh bg-[#07060d]">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-black"
      >
        Pular para o conteúdo
      </a>

      <Header />

      <main id="main">
        <Hero feature={heroFeature} />

        <div className="relative -mt-6 space-y-2 sm:-mt-10">
          {rows.map((row, i) => (
            <ContentRow
              key={row.id}
              title={row.title}
              items={row.items}
              anchorId={rowAnchors[i] ?? undefined}
              onItemClick={setSelectedMovie}
            />
          ))}
        </div>
      </main>

      <Footer />

      <MovieDetailModal
        item={selectedMovie}
        onClose={() => setSelectedMovie(null)}
        onPlayTrailer={handlePlayTrailerFromCatalog}
      />

      <TrailerModal
        open={catalogTrailer !== null}
        onClose={() => setCatalogTrailer(null)}
        youtubeId={catalogTrailer?.youtubeId ?? ''}
        title={catalogTrailer?.title ?? ''}
      />
    </div>
  )
}

export default App
