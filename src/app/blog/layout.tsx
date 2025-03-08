import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog | Mahmut',
  description: 'IT ve yazılım dünyasından güncel bilgiler, ipuçları ve teknoloji trendleri hakkında yazılar.',
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {children}
    </>
  )
} 