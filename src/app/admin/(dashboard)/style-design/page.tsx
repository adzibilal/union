import Breadcrumb from '@/components/molecules/admin/Breadcrumb'
import StyleDesignList from '@/components/organism/admin/style-design/StyleDesignList'
import React from 'react'

const StyleDesignAdminPage = () => {
    const items = [
        { href: '/admin/dashboard', children: 'Dashboard' },
        { children: 'Style Design' }
    ]
    return (
        <div className='p-5 w-full bg-zinc-50'>
            <div className='mb-5'>
                <Breadcrumb items={items} />
            </div>
            <div className='bg-white shadow-sm border rounded-md w-full p-6 max-w-screen-lg mx-auto'>
                <StyleDesignList />
            </div>
        </div>
    )
}

export default StyleDesignAdminPage
