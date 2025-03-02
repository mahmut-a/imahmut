'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FiMenu, FiX } from 'react-icons/fi'
import ThemeToggle from './ThemeToggle'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  // Ana sayfada mıyız kontrol et
  const isHomePage = pathname === '/'

  // Anchor link oluştur
  const createAnchorLink = (href: string, label: string) => {
    if (isHomePage) {
      // Ana sayfadaysa anchor link kullan
      return (
        <a 
          href={href} 
          className="px-3 py-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        >
          {label}
        </a>
      )
    } else {
      // Ana sayfada değilse, ana sayfaya yönlendir ve anchor ekle
      return (
        <Link 
          href={`/${href}`} 
          className="px-3 py-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        >
          {label}
        </Link>
      )
    }
  }

  return (
    <header className={`fixed w-full z-10 transition-all duration-300 ${
      scrolled ? 'py-3' : 'py-4'
    }`}>
      <div className={`mx-auto max-w-3xl px-4 sm:px-6 ${
        scrolled ? 'bg-white/90 dark:bg-dark/90 shadow-md backdrop-blur-sm rounded-full py-2' : ''
      }`}>
        <div className="flex justify-between items-center">
          <Link href="/" className="text-xl font-bold text-primary">
            <span className="sr-only">Ana Sayfa</span>
            Mahmut
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <Link 
              href="/" 
              className="px-3 py-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              Ana Sayfa
            </Link>
            {createAnchorLink('#hizmetler', 'Hizmetler')}
            {createAnchorLink('#hakkimda', 'Hakkımda')}
            <Link 
              href="/blog" 
              className="px-3 py-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              Blog
            </Link>
            {createAnchorLink('#iletisim', 'İletişim')}
            <div className="ml-2">
              <ThemeToggle />
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden space-x-2">
            <ThemeToggle />
            <button 
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
              onClick={toggleMenu}
              aria-label={isMenuOpen ? 'Menüyü Kapat' : 'Menüyü Aç'}
            >
              {isMenuOpen ? <FiX className="w-5 h-5" /> : <FiMenu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 mt-2 bg-white dark:bg-gray-900 rounded-lg shadow-lg">
            <ul className="flex flex-col space-y-1">
              <li>
                <Link 
                  href="/" 
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Ana Sayfa
                </Link>
              </li>
              <li>
                {isHomePage ? (
                  <a 
                    href="#hizmetler" 
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Hizmetler
                  </a>
                ) : (
                  <Link 
                    href="/#hizmetler" 
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Hizmetler
                  </Link>
                )}
              </li>
              <li>
                {isHomePage ? (
                  <a 
                    href="#hakkimda" 
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Hakkımda
                  </a>
                ) : (
                  <Link 
                    href="/#hakkimda" 
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Hakkımda
                  </Link>
                )}
              </li>
              <li>
                <Link 
                  href="/blog" 
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Blog
                </Link>
              </li>
              <li>
                {isHomePage ? (
                  <a 
                    href="#iletisim" 
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    İletişim
                  </a>
                ) : (
                  <Link 
                    href="/#iletisim" 
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    İletişim
                  </Link>
                )}
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header 