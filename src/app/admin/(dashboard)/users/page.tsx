import UserList from '@/components/organism/admin/users/UserList'
import React from 'react'

const UsersPage = () => {
    return (
        <div className='p-5 w-full'>
            <div className='bg-white shadow-sm border rounded-md w-full p-6 max-w-screen-lg mx-auto'>
                <UserList />
            </div>
        </div>
    )
}

export default UsersPage
