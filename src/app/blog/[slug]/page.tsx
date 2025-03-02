import { notFound } from 'next/navigation'
import Link from 'next/link'
import { FiArrowLeft, FiCalendar } from 'react-icons/fi'
import { getPostBySlug } from '@/lib/blog'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug)
  
  if (!post) {
    return {
      title: 'Yazı Bulunamadı | Mahmut',
      description: 'Aradığınız blog yazısı bulunamadı.'
    }
  }
  
  return {
    title: `${post.title} | Mahmut`,
    description: post.excerpt,
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug)
  
  if (!post) {
    notFound()
  }
  
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
          <article className="max-w-3xl mx-auto">
            <Link 
              href="/blog" 
              className="inline-flex items-center text-primary hover:text-primary-dark transition-colors mb-8"
            >
              <FiArrowLeft className="mr-2" />
              Tüm Yazılara Dön
            </Link>
            
            <header className="mb-8">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
              
              <div className="flex flex-wrap items-center text-sm text-gray-500 dark:text-gray-400 mb-6">
                <div className="flex items-center">
                  <FiCalendar className="mr-1" />
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
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
              dangerouslySetInnerHTML={{ __html: post.content }} 
            />
          </article>
        </div>
      </div>
      <Footer />
    </main>
  )
} 