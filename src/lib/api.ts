import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

// Blog yazılarının bulunduğu dizin
const postsDirectory = path.join(process.cwd(), 'content/blog')

// Blog yazısı tipi
export type Post = {
  slug: string
  title: string
  date: string
  excerpt: string
  content: string
  tags?: string[]
}

// Tüm blog yazılarını getir
export function getAllPosts(): Post[] {
  // Dizindeki tüm dosyaları oku
  const fileNames = fs.readdirSync(postsDirectory)
  
  const allPostsData = fileNames
    .filter(fileName => fileName.endsWith('.md')) // Sadece markdown dosyalarını al
    .map(fileName => {
      // Dosya adından slug oluştur
      const slug = fileName.replace(/\.md$/, '')
      
      // Markdown dosyasını oku
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      
      // gray-matter ile içeriği parse et
      const matterResult = matter(fileContents)
      
      // Veriyi döndür
      return {
        slug,
        title: matterResult.data.title,
        date: matterResult.data.date,
        excerpt: matterResult.data.excerpt,
        content: matterResult.content,
        tags: matterResult.data.tags
      }
    })
  
  // Tarihe göre sırala (en yeniden en eskiye)
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

// Belirli bir blog yazısını getir
export function getPostBySlug(slug: string): Post | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    
    // gray-matter ile içeriği parse et
    const matterResult = matter(fileContents)
    
    // Veriyi döndür
    return {
      slug,
      title: matterResult.data.title,
      date: matterResult.data.date,
      excerpt: matterResult.data.excerpt,
      content: matterResult.content,
      tags: matterResult.data.tags
    }
  } catch (error) {
    console.error(`Blog yazısı bulunamadı: ${slug}`, error)
    return null
  }
}

// Tüm blog yazılarının slug'larını getir
export function getAllPostSlugs() {
  const fileNames = fs.readdirSync(postsDirectory)
  
  return fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map(fileName => {
      return {
        params: {
          slug: fileName.replace(/\.md$/, '')
        }
      }
    })
} 