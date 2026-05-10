import { useEffect, useState } from 'react'
import { Bell, Menu, Search, UserRound, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Séries', href: '#series' },
  { label: 'Filmes', href: '#filmes' },
  { label: 'Originais', href: '#originais' },
  { label: 'Infantil', href: '#kids' },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background,backdrop-filter,border-color] duration-300 ${
          scrolled
            ? 'border-b border-white/10 bg-[#07060d]/85 backdrop-blur-xl'
            : 'border-b border-transparent bg-gradient-to-b from-black/70 to-transparent'
        }`}
      >
        <div className="mx-auto flex max-w-[1600px] items-center gap-4 px-4 py-3 sm:px-6 lg:px-10">
          <a
            href="#inicio"
            className="font-[family-name:var(--font-display)] text-xl font-semibold tracking-tight text-white sm:text-2xl"
          >
            VELORA<span className="text-violet-400">+</span>
          </a>

          <nav
            className="hidden flex-1 items-center gap-8 lg:flex"
            aria-label="Principal"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-white/80 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="ml-auto flex items-center gap-1 sm:gap-2">
            <button
              type="button"
              className="rounded-full p-2.5 text-white/85 transition-colors hover:bg-white/10 hover:text-white"
              aria-label="Buscar"
            >
              <Search className="size-5" strokeWidth={2} />
            </button>
            <button
              type="button"
              className="hidden rounded-full p-2.5 text-white/85 transition-colors hover:bg-white/10 hover:text-white sm:inline-flex"
              aria-label="Notificações"
            >
              <Bell className="size-5" strokeWidth={2} />
            </button>
            <button
              type="button"
              className="hidden items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-sm font-medium text-white/95 transition-colors hover:bg-white/10 sm:flex"
            >
              <UserRound className="size-4 opacity-90" />
              Perfis
            </button>
            <button
              type="button"
              className="rounded-full p-2.5 text-white lg:hidden"
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
            >
              {mobileOpen ? (
                <X className="size-6" strokeWidth={2} />
              ) : (
                <Menu className="size-6" strokeWidth={2} />
              )}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen ? (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
            onClick={() => setMobileOpen(false)}
          >
            <motion.nav
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 320 }}
              className="absolute right-0 top-0 flex h-full w-[min(100%,320px)] flex-col gap-1 border-l border-white/10 bg-[#0b0912] p-6 pt-20 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
              aria-label="Menu mobile"
            >
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-lg px-3 py-3 text-base font-medium text-white/90 hover:bg-white/10"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <hr className="my-4 border-white/10" />
              <button
                type="button"
                className="flex items-center gap-2 rounded-lg px-3 py-3 text-left text-white/90 hover:bg-white/10"
              >
                <UserRound className="size-5" />
                Perfis e conta
              </button>
            </motion.nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  )
}
