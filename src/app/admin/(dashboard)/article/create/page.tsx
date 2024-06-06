import Breadcrumb from '@/components/molecules/admin/Breadcrumb'
import FormArticle from '@/components/organism/admin/article/FormArticle'
import { getSession } from '@/lib'
import { redirect } from 'next/navigation'
import React from 'react'

const CreateArticlePage = async () => {
    const items = [
        { href: '/admin/dashboard', children: 'Dashboard' },
        { href: '/admin/article', children: 'Articles' },
        { children: 'Create New Article' }
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
                    Create New Article
                </div>

                <FormArticle session={session} />
            </div>
        </div>
    )
}

export default CreateArticlePage
