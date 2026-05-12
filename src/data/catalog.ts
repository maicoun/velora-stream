/** Catálogo: pôsteres via TMDB; fallback Unsplash se a imagem falhar. */

export type CatalogItem = {
  id: string
  title: string
  image: string
  year?: number
  rating?: string
  synopsis?: string
  genre?: string
  /** Duração exibida no painel (ex.: "2h 14min"). */
  duration?: string
  /** Trailer no YouTube — botão Assistir no painel do título. */
  trailerYoutubeId?: string
}

/** Preenche campos opcionais para o painel de detalhes (demonstração). */
export function withMovieDefaults(item: CatalogItem): CatalogItem {
  const fallbackSynopsis = `${item.title} integra o catálogo VELORA+: uma história com ritmo forte, personagens marcantes e imagens pensadas para maratonar do começo ao fim.`
  return {
    ...item,
    synopsis: item.synopsis ?? fallbackSynopsis,
    year: item.year ?? 2024,
    rating: item.rating ?? '14',
    genre: item.genre ?? 'Drama',
    duration: item.duration,
    trailerYoutubeId: item.trailerYoutubeId,
  }
}

export type HeroFeature = CatalogItem & {
  backdrop: string
  logo?: string
  /** Espelha o backdrop horizontalmente (útil para arte panorâmica com texto à esquerda). */
  backdropMirror?: boolean
  /** ID do vídeo no YouTube — abre player de trailer ao clicar em Assistir. */
  trailerYoutubeId?: string
}

/** Só largura — evita crops que às vezes falham no Imgix para certas fotos. */
const uw = (photoId: string, w = 600) =>
  `https://images.unsplash.com/${photoId}?ixlib=rb-4.0.3&auto=format&fit=crop&w=${w}&q=82`

/** Fallback genérico se o poster não carregar (escuro + contraste). */
export const POSTER_FALLBACK_URL = uw('photo-1517604931442-7e0c8ed2963c')

/** Pôster oficial TMDB (The Movie Database). Direitos dos estúdios / TMDB. */
const tmdbP = (file: string) =>
  `https://image.tmdb.org/t/p/w500/${file.replace(/^\//, '')}`

export const heroFeature: HeroFeature = {
  id: 'hero-1',
  title: 'Star Wars: A Ascensão Skywalker',
  backdrop: '/hero-destaque-star-wars.png',
  image: '/hero-destaque-star-wars.png',
  backdropMirror: true,
  /** Trailer final oficial (Star Wars / Lucasfilm no YouTube). */
  trailerYoutubeId: '8Qn_spdM5Zg',
  year: 2019,
  rating: '10',
  genre: 'Ficção científica · Aventura',
  synopsis:
    'A saga Skywalker chega ao ápice. Rey e os heróis da Resistência enfrentam a Primeira Ordem enquanto velhas verdades sobre o destino vêm à luz.',
}

