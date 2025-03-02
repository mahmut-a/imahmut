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

export async function getAllPosts(): Promise<Post[]> {
  // content/blog klasörü yoksa boş dizi döndür
  if (!fs.existsSync(postsDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = await Promise.all(
    fileNames
      .filter(fileName => fileName.endsWith('.md'))
      .map(async fileName => {
        const slug = fileName.replace(/\.md$/, '')
        const fullPath = path.join(postsDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')
        const matterResult = matter(fileContents)

        const processedContent = await remark()
          .use(html)
          .process(matterResult.content)
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
  )

  // Tarihe göre sırala (en yeni en üstte)
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
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

    const processedContent = await remark()
      .use(html)
      .process(matterResult.content)
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