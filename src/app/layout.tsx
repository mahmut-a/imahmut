import '@/styles/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mahmut | IT & Yazılım Çözümleri',
  description: 'Web geliştirme, E-Ticaret, SEO, Yapay Zeka ve IT çözümleri sunan profesyonel portfolyo sitesi',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" suppressHydrationWarning className="dark">
      <head>
        <Script id="theme-script" strategy="beforeInteractive">
          {`
            (function() {
              try {
                const savedTheme = localStorage.getItem('theme') || 'dark';
                if (savedTheme === 'light') {
                  document.documentElement.classList.remove('dark');
                } else {
                  document.documentElement.classList.add('dark');
                }
              } catch (e) {
                console.error('Tema ayarı yüklenirken hata oluştu:', e);
              }
            })();
          `}
        </Script>

        {/* Vercel */}
        
        <Analytics />
        <SpeedInsights />
      </head>
      <body className={`${inter.className} bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-200`}>
        {children}
      </body>
    </html>
  )
} 