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
                <div className='flex gap-3 items-center'>
                    <div className='text-right'>
                        <div className='font-semibold'>{session.user.name}</div>
                        <div className='text-xs'>{session.user.role}</div>
                    </div>
                    {session.user.image ? (
                        <Image
                            src={session.user.image}
                            alt=''
                            width={200}
                            height={200}
                            className='w-10 h-10 rounded-full object-cover'
                        />
                    ) : (
                        <div className='w-10 h-10 rounded-full bg-u-orange-500 flex items-center justify-center text-white font-semibold'>
                            {session.user.name!.charAt(0)}
                        </div>
                    )}
                </div>
                <form
                    action={async () => {
                        'use server'
                        await logout()
                        redirect('/admin/sign-in')
                    }}>
                    <button type='submit' className='text-red-600'>
                        Logout
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Navbar
