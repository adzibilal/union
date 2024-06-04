import { UserTypeTable } from '@/types/admin/users/type'
import Image from 'next/image'
import React from 'react'

interface UserListItemProps {
    user: UserTypeTable
}

const UserListItem: React.FC<UserListItemProps> = props => {
    return (
        <div className='bg-zinc-50 px-3 py-2 rounded-md flex justify-between items-center'>
            <div className='flex items-center gap-2'>
                {/* if user has image */}
                {props.user.image ? (
                    <div className="className='w-10 h-10 rounded-full'">
                        <Image src={props.user.image} alt='' fill />
                    </div>
                ) : (
                    <div className='w-10 h-10 rounded-full bg-u-orange-500 flex items-center justify-center text-white font-semibold'>
                        {props.user.name.charAt(0)}
                    </div>
                )}
                <div className='flex flex-col'>
                    <div className='flex gap-3 items-center'>
                        <div className='font-semibold'>{props.user.name}</div>
                        <span
                            className={`uppercase text-xs font-semibold px-2 py-0.5 rounded-md ${
                                props.user.role === 'ADMIN'
                                    ? 'bg-red-100 text-red-500'
                                    : 'bg-blue-100 text-blue-500'
                            }`}>
                            {props.user.role}
                        </span>
                    </div>
                    <div className='text-sm text-zinc-500'>
                        {props.user.email}
                    </div>
                </div>
            </div>

            {/* actions item */}
            <div className='flex items-center gap-3'>
                <button
                    className={`${
                        props.user.isActive ? 'text-red-500' : 'text-green-500'
                    } font-semibold`}>
                    {props.user.isActive ? 'Non Aktifkan' : 'Aktifkan'}
                </button>
                <button className='text-blue-500 font-semibold'>Edit</button>
                <button className='text-red-500 font-semibold'>Delete</button>
            </div>
        </div>
    )
}

export default UserListItem
