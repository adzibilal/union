import { db } from '@/db'
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

        const relatedArticles = await db.article.findMany({
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
            where: {
                ArticleCategory: {
                    some: {
                        category: {
                            id: article.ArticleCategory[0].category.id
                        }
                    }
                },
                slug: {
                    not: slug
                }
            },
            take: 3
        })

        return NextResponse.json({
            relatedArticles
        })
    } catch (error) {
        return new NextResponse('Internal Server Error', {
            status: 500
        })
    }
}
