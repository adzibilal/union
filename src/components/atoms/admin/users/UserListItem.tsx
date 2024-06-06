'use client'
import { UserTypeTable } from '@/types/admin/users/type'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
import LoadingSpinner from '../../LoadingSpinner'

interface UserListItemProps {
    user: UserTypeTable
    onChange: () => void
}

const UserListItem: React.FC<UserListItemProps> = props => {
    const [isLoading, setIsLoading] = React.useState(false)
    const handleDeleteUser = async () => {
        setIsLoading(true)
        const conf = confirm('Apakah anda yakin ingin menghapus user ini?')
        if (!conf) return
        try {
            const response = await fetch(`/api/cms/users/${props.user.id}`, {
                method: 'DELETE'
            })

            if (response.ok) {
                alert('User berhasil dihapus')
            } else {
                alert('Gagal menghapus user')
            }
        } catch (error) {
            console.error('[DELETE USER]', error)
            alert('Gagal menghapus user')
        } finally {
            props.onChange()
        }
        setIsLoading(false)
    }

    const handleToggleUser = async () => {
        const conf = confirm(
            `Apakah anda yakin ingin ${
                props.user.isActive ? 'menonaktifkan' : 'mengaktifkan'
            } user ini?`
        )
        if (!conf) return
        setIsLoading(true)
        try {
            const response = await fetch(`/api/cms/users/${props.user.id}`, {
                method: 'PATCH',
                body: JSON.stringify({
                    isActive: !props.user.isActive
                })
            })

            if (response.ok) {
                alert('User berhasil diubah')
            } else {
                alert('Gagal mengubah user')
            }
        } catch (error) {
            console.error('[TOGGLE USER]', error)
            alert('Gagal mengubah user')
        } finally {
            props.onChange()
        }
        setIsLoading(false)
    }

    return (
        <div
            className={`bg-zinc-50 px-3 py-2 rounded-md flex justify-between items-center group ${
                props.user.isActive ? '' : 'opacity-50'
            }`}>
            <div className='flex items-center gap-2'>
                {/* if user has image */}
                {props.user.image ? (
                    <Image
                        src={props.user.image}
                        alt=''
                        width={200}
                        height={200}
                        className='w-10 h-10 rounded-full object-cover'
                    />
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
            <div className='items-center gap-3 hidden group-hover:flex'>
                <button
                    onClick={() => handleToggleUser()}
                    className={`${
                        props.user.isActive ? 'bg-red-500' : 'bg-green-500'
                    } font-semibold text-white text-xs px-3 py-1 rounded-md cursor-pointer hover:opacity-85`}>
                    {props.user.isActive ? 'Non Aktifkan' : 'Aktifkan'}
                </button>
                <Link
                    href={`/admin/users/${props.user.id}`}
                    className='text-blue-500 font-semibold'>
                    <FaEdit />
                </Link>
                <button
                    className='text-red-500 font-semibold'
                    onClick={() => handleDeleteUser()}>
                    <FaTrash />
                </button>
            </div>
            {isLoading && <LoadingSpinner />}
        </div>
    )
}

export default UserListItem
