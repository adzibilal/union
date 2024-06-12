import { db } from '@/db'
import { NextRequest, NextResponse } from 'next/server'
import { PortofolioPayload } from '@/types/admin/portofolio/type'

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

export async function DELETE(
    req: NextRequest,
    { params }: { params: { slug: string } }
) {
    try {
        const { slug } = params

        const portofolioSelected = await db.portofolio.findFirst({
            where: { slug: slug }
        })

        if (!portofolioSelected) {
            return new NextResponse('portofolio not found', {
                status: 404
            })
        }

        await db.portofolioStyle.deleteMany({
            where: { portofolioId: portofolioSelected?.id }
        })

        const portofolio = await db.portofolio.delete({
            where: { slug: slug }
        })

        return NextResponse.json(portofolio)
    } catch (error) {
        console.error('[DELETE portofolio BY SLUG]', error)
        return new NextResponse(
            `DELETE portofolio BY SLUG ${error ? error : ''}`,
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
        const values: PortofolioPayload = await req.json()

        const selectedPortofolio = await db.portofolio.findFirst({
            where: { slug: slug }
        })

        if (!selectedPortofolio) {
            return new NextResponse('portofolio not found', {
                status: 404
            })
        }

        await db.portofolioStyle.deleteMany({
            where: { portofolioId: selectedPortofolio.id }
        })

        const portofolio = await db.portofolio.update({
            where: { id: selectedPortofolio.id },
            data: {
                title: values.title,
                resume: values.resume,
                slug: values.slug,
                content: values.content,
                image: values.image,
                authorId: values.authorId,
                buildPrice: values.buildPrice,
                client: values.client,
                designPrice: values.designPrice,
                isPublished: values.isPublished,
                location: values.location,
                material: values.material,
                projectType: values.projectType,
                size: values.size,
                PortofolioStyle: {
                    connectOrCreate: values.styleDesigns.map(styleId => ({
                        where: { id: styleId },
                        create: {
                            style: {
                                connect: {
                                    id: styleId
                                }
                            }
                        }
                    }))
                }
            }
        })

        return NextResponse.json(portofolio)
    } catch (error) {
        console.error('[UPDATE portofolio BY SLUG]', error)
        return new NextResponse(
            `UPDATE portofolio BY SLUG ${error ? error : ''}`,
            {
                status: 500
            }
        )
    }
}
