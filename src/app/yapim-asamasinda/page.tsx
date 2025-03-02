'use client'

import ConstructionPage from '@/components/ConstructionPage'

export default function UnderConstructionPage() {
  return (
    <ConstructionPage 
      title="Yapım Aşamasında"
      description="Bu sayfa şu anda geliştiriliyor. Çok yakında burada harika içerikler olacak. Lütfen daha sonra tekrar ziyaret edin."
      completionPercentage={35}
      returnUrl="/"
      returnText="Ana Sayfaya Dön"
    />
  )
} 