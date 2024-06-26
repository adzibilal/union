import { db } from '@/db'
import { ArticlePayload } from '@/types/admin/articles/type'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(
    req: NextRequest,
    { params }: { params: { slug: string } }
) {
    try {
        const { slug } = params

        const article = await db.article.findUnique({
            where: { slug: slug },
            select: {
                id: true,
                title: true,
                slug: true,
                content: true,
                image: true,
                ArticleCategory: {
                    select: {
                        category: {
                            select: {
                                id: true,
                                name: true
                            }
                        }
                    }
                },
                author: {
                    select: {
                        id: true,
                        name: true
                    }
                },
                createdAt: true
            }
        })

        if (!article) {
            return new NextResponse('article not found', {
                status: 404
            })
        }

        return NextResponse.json(article)
    } catch (error) {
        console.error('[GET article BY SLUG]', error)
        return new NextResponse(`GET article BY SLUG ${error ? error : ''}`, {
            status: 500
        })
    }
}
