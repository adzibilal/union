import { db } from '@/db'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(
    req: NextRequest,
    { params }: { params: { styleDesignId: string } }
) {
    try {
        const { styleDesignId } = params

        const styleDesign = await db.styleDesign.findUnique({
            where: { id: styleDesignId },
            select: {
                id: true,
                name: true,
                description: true,
            }
        })

        if (!styleDesign) {
            return new NextResponse('styleDesign not found', {
                status: 404
            })
        }

        return NextResponse.json(styleDesign)
    } catch (error) {
        console.error('[GET styleDesign BY ID]', error)
        return new NextResponse(`GET styleDesign BY ID ${error ? error : ''}`, {
            status: 500
        })
    }
}

export async function DELETE(
    req: NextRequest,
    { params }: { params: { styleDesignId: string } }
) {
    try {
        const { styleDesignId } = params

        const styleDesign = await db.styleDesign.delete({
            where: { id: styleDesignId }
        })

        return NextResponse.json(styleDesign)
    } catch (error) {
        console.error('[DELETE styleDesign BY ID]', error)
        return new NextResponse(`DELETE styleDesign BY ID ${error ? error : ''}`, {
            status: 500
        })
    }
}

export async function PATCH(
    req: NextRequest,
    { params }: { params: { styleDesignId: string } }
) {
    try {
        const { styleDesignId } = params
        const values = await req.json()

        const styleDesign = await db.styleDesign.update({
            where: { id: styleDesignId },
            data: { ...values }
        })

        return NextResponse.json(styleDesign)
    } catch (error) {
        console.error('[UPDATE styleDesign BY ID]', error)
        return new NextResponse(`UPDATE styleDesign BY ID ${error ? error : ''}`, {
            status: 500
        })
    }
}
