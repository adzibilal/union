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

export async function DELETE(
    req: NextRequest,
    { params }: { params: { slug: string } }
) {
    try {
        const { slug } = params

        const articleSelected = await db.article.findFirst({
            where: { slug: slug }
        })

        if (!articleSelected) {
            return new NextResponse('article not found', {
                status: 404
            })
        }

        await db.articleCategory.deleteMany({
            where: { articleId: articleSelected?.id }
        })

        const article = await db.article.delete({
            where: { slug: slug }
        })

        return NextResponse.json(article)
    } catch (error) {
        console.error('[DELETE article BY SLUG]', error)
        return new NextResponse(
            `DELETE article BY SLUG ${error ? error : ''}`,
            {
                status: 500
            }
        )
    }
}

export async function PATCH(
    req: NextRequest,
    { params }: { params: { slug: string } }
) {
    try {
        const { slug } = params
        const values: ArticlePayload = await req.json()

        const selectedArticle = await db.article.findFirst({
            where: { slug: slug }
        })

        if (!selectedArticle) {
            return new NextResponse('article not found', {
                status: 404
            })
        }

        await db.articleCategory.deleteMany({
            where: { articleId: selectedArticle.id }
        })

        const article = await db.article.update({
            where: { id: selectedArticle.id },
            data: {
                title: values.title,
                slug: values.slug,
                content: values.content,
                image: values.image,
                authorId: values.authorId,
                ArticleCategory: {
                    connectOrCreate: values.categories.map(categoryId => ({
                        where: { id: categoryId },
                        create: {
                            category: {
                                connect: { id: categoryId }
                            }
                        }
                    }))
                }
            }
        })

        return NextResponse.json(article)
    } catch (error) {
        console.error('[UPDATE article BY SLUG]', error)
        return new NextResponse(
            `UPDATE article BY SLUG ${error ? error : ''}`,
            {
                status: 500
            }
        )
    }
}
