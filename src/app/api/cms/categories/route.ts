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
        whereClause.OR = [{ name: { contains: keyword, mode: 'insensitive' } }]
    }

    const categories = await db.category.findMany({
        select: {
            id: true,
            name: true
        },
        orderBy: {
            createdAt: 'desc'
        },
        skip,
        take: pageSize,
        where: whereClause // Apply search filter if keyword exists
    })

    const totalCategories = await db.category.count({
        where: whereClause
    })

    return NextResponse.json({
        categories,
        currentPage: page,
        totalPages: Math.ceil(totalCategories / pageSize),
        totalCategories
    })
}

export async function POST(req: NextRequest, res: NextResponse) {
    const values = await req.json()
    console.log(values)

    const category = await db.category.create({
        data: {
            ...values
        }
    })

    return NextResponse.json(category)
}
