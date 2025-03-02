import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Yapım Aşamasında | Mahmut',
  description: 'Bu sayfa şu anda yapım aşamasındadır. Lütfen daha sonra tekrar ziyaret edin.',
}

export default function UnderConstructionLayout({
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