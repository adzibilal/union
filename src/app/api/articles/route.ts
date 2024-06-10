import { db } from '@/db'
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
    
    whereClause.isPublished = true;

    const articles = await db.article.findMany({
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
