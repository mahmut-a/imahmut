import { NextRequest, NextResponse } from 'next/server'
import { getPostBySlug } from '@/lib/api'
import { remark } from 'remark'
import html from 'remark-html'

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    const post = getPostBySlug(params.slug)
    
    if (!post) {
      return NextResponse.json(
        { error: 'Blog yazısı bulunamadı' },
        { status: 404 }
      )
    }
    
    // Markdown içeriğini HTML'e dönüştür
    const processedContent = await remark()
      .use(html)
      .process(post.content)
    const contentHtml = processedContent.toString()
    
    return NextResponse.json({ post, contentHtml })
  } catch (error) {
    console.error(`Blog yazısı getirilirken hata oluştu: ${params.slug}`, error)
    return NextResponse.json(
      { error: 'Blog yazısı yüklenemedi' },
      { status: 500 }
    )
  }
} 