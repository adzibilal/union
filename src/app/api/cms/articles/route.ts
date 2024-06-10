import { db } from '@/db'
import { ArticlePayload } from '@/types/admin/articles/type'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest, res: NextResponse) {
    const searchParams = req.nextUrl.searchParams

    const page = parseInt(searchParams.get('page') || '1', 10)
    const pageSize = parseInt(searchParams.get('pageSize') || '10', 10)
    const keyword = searchParams.get('keyword') || '' // Get search keyword

    if (page < 1) {
        return NextResponse.json(
            { error: 'Invalid page number' },
            { status: 400 }
        )
    }

    const skip = (page - 1) * pageSize

    const whereClause: any = {}

    if (keyword.trim() !== '') {
        whereClause.OR = [{ title: { contains: keyword, mode: 'insensitive' } }]
    }

    const articles = await db.article.findMany({
        select: {
            id: true,
            title: true,
            resume: true,
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
            isPublished: true,
            createdAt: true
        },
        orderBy: {
            createdAt: 'desc'
        },
        skip,
        take: pageSize,
        where: whereClause // Apply search filter if keyword exists
    })

    const totalArticles = await db.article.count({
        where: whereClause
    })

    return NextResponse.json({
        articles,
        currentPage: page,
        totalPages: Math.ceil(totalArticles / pageSize),
        totalArticles
    })
}

export async function POST(req: NextRequest, res: NextResponse) {
    const values: ArticlePayload = await req.json()

    const article = await db.article.create({
        data: {
            title: values.title,
            resume: values.resume,
            slug: values.slug,
            content: values.content,
            image: values.image,
            isPublished: values.isPublished,
            authorId: values.authorId,
            ArticleCategory: {
                create: values.categories.map(categoryId => ({
                    category: {
                        connect: {
                            id: categoryId
                        }
                    }
                }))
            }
        }
    })

    return NextResponse.json(article)
}
