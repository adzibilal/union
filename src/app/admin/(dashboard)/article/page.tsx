import Breadcrumb from '@/components/molecules/admin/Breadcrumb'
import ArticleList from '@/components/organism/admin/article/ArticleList'
import React from 'react'

const ArticleAdminPage = () => {
    const items = [
        { href: '/admin/dashboard', children: 'Dashboard' },
        { children: 'Article' }
    ]
    return (
        <div className='p-5 w-full'>
            <div className='mb-5'>
                <Breadcrumb items={items} />
            </div>
            <div className='bg-white shadow-sm border rounded-md w-full p-6 max-w-screen-lg mx-auto'>
                <ArticleList />
            </div>
        </div>
    )
}

export default ArticleAdminPage
