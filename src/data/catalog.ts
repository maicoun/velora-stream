export type CatalogItem = {
  id: string
  title: string
  image: string
  year?: number
  rating?: string
  synopsis?: string
  genre?: string
}

export type HeroFeature = CatalogItem & {
  backdrop: string
  logo?: string
}

export const heroFeature: HeroFeature = {
  id: 'hero-1',
  title: 'Horizonte Violeta',
  backdrop:
    'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=1920&q=80',
  image:
    'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80',
  year: 2026,
  rating: '16',
  genre: 'Ficção científica · Drama',
  synopsis:
    'Em uma megacidade suspensa, uma arquiteta descobre um sinal que pode reescrever a memória coletiva — e o preço pode ser a própria identidade dela.',
}

export const rows: { id: string; title: string; items: CatalogItem[] }[] = [
  {
    id: 'trending',
    title: 'Em alta para você',
    items: [
      {
        id: 't1',
        title: 'Ruas de Vidro',
        image:
          'https://images.unsplash.com/photo-1598899134739-24e46d623f88?auto=format&fit=crop&w=600&q=80',
      },
      {
        id: 't2',
        title: 'Último Trem',
        image:
          'https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=600&q=80',
      },
      {
        id: 't3',
        title: 'Noite Sem Fim',
        image:
          'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=600&q=80',
      },
      {
        id: 't4',
        title: 'Atlas',
        image:
          'https://images.unsplash.com/photo-1440404653325-ab12749fa851?auto=format&fit=crop&w=600&q=80',
      },
      {
        id: 't5',
        title: 'Corrente',
        image:
          'https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=600&q=80',
      },
      {
        id: 't6',
        title: 'Maré Negra',
        image:
          'https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?auto=format&fit=crop&w=600&q=80',
      },
    ],
  },
  {
    id: 'originals',
    title: 'Originais VELORA',
    items: [
      {
        id: 'o1',
        title: 'Lúmen',
        image:
          'https://images.unsplash.com/photo-1518676590629-f066cb3f544a?auto=format&fit=crop&w=600&q=80',
      },
      {
        id: 'o2',
        title: 'Arco 9',
        image:
          'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=600&q=80',
      },
      {
        id: 'o3',
        title: 'Domínio',
        image:
          'https://images.unsplash.com/photo-1596727147705-61a532a659bd?auto=format&fit=crop&w=600&q=80',
      },
      {
        id: 'o4',
        title: 'Prisma',
        image:
          'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=600&q=80',
      },
      {
        id: 'o5',
        title: 'Silêncio',
        image:
          'https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=600&q=80',
      },
      {
        id: 'o6',
        title: 'Subsolo',
        image:
          'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=600&q=80',
      },
    ],
  },
  {
    id: 'award',
    title: 'Filmes premiados',
    items: [
      {
        id: 'a1',
        title: 'Onde o Rio Quebra',
        image:
          'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=600&q=80',
      },
      {
        id: 'a2',
        title: 'Cartas ao Norte',
        image:
          'https://images.unsplash.com/photo-1598899134739-24e46d623f88?auto=format&fit=crop&w=600&q=80',
      },
      {
        id: 'a3',
        title: 'Vitrina',
        image:
          'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=600&q=80',
      },
      {
        id: 'a4',
        title: 'Claridade',
        image:
          'https://images.unsplash.com/photo-1440404653325-ab12749fa851?auto=format&fit=crop&w=600&q=80',
      },
      {
        id: 'a5',
        title: 'Trilogia',
        image:
          'https://images.unsplash.com/photo-1518676590629-f066cb3f544a?auto=format&fit=crop&w=600&q=80',
      },
    ],
  },
  {
    id: 'continue',
    title: 'Continuar assistindo',
    items: [
      {
        id: 'c1',
        title: 'Temporada 2 · Ep. 4',
        image:
          'https://images.unsplash.com/photo-1596727147705-61a532a659bd?auto=format&fit=crop&w=600&q=80',
      },
      {
        id: 'c2',
        title: 'Episódio pausado',
        image:
          'https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?auto=format&fit=crop&w=600&q=80',
      },
      {
        id: 'c3',
        title: 'Documentário',
        image:
          'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=600&q=80',
      },
      {
        id: 'c4',
        title: 'Minissérie',
        image:
          'https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=600&q=80',
      },
    ],
  },
]
