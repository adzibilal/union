import React from 'react'
import Breadcrumb from '@/components/molecules/admin/Breadcrumb'
import { getSession, Session } from '@/lib'
import FormChangePass from './FormChangePass'

const ChangePasswordPage = async () => {
    const session: Session = await getSession()

    const items = [
        { href: '/admin/dashboard', children: 'Dashboard' },
        { children: 'Change Password' }
    ]

    return (
        <div className='p-5 w-full'>
            <div className='mb-5'>
                <Breadcrumb items={items} />
            </div>

            <FormChangePass session={session} />
        </div>
    )
}

export default ChangePasswordPage