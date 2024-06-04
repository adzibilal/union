import { db } from '@/db'
import { NextRequest, NextResponse } from 'next/server'
import bcrypt from 'bcrypt'

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
        whereClause.OR = [
            { name: { contains: keyword, mode: 'insensitive' } },
            { email: { contains: keyword, mode: 'insensitive' } }
        ]
    }

    const users = await db.user.findMany({
        select: {
            id: true,
            name: true,
            email: true,
            image: true,
            isActive: true,
            role: true
        },
        orderBy: {
            createdAt: 'desc'
        },
        skip,
        take: pageSize,
        where: whereClause // Apply search filter if keyword exists
    })

    const totalUsers = await db.user.count({
        where: whereClause
    })

    return NextResponse.json({
        users,
        currentPage: page,
        totalPages: Math.ceil(totalUsers / pageSize),
        totalUsers
    })
}

export async function POST(req: NextRequest, res: NextResponse) {
    const values = await req.json()

    const password = bcrypt.hashSync('Union2024', 12)

    const user = await db.user.create({
        data: {
            ... values,
            password
        }
    })

    return NextResponse.json(user)
}
