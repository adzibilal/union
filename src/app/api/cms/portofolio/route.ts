import { db } from '@/db'
import { PortofolioPayload } from '@/types/admin/portofolio/type'
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

    whereClause.isPublished = true

    const portofolios = await db.portofolio.findMany({
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
        },
        orderBy: {
            createdAt: 'desc'
        },
        skip,
        take: pageSize,
        where: whereClause // Apply search filter if keyword exists
    })

    const totalPortofolios = await db.portofolio.count({
        where: whereClause
    })

    return NextResponse.json({
        portofolios,
        currentPage: page,
        totalPages: Math.ceil(totalPortofolios / pageSize),
        totalPortofolios
    })
}

export async function POST(req: NextRequest, res: NextResponse) {
    const values: PortofolioPayload = await req.json()

    const portofolio = await db.portofolio.create({
        data: {
            title: values.title,
            resume: values.resume,
            slug: values.slug,
            content: values.content,
            image: values.image,
            buildPrice: values.buildPrice,
            client: values.client,
            designPrice: values.designPrice,
            isPublished: values.isPublished,
            location: values.location,
            material: values.material,
            projectType: values.projectType,
            size: values.size,
            PortofolioStyle: {
                create: values.styleDesigns.map(styleId => ({
                    style: {
                        connect: {
                            id: styleId
                        }
                    }
                }))
            },
            authorId: values.authorId
        }
    })

    return NextResponse.json(portofolio)
}
