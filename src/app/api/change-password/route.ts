import { db } from '@/db'
import bcrypt from 'bcrypt'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest, res: NextResponse) {
    const { userId, currentPassword, newPassword } = await req.json()

    if (!currentPassword || !newPassword) {
        return new NextResponse('Missing fields', { status: 400 })
    }

    // Fetch the current user from the database
    const user = await db.user.findUnique({
        where: { id: userId }
    })

    if (!user) {
        return new NextResponse('User not found', { status: 404 })
    }

    // Verify the old password
    const isMatch = await bcrypt.compare(currentPassword, user.password)
    if (!isMatch) {
        return new NextResponse('Old password is incorrect', { status: 401 })
    }

    // Hash the new password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(newPassword, salt)

    // Update the user's password in the database
    await db.user.update({
        where: { id: userId },
        data: { password: hashedPassword, hasResetPassword: true }
    })

    return new NextResponse('Password changed successfully', { status: 200 })
}
