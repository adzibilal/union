import FormUser from '@/components/organism/admin/users/FormUser'
import React from 'react'

const CreateUserPage = () => {
    return (
        <div className='p-5 w-full'>
            <div className='bg-white shadow-sm border rounded-md w-full p-6 max-w-screen-sm mx-auto'>
                <div className="text-zinc-900 text-3xl font-semibold">Create New User</div>

                <FormUser />
            </div>
        </div>
    )
}

export default CreateUserPage
