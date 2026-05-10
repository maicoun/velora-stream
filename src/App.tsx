import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { ContentRow } from './components/ContentRow'
import { Footer } from './components/Footer'
import { heroFeature, rows } from './data/catalog'

function App() {
  const rowAnchors = ['series', 'originais', 'filmes', 'kids'] as const

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
            />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default App
