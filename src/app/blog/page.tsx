'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { FiCalendar, FiClock } from 'react-icons/fi'
import { useEffect, useState } from 'react'
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

export default function BlogPage() {
  const [posts, setPosts] = useState<Post[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch('/api/posts')
        if (!response.ok) {
          throw new Error('Blog yazıları yüklenemedi')
        }
        const data = await response.json()
        setPosts(data)
      } catch (error) {
        console.error('Blog yazıları yüklenirken hata oluştu:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchPosts()
  }, [])

  // Animasyon varyantları
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  }

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

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Header />
      <div className="pt-32 pb-16">
        <div className="container-custom">
          <div className="text-center mb-16">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Blog
            </motion.h1>
            <motion.p 
              className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              IT ve yazılım dünyasından güncel bilgiler, ipuçları ve teknoloji trendleri hakkında yazılar.
            </motion.p>
          </div>

          {isLoading ? (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
            </div>
          ) : (
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={container}
              initial="hidden"
              animate="show"
            >
              {posts.length > 0 ? (
                posts.map((post) => {
                  const readingTime = calculateReadingTime(post.content)
                  
                  return (
                    <motion.article 
                      key={post.slug}
                      variants={item}
                      className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden card-hover transition-all duration-300"
                    >
                      <Link href={`/blog/${post.slug}`} className="block h-full">
                        <div className="p-6 flex flex-col h-full">
                          <h2 className="text-xl font-bold mb-3 text-gray-900 dark:text-white hover:text-primary dark:hover:text-primary transition-colors">
                            {post.title}
                          </h2>
                          
                          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4 space-x-4">
                            <div className="flex items-center">
                              <FiCalendar className="mr-1" />
                              <time dateTime={post.date}>{formatDate(post.date)}</time>
                            </div>
                            <div className="flex items-center">
                              <FiClock className="mr-1" />
                              <span>{readingTime} dk okuma</span>
                            </div>
                          </div>
                          
                          <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                            {post.excerpt}
                          </p>
                          
                          <div className="flex flex-wrap gap-2 mt-auto">
                            {post.tags && post.tags.map((tag: string) => (
                              <span 
                                key={tag} 
                                className="inline-block bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs px-3 py-1 rounded-full"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </Link>
                    </motion.article>
                  )
                })
              ) : (
                <div className="col-span-3 text-center py-12">
                  <p className="text-gray-600 dark:text-gray-400">Henüz blog yazısı bulunmamaktadır.</p>
                </div>
              )}
            </motion.div>
          )}
        </div>
      </div>
      <Footer />
    </main>
  )
} 