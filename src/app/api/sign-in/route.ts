import { db } from '@/db'
import { login } from '@/lib'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest, res: NextResponse) {
    const { email, password } = await req.json()
    // Verify credentials && get the user

    // get user from /api/sign-in
    const user = await db.user.findUnique({
        where: { email }
    })

    // verify user
    if (!user) {
        return new NextResponse('Invalid credentials', { status: 401 })
    }

    // verify password
    if (user.password !== password) {
        return new NextResponse('Invalid credentials', { status: 401 })
    }

    const response = {
        id: user.id,
        name: user.name,
        email: user.email,
        image: user.image,
        isActive: user.isActive
    }

    await login(response)

    return NextResponse.json(response)
}
