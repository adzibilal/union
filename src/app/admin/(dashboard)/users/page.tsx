import Breadcrumb from '@/components/molecules/admin/Breadcrumb'
import UserList from '@/components/organism/admin/users/UserList'
import React from 'react'

const UsersPage = () => {
    const items = [
        { href: '/admin/dashboard', children: 'Dashboard' },
        { children: 'Users' }
    ]
    return (
        <div className='p-5 w-full bg-zinc-50'>
            <div className='mb-5'>
                <Breadcrumb items={items} />
            </div>
            <div className='bg-white shadow-sm border rounded-md w-full p-6 max-w-screen-lg mx-auto'>
                <UserList />
            </div>
        </div>
    )
}

export default UsersPage
