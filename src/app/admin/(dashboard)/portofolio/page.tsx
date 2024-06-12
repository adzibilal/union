import Breadcrumb from '@/components/molecules/admin/Breadcrumb'
import PortofolioList from '@/components/organism/admin/portofolio/PortofolioList'
import React from 'react'

const PortofolioAdminPage = () => {
    const items = [
        { href: '/admin/dashboard', children: 'Dashboard' },
        { children: 'Portofolio' }
    ]
    return (
        <div className='p-5 w-full bg-zinc-50'>
            <div className='mb-5'>
                <Breadcrumb items={items} />
            </div>
            <div className='bg-white shadow-sm border rounded-md w-full p-6 max-w-screen-lg mx-auto'>
                <PortofolioList />
            </div>
        </div>
    )
}

export default PortofolioAdminPage
