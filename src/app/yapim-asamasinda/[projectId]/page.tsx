'use client'

import { useParams } from 'next/navigation'
import ConstructionPage from '@/components/ConstructionPage'
import { getProjectById } from '@/data/projects'

export default function ProjectUnderConstructionPage() {
  const params = useParams()
  const projectId = params.projectId as string
  
  // Proje bilgilerini al
  const project = getProjectById(projectId)
  
  // Varsayılan değerler
  const title = project?.title || 'Proje Yapım Aşamasında'
  const description = project?.description || 'Bu proje şu anda geliştiriliyor. Çok yakında burada harika içerikler olacak.'
  const completionPercentage = project?.completionPercentage || 25
  
  return (
    <ConstructionPage 
      title="Yapım Aşamasında"
      projectName={title}
      description={description}
      completionPercentage={completionPercentage}
      returnUrl="/"
      returnText="Ana Sayfaya Dön"
    />
  )
} 