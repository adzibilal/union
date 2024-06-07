import { logout } from '@/lib'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest, res: NextResponse) {
    await logout()
    return NextResponse.json({ message: 'logged out' })
}
