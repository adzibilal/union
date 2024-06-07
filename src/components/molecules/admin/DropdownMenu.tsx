'use client'
import { Session } from '@/lib'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import toast from 'react-hot-toast'
import { FaPowerOff } from 'react-icons/fa'

interface DropDownMenuProps {
    session: Session
}

const DropdownMenu: React.FC<DropDownMenuProps> = ({ session }) => {
    const [isOpen, setIsOpen] = React.useState(false)

    const handleSignOut = async () => {
        try {
            await fetch('/api/cms/sign-out', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            window.location.href = '/admin/sign-in'
        } catch (error) {
            toast.error('error logging out, please try again.')
            console.error(error)
        }
    }

    return (
        <div className='relative'>
            <div
                className='inline-flex items-center overflow-hidden rounded-md bg-white cursor-pointer'
                onClick={() => setIsOpen(!isOpen)}>
                <div className='flex gap-3 items-center'>
                    <div className='text-right'>
                        <div className='font-semibold'>{session.user.name}</div>
                        <div className='text-xs'>{session.user.role}</div>
                    </div>
                    {session.user.image ? (
                        <Image
                            src={session.user.image}
                            alt=''
                            width={200}
                            height={200}
                            className='w-10 h-10 rounded-full object-cover'
                        />
                    ) : (
                        <div className='w-10 h-10 rounded-full bg-u-orange-500 flex items-center justify-center text-white font-semibold'>
                            {session.user.name!.charAt(0)}
                        </div>
                    )}
                </div>
            </div>

            <div
                className={`absolute right-0 mt-2 w-56 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${
                    isOpen ? 'block' : 'hidden'
                }`}
                role='menu'>
                <div className='p-2'>
                    <Link
                        href='/admin/profile'
                        className='block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700'
                        role='menuitem'>
                        Profile
                    </Link>
                </div>

                <div className='p-2'>
                    <button
                        onClick={handleSignOut}
                        type='submit'
                        className='flex w-full items-center gap-2 rounded-lg px-4 py-2 text-sm text-red-700 hover:bg-red-50'
                        role='menuitem'>
                        <FaPowerOff />
                        Logout
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DropdownMenu
