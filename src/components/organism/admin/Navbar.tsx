import { logout } from '@/lib'
import { redirect } from 'next/navigation'
import React from 'react'

const Navbar = () => {
    return (
        <div className='border-b w-full h-[70px] bg-white flex items-center justify-between p-3'>
            <form
                action={async () => {
                    'use server'
                    await logout()
                    redirect('/admin/sign-in')
                }}>
                <button type='submit'>Logout</button>
            </form>
        </div>
    )
}

export default Navbar
