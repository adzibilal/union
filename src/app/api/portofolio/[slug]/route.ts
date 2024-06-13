import { db } from '@/db'
import { PortofolioPayload } from '@/types/admin/portofolio/type'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(
    req: NextRequest,
    { params }: { params: { slug: string } }
) {
    try {
        const { slug } = params

        const portofolio = await db.portofolio.findUnique({
            where: { slug: slug },
            select: {
                id: true,
                title: true,
                resume: true,
                slug: true,
                content: true,
                image: true,
                buildPrice: true,
                client: true,
                designPrice: true,
                isPublished: true,
                location: true,
                material: true,
                projectType: true,
                size: true,
                PortofolioStyle: {
                    select: {
                        style: {
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

        if (!portofolio) {
            return new NextResponse('portofolio not found', {
                status: 404
            })
        }

        return NextResponse.json(portofolio)
    } catch (error) {
        console.error('[GET portofolio BY SLUG]', error)
        return new NextResponse(
            `GET portofolio BY SLUG ${error ? error : ''}`,
            {
                status: 500
            }
        )
    }
}