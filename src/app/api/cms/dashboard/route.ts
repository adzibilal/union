import { db } from '@/db'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest, res: NextResponse) {
    try {
        const totalUsers = await db.user.count()
        const totalPortofolio = await db.portofolio.count()
        const totalArticle = await db.article.count()
        const totalCategory = await db.category.count()
        const totalStyle = await db.styleDesign.count()

        const response = {
            totalUsers,
            totalPortofolio,
            totalArticle,
            totalCategoryStyle: totalCategory + totalStyle
        }

        return NextResponse.json(response)
    } catch (error) {
        return NextResponse.json(
            { error: 'Something went wrong' },
            { status: 500 }
        )
    }
}
