import Breadcrumb from '@/components/molecules/admin/Breadcrumb'
import CategoriesList from '@/components/organism/admin/categories/CategoriesList'
import React from 'react'

const CategoriesAdminPage = () => {
    const items = [
        { href: '/admin/dashboard', children: 'Dashboard' },
        { children: 'Categories' }
    ]
    return (
        <div className='p-5 w-full bg-zinc-50'>
            <div className='mb-5'>
                <Breadcrumb items={items} />
            </div>
            <div className='bg-white shadow-sm border rounded-md w-full p-6 max-w-screen-lg mx-auto'>
                <CategoriesList />
            </div>
        </div>
    )
}

export default CategoriesAdminPage
