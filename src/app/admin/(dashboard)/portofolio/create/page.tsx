import Breadcrumb from '@/components/molecules/admin/Breadcrumb'
import FormPortofolio from '@/components/organism/admin/portofolio/FormPortofolio'
import { getSession } from '@/lib'
import { redirect } from 'next/navigation'
import React from 'react'

const CreatePortofolioPage = async () => {
    const items = [
        { href: '/admin/dashboard', children: 'Dashboard' },
        { href: '/admin/portofolio', children: 'Portofolios' },
        { children: 'Create New Portofolio' }
    ]
    const session = await getSession()
    if (!session) {
        redirect('/admin/sign-in')
    }
    return (
        <div className='p-5 w-full bg-zinc-50'>
            <div className='mb-5'>
                <Breadcrumb items={items} />
            </div>

            <div className='bg-white shadow-sm border rounded-md w-full p-6 max-w-screen-md mx-auto'>
                <div className='text-zinc-900 text-3xl font-semibold'>
                    Create New Portofolio
                </div>

                <FormPortofolio session={session} />
            </div>
        </div>
    )
}

export default CreatePortofolioPage
