import { db } from '@/db'
import { login } from '@/lib'
import { NextRequest, NextResponse } from 'next/server'
import bcrypt from "bcrypt";

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
    const match = await bcrypt.compare(password, user.password);

    if (!match) {
        return new NextResponse('Invalid credentials', { status: 401 })
    }

    if (user.role !== "ADMIN") {
        return new NextResponse('Invalid credentials you are not an administrator', { status: 401 })
    }
    
    const response = {
        id: user.id,
        name: user.name,
        email: user.email,
        image: user.image,
        isActive: user.isActive,
        role: user.role
    }

    await login(response)

    return NextResponse.json(response)
}
