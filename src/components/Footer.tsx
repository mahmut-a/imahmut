'use client'

import Link from 'next/link'
import { FiGithub, FiLinkedin, FiTwitter, FiMail , FiCodepen} from 'react-icons/fi'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container-custom py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="text-xl font-bold text-primary">
              Mahmut
            </Link>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Web Geliştirme, E-Ticaret, SEO, Yapay Zeka ve IT Çözümleri
            </p>
          </div>

          <div className="flex space-x-4 mb-4 md:mb-0">
            <a 
              href="https://github.com/mahmut-a" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <FiGithub className="w-5 h-5" />
            </a>
            <a 
              href="https://linkedin.com/mahmut-a" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <FiLinkedin className="w-5 h-5" />
            </a>
            <a 
              href="https://twitter.com/yunusclk2025" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
              aria-label="Twitter"
            >
              <FiTwitter className="w-5 h-5" />
            </a>
            <a 
              href="mailto:imahmut@proton.me" 
              className="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
              aria-label="E-posta"
            >
              <FiMail className="w-5 h-5" />
            </a>
            <a 
              href="https://codepen.io/Odumam" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
              aria-label="CodePen"
            >
              <FiCodepen className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="text-center text-sm text-gray-500 dark:text-gray-400 mt-4 pt-4 border-t border-gray-100 dark:border-gray-800">
          <p>&copy; {currentYear} Mahmut. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 