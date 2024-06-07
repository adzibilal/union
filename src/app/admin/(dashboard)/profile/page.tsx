import Breadcrumb from '@/components/molecules/admin/Breadcrumb'
import ProfileSection from '@/components/molecules/admin/ProfileSection'
import { getSession, Session } from '@/lib'
import { redirect } from 'next/navigation'
import React from 'react'

const ProfilePage = async () => {
    const items = [
        { href: '/admin/dashboard', children: 'Dashboard' },
        { children: 'Profile' }
    ]

    const session: Session = await getSession()

    if (!session) {
        redirect('/admin/sign-in')
    }
    return (
        <div className='p-5 w-full'>
            <div className='mb-5'>
                <Breadcrumb items={items} />
            </div>

            <div className='bg-white shadow-sm border rounded-md w-full p-6 max-w-screen-sm mx-auto'>
                <div className='text-zinc-900 text-3xl font-semibold'>
                    My Profile
                </div>
                <ProfileSection session={session} />
            </div>
        </div>
    )
}

export default ProfilePage
