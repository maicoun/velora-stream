export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#05040a] px-4 py-14 sm:px-6 lg:px-10">
      <div className="mx-auto flex max-w-[1600px] flex-col gap-10 lg:flex-row lg:justify-between">
        <div>
          <p className="font-[family-name:var(--font-display)] text-2xl font-semibold text-white">
            VELORA<span className="text-violet-400">+</span>
          </p>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-white/55">
            Pôsteres carregados do The Movie Database (TMDB). Títulos e imagens
            pertencem aos estúdios; uso aqui é só para demonstração de interface.
          </p>
        </div>
        <nav className="flex flex-wrap gap-x-10 gap-y-4 text-sm text-white/55">
          <div className="flex flex-col gap-2">
            <span className="font-medium text-white/75">Explorar</span>
            <a href="#inicio" className="hover:text-white">
              Início
            </a>
            <a href="#series" className="hover:text-white">
              Séries
            </a>
            <a href="#filmes" className="hover:text-white">
              Filmes
            </a>
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-medium text-white/75">Ajuda</span>
            <span className="cursor-default">Central de ajuda</span>
            <span className="cursor-default">Dispositivos</span>
            <span className="cursor-default">Privacidade</span>
          </div>
        </nav>
      </div>
      <p className="mx-auto mt-12 max-w-[1600px] text-center text-xs text-white/35">
        © {new Date().getFullYear()} VELORA — demonstração front-end
      </p>
    </footer>
  )
}
