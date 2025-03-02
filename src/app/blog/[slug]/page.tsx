'use client'

import { useEffect, useState } from 'react'
import { notFound, useParams } from 'next/navigation'
import Link from 'next/link'
import { FiArrowLeft, FiCalendar, FiClock } from 'react-icons/fi'
import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

// Blog yazısı tipi
type Post = {
  slug: string
  title: string
  date: string
  excerpt: string
  content: string
  tags?: string[]
}

export default function BlogPostPage() {
  const params = useParams()
  const slug = params.slug as string
  
  const [post, setPost] = useState<Post | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [contentHtml, setContentHtml] = useState('')
  
  useEffect(() => {
    async function fetchPost() {
      try {
        const response = await fetch(`/api/posts/${slug}`)
        if (!response.ok) {
          if (response.status === 404) {
            notFound()
          }
          throw new Error('Blog yazısı yüklenemedi')
        }
        const data = await response.json()
        setPost(data.post)
        setContentHtml(data.contentHtml)
      } catch (error) {
        console.error('Blog yazısı yüklenirken hata oluştu:', error)
      } finally {
        setIsLoading(false)
      }
    }

    if (slug) {
      fetchPost()
    }
  }, [slug])
  
  // Tarih formatını düzenleyen yardımcı fonksiyon
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' }
    return new Date(dateString).toLocaleDateString('tr-TR', options)
  }
  
  // Okuma süresini hesaplayan yardımcı fonksiyon
  const calculateReadingTime = (content: string) => {
    const wordsPerMinute = 200
    const wordCount = content.split(/\s+/).length
    const readingTime = Math.ceil(wordCount / wordsPerMinute)
    return readingTime
  }

  if (isLoading) {
    return (
      <main className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <Header />
        <div className="pt-32 pb-16">
          <div className="container-custom">
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    )
  }

  if (!post) {
    return notFound()
  }
  
  const readingTime = calculateReadingTime(post.content)

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Header />
      <div className="pt-32 pb-16">
        <div className="container-custom">
          <article className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link 
                href="/blog" 
                className="inline-flex items-center text-primary hover:text-primary-dark transition-colors mb-8"
              >
                <FiArrowLeft className="mr-2" />
                Tüm Yazılara Dön
              </Link>
              
              <header className="mb-8">
                <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
                
                <div className="flex flex-wrap items-center text-sm text-gray-500 dark:text-gray-400 mb-6 space-x-4">
                  <div className="flex items-center">
                    <FiCalendar className="mr-1" />
                    <time dateTime={post.date}>{formatDate(post.date)}</time>
                  </div>
                  <div className="flex items-center">
                    <FiClock className="mr-1" />
                    <span>{readingTime} dk okuma</span>
                  </div>
                </div>
                
                {post.tags && (
                  <div className="flex flex-wrap gap-2 mb-6">
                    {post.tags.map((tag: string) => (
                      <span 
                        key={tag} 
                        className="inline-block bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </header>
              
              <div 
                className="prose prose-lg dark:prose-invert max-w-none bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md"
                dangerouslySetInnerHTML={{ __html: contentHtml }} 
              />
            </motion.div>
          </article>
        </div>
      </div>
      <Footer />
    </main>
  )
} 