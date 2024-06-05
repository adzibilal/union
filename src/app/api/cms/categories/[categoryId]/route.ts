import { db } from '@/db'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(
    req: NextRequest,
    { params }: { params: { categoryId: string } }
) {
    try {
        const { categoryId } = params

        const category = await db.category.findUnique({
            where: { id: categoryId },
            select: {
                id: true,
                name: true,
            }
        })

        if (!category) {
            return new NextResponse('category not found', {
                status: 404
            })
        }

        return NextResponse.json(category)
    } catch (error) {
        console.error('[GET category BY ID]', error)
        return new NextResponse(`GET category BY ID ${error ? error : ''}`, {
            status: 500
        })
    }
}

export async function DELETE(
    req: NextRequest,
    { params }: { params: { categoryId: string } }
) {
    try {
        const { categoryId } = params

        const category = await db.category.delete({
            where: { id: categoryId }
        })

        return NextResponse.json(category)
    } catch (error) {
        console.error('[DELETE category BY ID]', error)
        return new NextResponse(`DELETE category BY ID ${error ? error : ''}`, {
            status: 500
        })
    }
}

export async function PATCH(
    req: NextRequest,
    { params }: { params: { categoryId: string } }
) {
    try {
        const { categoryId } = params
        const values = await req.json()

        const category = await db.category.update({
            where: { id: categoryId },
            data: { ...values }
        })

        return NextResponse.json(category)
    } catch (error) {
        console.error('[UPDATE category BY ID]', error)
        return new NextResponse(`UPDATE category BY ID ${error ? error : ''}`, {
            status: 500
        })
    }
}
