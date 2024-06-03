import { updateSession, getSession } from '@/lib'
import { NextRequest, NextResponse } from 'next/server'

export async function middleware(request: NextRequest) {
    // Periksa jika di halaman /admin/sign-in
    if (request.nextUrl.pathname === '/admin/sign-in') {
        // Ambil session
        const session = await getSession()

        // Jika ada session, redirect ke /admin
        if (session) {
            return NextResponse.redirect(new URL('/admin/dashboard', request.url))
        }
    }

    // Periksa jika path diawali dengan /admin/
    if (
        request.nextUrl.pathname.startsWith('/admin') &&
        request.nextUrl.pathname !== '/admin/sign-in'
    ) {
        // Ambil session
        const session = await getSession()

        // Jika tidak ada session atau session kedaluwarsa, redirect ke /admin/sign-in
        if (!session || new Date(session.expires) <= new Date()) {
            return NextResponse.redirect(new URL('/admin/sign-in', request.url))
        }
    }

    // Jika ada session atau path tidak berawalan /admin, update session
    return await updateSession(request)
}
