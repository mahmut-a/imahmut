import Link from 'next/link'
import { getAllPosts } from '@/lib/blog'
import { FiCalendar } from 'react-icons/fi'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Blog | Mahmut',
  description: 'IT ve yazılım dünyasından güncel bilgiler, ipuçları ve teknoloji trendleri hakkında yazılar.',
}

export default function BlogPage() {
  const posts = getAllPosts()
  
  // Tarih formatını düzenleyen yardımcı fonksiyon
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' }
    return new Date(dateString).toLocaleDateString('tr-TR', options)
  }

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Header />
      <div className="pt-32 pb-16">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Blog
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              IT ve yazılım dünyasından güncel bilgiler, ipuçları ve teknoloji trendleri hakkında yazılar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.length > 0 ? (
              posts.map((post) => (
                <article 
                  key={post.slug}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden card-hover transition-all duration-300"
                >
                  <Link href={`/blog/${post.slug}`} className="block h-full">
                    <div className="p-6 flex flex-col h-full">
                      <h2 className="text-xl font-bold mb-3 text-gray-900 dark:text-white hover:text-primary dark:hover:text-primary transition-colors">
                        {post.title}
                      </h2>
                      
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                        <div className="flex items-center">
                          <FiCalendar className="mr-1" />
                          <time dateTime={post.date}>{formatDate(post.date)}</time>
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
                </article>
              ))
            ) : (
              <div className="col-span-3 text-center py-12">
                <p className="text-gray-600 dark:text-gray-400">Henüz blog yazısı bulunmamaktadır.</p>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
} 