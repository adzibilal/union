'use client'
import FormUser from '@/components/organism/admin/users/FormUser'
import { UserTypeTable } from '@/types/admin/users/type'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const EditUserPage = () => {
    // get id from params
    const { userId } = useParams<{ userId: string }>()
    const [user, setUser] = useState<UserTypeTable | null>(null)

    //get user data by id
    const getUser = async () => {
        try {
            const response = await fetch(`/api/cms/users/${userId}`)
            const data = await response.json()
            setUser(data)
        } catch (error) {
            console.error('[GET USER BY ID]', error)
        }
    }

    useEffect(() => {
        getUser()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className='p-5 w-full'>
            <div className='bg-white shadow-sm border rounded-md w-full p-6 max-w-screen-sm mx-auto'>
                <div className='text-zinc-900 text-3xl font-semibold'>
                    Edit User
                </div>
                {user && <FormUser user={user} />}
            </div>
        </div>
    )
}

export default EditUserPage
