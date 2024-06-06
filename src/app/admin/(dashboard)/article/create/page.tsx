import Breadcrumb from '@/components/molecules/admin/Breadcrumb'
import FormArticle from '@/components/organism/admin/article/FormArticle'
import React from 'react'

const CreateArticlePage = () => {
    const items = [
        { href: '/admin/dashboard', children: 'Dashboard' },
        { href: '/admin/article', children: 'Articles' },
        { children: 'Create New Article' }
    ]
    return (
        <div className='p-5 w-full'>
            <div className='mb-5'>
                <Breadcrumb items={items} />
            </div>

            <div className='bg-white shadow-sm border rounded-md w-full p-6 max-w-screen-md mx-auto'>
                <div className='text-zinc-900 text-3xl font-semibold'>
                    Create New Article
                </div>

                <FormArticle />
            </div>
        </div>
    )
}

export default CreateArticlePage
