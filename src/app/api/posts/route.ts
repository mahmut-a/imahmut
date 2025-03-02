import { NextResponse } from 'next/server'
import { getAllPosts } from '@/lib/api'

export async function GET() {
  try {
    const posts = getAllPosts()
    return NextResponse.json(posts)
  } catch (error) {
    console.error('Blog yazıları getirilirken hata oluştu:', error)
    return NextResponse.json(
      { error: 'Blog yazıları yüklenemedi' },
      { status: 500 }
    )
  }
} 