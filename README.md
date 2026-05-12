# VELORA+

Interface de **streaming fictícia** inspirada em serviços premium (layout escuro, hero em destaque, carrosséis horizontais e navegação responsiva). Projeto de **demonstração front-end**: a marca **VELORA+** não representa um serviço real.

## Funcionalidades

- Página inicial com **destaque** (hero animado, trailer no YouTube ao clicar em *Assistir* onde configurado)
- **Carrosséis** por seção (Em alta, Comédias, Filmes premiados, Continuar assistindo)
- **Modal de detalhes** ao clicar em um título (sinopse, metadados, botão de trailer)
- **Menu mobile** com animação
- **Design responsivo** e efeitos com Framer Motion

## Tecnologias

- [React](https://react.dev/) 19 + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/)
- [Tailwind CSS](https://tailwindcss.com/) v4 (`@tailwindcss/vite`)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide React](https://lucide.dev/) (ícones)

## Pré-requisitos

- [Node.js](https://nodejs.org/) (recomendado: LTS atual)

## Como rodar

Clone o repositório, entre na pasta e instale as dependências:

```bash
npm install
```

Ambiente de desenvolvimento (com hot reload):

```bash
npm run dev
```

Abra o endereço que o Vite mostrar no terminal (geralmente `http://localhost:5173`).

Build de produção:

```bash
npm run build
```

Pré-visualizar o build:

```bash
npm run preview
```

Lint:

```bash
npm run lint
```

## Estrutura principal

- `src/App.tsx` — composição da página e estado dos modais
- `src/components/` — cabeçalho, rodapé, hero, carrosséis, modais
- `src/data/catalog.ts` — catálogo de exemplo (títulos reais de filmes para demonstração)
- `public/` — assets estáticos (ex.: imagem do hero em destaque)

## Imagens e marcas

- **Pôsteres** são carregados a partir do CDN do [The Movie Database (TMDB)](https://www.themoviedb.org/). Os títulos e artes pertencem aos respectivos estúdios; o uso aqui é apenas para **portfólio / estudo de interface**.
- **Trailers** incorporados via YouTube (embed), apenas onde há `trailerYoutubeId` no catálogo.

## Licença

Este repositório é um projeto pessoal de demonstração. Não há licença de uso comercial do conteúdo audiovisual exibido; respeite os termos do TMDB, do YouTube e dos detentores dos direitos ao reutilizar ou publicar qualquer variante.

---

Desenvolvido por [Maicon Gonçalves (@maicoun)](https://github.com/maicoun).