export const rows: { id: string; title: string; items: CatalogItem[] }[] = [
  {
    id: 'trending',
    title: 'Em alta para você',
    items: [
      {
        id: 't1',
        title: 'Interestelar',
        image: tmdbP('6ricSDD83BClJsFdGB6x7cM0MFQ.jpg'),
        year: 2014,
        rating: '10',
        genre: 'Ficção científica · Drama',
        duration: '2h 49min',
        synopsis:
          'Em um futuro próximo da Terra esgotada, um grupo de astronautas atravessa um buraco de minhoca em busca de um novo lar para a humanidade.',
        trailerYoutubeId: 'zSWdZVtXT7E',
      },
      {
        id: 't2',
        title: 'Parasita',
        image: tmdbP('igw938inb6Fy0YVcwIyxQ7Lu5FO.jpg'),
        year: 2019,
        rating: '16',
        genre: 'Suspense · Drama · Thriller',
        duration: '2h 12min',
        synopsis:
          'Toda a família de Ki-taek está desempregada. Quando o filho arruma um emprego na mansão dos Park, a situação dos dois lados da cidade deixa de ser o que parece.',
        trailerYoutubeId: 'SEUXfv87Wpk',
      },
      {
        id: 't3',
        title: 'Matrix',
        image: tmdbP('lDqMDI3xpbB9UQRyeXfei0MXhqb.jpg'),
        year: 1999,
        rating: '16',
        genre: 'Ação · Ficção científica',
        duration: '2h 16min',
        synopsis:
          'Neo descobre que o mundo que conhece é uma simulação e se junta à rebelião contra as máquinas que escravizam a humanidade.',
        trailerYoutubeId: 'vKQi3bBA1y8',
      },
      {
        id: 't4',
        title: 'Mad Max: Estrada da Fúria',
        image: tmdbP('tH64gzAHDFg7EFcgfkkZyHdGM5P.jpg'),
        year: 2015,
        rating: '16',
        genre: 'Ação · Aventura · Ficção científica',
        duration: '2h 00min',
        synopsis:
          'Em um deserto pós-apocalíptico, Max ajuda Imperator Furiosa a fugir de um tirano com um grupo de prisioneiras.',
        trailerYoutubeId: 'hEJnMQG9ev8',
      },
      {
        id: 't5',
        title: 'John Wick: De Volta ao Jogo',
        image: tmdbP('lBcQGk1ygGM2wYmpypFrPp0YohN.jpg'),
        year: 2014,
        rating: '16',
        genre: 'Ação · Thriller',
        duration: '1h 41min',
        synopsis:
          'Um ex-assassino deixa o luto de lado quando gangsters roubam seu carro e matam o cachorro deixado por sua falecida esposa.',
        trailerYoutubeId: 'C0BMx-qxsP4',
      },
      {
        id: 't6',
        title: 'Oppenheimer',
        image: tmdbP('1OsQJEoSXBjduuCvDOlRhoEUaHu.jpg'),
        year: 2023,
        rating: '16',
        genre: 'Biografia · Drama · História',
        duration: '3h 00min',
        synopsis:
          'A história do físico J. Robert Oppenheimer e do projeto Manhattan, que levou à criação da bomba atômica.',
        trailerYoutubeId: 'uYPbbksJxIg',
      },
    ],
  },
  {
    id: 'comedy',
    title: 'Comédias',
    items: [
      {
        id: 'o1',
        title: 'Todo Mundo em Pânico',
        image: tmdbP('549UoU38uoikbqgXG09rkkfIEWf.jpg'),
        year: 2000,
        rating: '16',
        genre: 'Comédia · Terror · Paródia',
        duration: '1h 28min',
        synopsis:
          'Um grupo de adolescentes é ameaçado por um assassino mascarado que os espiona — numa paródia de filmes de terror dos anos 90.',
        trailerYoutubeId: 'HTLPULjk0Tg',
      },
      {
        id: 'o2',
        title: 'Superbad: É Hoje!',
        image: tmdbP('rABcQMa8m67EJslknSlMfE3BP8L.jpg'),
        year: 2007,
        rating: '16',
        genre: 'Comédia',
        duration: '1h 53min',
        synopsis:
          'Dois amigos do último ano do colegial tentam comprar bebida para uma festa e vivem uma noite fora de controle antes de se separarem.',
        trailerYoutubeId: 'MNpiwfM580s',
      },
      {
        id: 'o3',
        title: 'Se Beber, Não Case!',
        image: tmdbP('m0tQyMdp3fy5ooUOQkJMd1fQKBJ.jpg'),
        year: 2009,
        rating: '16',
        genre: 'Comédia',
        duration: '1h 40min',
        synopsis:
          'Três amigos acordam após uma despedida de solteiro em Las Vegas sem lembrar da noite anterior — e com o noivo desaparecido.',
        trailerYoutubeId: 'tlQg682KQYE',
      },
      {
        id: 'o4',
        title: 'Debi & Lóide: Dois Idiotas em Curso',
        image: tmdbP('3pJwSxO8L2MOGXGaJIOAAq35LAP.jpg'),
        year: 1994,
        rating: '12',
        genre: 'Comédia',
        duration: '1h 47min',
        synopsis:
          'Dois amigos ingênuos atravessam os EUA para devolver uma maleta e acumulam trapalhadas pelo caminho.',
        trailerYoutubeId: 'lKA7TAFRHYQ',
      },
      {
        id: 'o5',
        title: 'American Pie: A Primeira Vez é Inesquecível',
        image: tmdbP('lqoYLFpnrOjmf2wZXd57T5NvvRz.jpg'),
        year: 1999,
        rating: '16',
        genre: 'Comédia · Romance',
        duration: '1h 35min',
        synopsis:
          'Quatro amigos do ensino médio fazem um pacto para perder a virgindade antes do baile de formatura.',
        trailerYoutubeId: 'iUZJZTGvPIs',
      },
      {
        id: 'o6',
        title: 'Gente Grande',
        image: tmdbP('ppU2xJnlKdW3F01AtC9wMuXRZCg.jpg'),
        year: 2010,
        rating: '12',
        genre: 'Comédia',
        duration: '1h 42min',
        synopsis:
          'Cinco amigos de infância reencontram-se no funeral do técnico de basquete e passam o fim de semana com as famílias numa casa no lago.',
        trailerYoutubeId: 'e-J-TM5jhJg',
      },
    ],
  },
  {
    id: 'award',
    title: 'Filmes premiados',
    items: [
      {
        id: 'a1',
        title: 'Cidade de Deus',
        image: tmdbP('gfnXixcGC060QcG6JPxN6AMdVsq.jpg'),
        year: 2002,
        rating: '16',
        genre: 'Drama · Crime',
        duration: '2h 10min',
        synopsis:
          'Na Cidade de Deus, no Rio, a vida de Buscapé cruza o ascenso do tráfico e das gangues nas décadas de 1960 a 1980.',
        trailerYoutubeId: 'fpGFUncDiKw',
      },
      {
        id: 'a2',
        title: 'Moonlight: Sob a Luz do Luar',
        image: tmdbP('AekOkoT88EhDHikUQXQcKri2q4B.jpg'),
        year: 2017,
        rating: '16',
        genre: 'Drama',
        duration: '1h 51min',
        synopsis:
          'Três momentos na vida de Chiron: infância, adolescência e vida adulta — enquanto ele descobre amor e identidade em Miami.',
        trailerYoutubeId: '9NJj12tJzqc',
      },
      {
        id: 'a3',
        title: 'Green Book: O Guia',
        image: tmdbP('u9dldwRwQjTZGlIxKaAtAPLAjOv.jpg'),
        year: 2018,
        rating: '14',
        genre: 'Drama · Biografia',
        duration: '2h 10min',
        synopsis:
          'Um segurança ítalo-americano escolta um pianista negro em turnê pelo sul dos EUA nos anos 1960, quando o segregacionismo era lei.',
        trailerYoutubeId: 'QkZxUW_hsSY',
      },
      {
        id: 'a4',
        title: 'Birdman ou (A Inesperada Virtude da Ignorância)',
        image: tmdbP('7gwtDnEJ39QarOyzt9bSxEj3SkD.jpg'),
        year: 2014,
        rating: '16',
        genre: 'Comédia dramática · Drama',
        duration: '1h 59min',
        synopsis:
          'Um ator famoso por um papel de super-herói tenta renascer em uma peça na Broadway enquanto luta com o ego e a fama.',
        trailerYoutubeId: 'uJfLoE6hanc',
      },
      {
        id: 'a5',
        title: 'Duna',
        image: tmdbP('uzERcfV2rSHNhW5eViQiO9hNiA7.jpg'),
        year: 2021,
        rating: '14',
        genre: 'Ficção científica · Aventura · Drama',
        duration: '2h 35min',
        synopsis:
          'Paul Atreides viaja ao planeta deserto Arrakis, única fonte da especiaria mais valiosa do universo, e é envolvido em intrigas entre grandes casas.',
        trailerYoutubeId: '8g18jFHCLXk',
      },
      {
        id: 'a6',
        title: 'Estrelas Além do Tempo',
        image: tmdbP('6A1Jn0tooQYgi2C8sNz5OaIW98C.jpg'),
        year: 2016,
        rating: '10',
        genre: 'Drama · Biografia · História',
        duration: '2h 07min',
        synopsis:
          'Três matemáticas negras na NASA nos anos 1960 superam discriminação e ajudam a lançar as primeiras missões espaciais dos EUA.',
        trailerYoutubeId: 'RK8xdjGANG4',
      },
    ],
  },
  {
    id: 'continue',
    title: 'Continuar assistindo',
    items: [
      {
        id: 'c1',
        title: 'Velozes e Furiosos 7 · 48 min restantes',
        image: tmdbP('spydMyyD81HjGJVwZvjajkrWW1h.jpg'),
        year: 2015,
        rating: '14',
        genre: 'Ação · Thriller',
        duration: '2h 17min',
        synopsis:
          'Dom Toretto e a equipe enfrentam Deckard Shaw, irmão do vilão derrotado em Londres, enquanto tentam recuperar um programa de vigilância.',
        trailerYoutubeId: 'Skpu5HaVkHc',
      },
      {
        id: 'c2',
        title: 'Homem-Aranha: Sem Volta Para Casa · pausado',
        image: tmdbP('xaKydnMw6wR1MBAjS5seGPVusbs.jpg'),
        year: 2021,
        rating: '10',
        genre: 'Ação · Aventura · Ficção científica',
        duration: '2h 28min',
        synopsis:
          'Peter Parker pede ajuda ao Doutor Estranho para que o mundo esqueça que ele é o Homem-Aranha — e abre o multiverso sem querer.',
        trailerYoutubeId: 'JfVOs4VSpmA',
      },
      {
        id: 'c3',
        title: 'Avatar: O Caminho da Água · 1h 12min assistidas',
        image: tmdbP('hm6nONQOgVpKmRK5YUX9EqfJ0NH.jpg'),
        year: 2022,
        rating: '14',
        genre: 'Ficção científica · Aventura',
        duration: '3h 12min',
        synopsis:
          'Jake Sully e Neytiri formam uma família em Pandora; uma ameaça antiga os obriga a fugir para o clã dos Na\'vi do mar.',
        trailerYoutubeId: 'd9MyW72ELq0',
      },
      {
        id: 'c4',
        title: 'Barbie · retomar',
        image: tmdbP('yRRuLt7sMBEQkHsd1S3KaaofZn7.jpg'),
        year: 2023,
        rating: '12',
        genre: 'Comédia · Aventura · Fantasia',
        duration: '1h 54min',
        synopsis:
          'Barbie vive em Barbieland até questionar a própria existência; junto de Ken, atravessa para o mundo real em uma jornada de autoconhecimento.',
        trailerYoutubeId: 'pBk4NYhWNMM',
      },
    ],
  },
]
