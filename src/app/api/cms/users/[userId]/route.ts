import { db } from '@/db'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(
    req: NextRequest,
    { params }: { params: { userId: string } }
) {
    try {
        const { userId } = params

        const user = await db.user.findUnique({
            where: { id: userId },
            select: {
                id: true,
                name: true,
                email: true,
                image: true,
                isActive: true,
                role: true
            }
        })

        if (!user) {
            return new NextResponse('User not found', {
                status: 404
            })
        }

        return NextResponse.json(user)
    } catch (error) {
        console.error('[GET USER BY ID]', error)
        return new NextResponse(`GET USER BY ID ${error ? error : ''}`, {
            status: 500
        })
    }
}

export async function DELETE(
    req: NextRequest,
    { params }: { params: { userId: string } }
) {
    try {
        const { userId } = params

        const user = await db.user.delete({
            where: { id: userId }
        })

        return NextResponse.json(user)
    } catch (error) {
        console.error('[DELETE USER BY ID]', error)
        return new NextResponse(`DELETE USER BY ID ${error ? error : ''}`, {
            status: 500
        })
    }
}

export async function PATCH(
    req: NextRequest,
    { params }: { params: { userId: string } }
) {
    try {
        const { userId } = params
        const values = await req.json()

        const user = await db.user.update({
            where: { id: userId },
            data: { ...values }
        })

        return NextResponse.json(user)
    } catch (error) {
        console.error('[UPDATE USER BY ID]', error)
        return new NextResponse(`UPDATE USER BY ID ${error ? error : ''}`, {
            status: 500
        })
    }
}
