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
                categories: {
                    select: {
                        id: true,
                       name: true
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
        console.error('[GET article BY ID]', error)
        return new NextResponse(`GET article BY ID ${error ? error : ''}`, {
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

        const article = await db.article.delete({
            where: { slug: slug }
        })

        return NextResponse.json(article)
    } catch (error) {
        console.error('[DELETE article BY ID]', error)
        return new NextResponse(`DELETE article BY ID ${error ? error : ''}`, {
            status: 500
        })
    }
}

export async function PATCH(
    req: NextRequest,
    { params }: { params: { slug: string } }
) {
    try {
        const { slug } = params
        const values = await req.json()

        const article = await db.article.update({
            where: { slug: slug },
            data: { ...values }
        })

        return NextResponse.json(article)
    } catch (error) {
        console.error('[UPDATE article BY ID]', error)
        return new NextResponse(`UPDATE article BY ID ${error ? error : ''}`, {
            status: 500
        })
    }
}
