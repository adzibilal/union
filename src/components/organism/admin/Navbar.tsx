import DropdownMenu from '@/components/molecules/admin/DropdownMenu'
import { getSession, logout, Session } from '@/lib'
import Image from 'next/image'
import { redirect } from 'next/navigation'
import React from 'react'

const Navbar = async () => {
    const session: Session = await getSession()
    if (!session) {
        redirect('/admin/sign-in')
    }
    return (
        <div className='border-b w-full h-[70px] bg-white flex items-center justify-end p-3'>
            <div className='flex gap-3 items-center'>
                <DropdownMenu session={session} />
            </div>
        </div>
    )
}

export default Navbar
