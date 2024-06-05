import Breadcrumb from '@/components/molecules/admin/Breadcrumb'
import FormUser from '@/components/organism/admin/users/FormUser'
import React from 'react'

const CreateUserPage = () => {
    const items = [
        { href: '/admin/dashboard', children: 'Dashboard' },
        { href: '/admin/users', children: 'Users' },
        { children: 'Create New User' }
    ]
    return (
        <div className='p-5 w-full'>
            <div className='mb-5'>
                <Breadcrumb items={items} />
            </div>

            <div className='bg-white shadow-sm border rounded-md w-full p-6 max-w-screen-sm mx-auto'>
                <div className='text-zinc-900 text-3xl font-semibold'>
                    Create New User
                </div>

                <FormUser />
            </div>
        </div>
    )
}

export default CreateUserPage
