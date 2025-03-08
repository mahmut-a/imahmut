import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const postsDirectory = path.join(process.cwd(), 'content/blog')

export type Post = {
  slug: string
  title: string
  date: string
  excerpt: string
  content: string
  tags?: string[]
}

export function getAllPosts(): Post[] {
  // content/blog klasörü yoksa boş dizi döndür
  if (!fs.existsSync(postsDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map(fileName => {
      const slug = fileName.replace(/\.md$/, '')
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const matterResult = matter(fileContents)

      // Markdown içeriğini HTML'e dönüştür
      const processedContent = remark()
        .use(html)
        .processSync(matterResult.content)
      const content = processedContent.toString()

      return {
        slug,
        title: matterResult.data.title || 'Başlıksız Yazı',
        date: matterResult.data.date || new Date().toISOString(),
        excerpt: matterResult.data.excerpt || '',
        content,
        tags: matterResult.data.tags || [],
      }
    })

  // Tarihe göre sırala (en yeni en üstte)
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

export function getPostBySlug(slug: string): Post | null {
  try {
    // content/blog klasörü yoksa null döndür
    if (!fs.existsSync(postsDirectory)) {
      return null
    }

    const fullPath = path.join(postsDirectory, `${slug}.md`)
    
    // Dosya yoksa null döndür
    if (!fs.existsSync(fullPath)) {
      return null
    }
    
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const matterResult = matter(fileContents)

    // Markdown içeriğini HTML'e dönüştür
    const processedContent = remark()
      .use(html)
      .processSync(matterResult.content)
    const content = processedContent.toString()

    return {
      slug,
      title: matterResult.data.title || 'Başlıksız Yazı',
      date: matterResult.data.date || new Date().toISOString(),
      excerpt: matterResult.data.excerpt || '',
      content,
      tags: matterResult.data.tags || [],
    }
  } catch (error) {
    console.error(`Error getting post by slug: ${slug}`, error)
    return null
  }
} 