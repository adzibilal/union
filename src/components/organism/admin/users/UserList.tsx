'use client'

import UserListItem from '@/components/atoms/admin/users/UserListItem'
import { UserTypeTable } from '@/types/admin/users/type'
import React, { useState, useEffect } from 'react'
import {
    FaChevronLeft,
    FaChevronRight,
    FaInfoCircle,
    FaPlusCircle
} from 'react-icons/fa'
import { debounce } from 'lodash'
import UserListSkeleton from './UserListSkeleton'
import Link from 'next/link'

function UserList() {
    const [users, setUsers] = useState<UserTypeTable[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages, setTotalPages] = useState(1)
    const [pageSize, setPageSize] = useState(10)
    const [keyword, setKeyword] = useState('')

    async function fetchUsers() {
        setIsLoading(true)

        try {
            const response = await fetch(
                `/api/cms/users?page=${currentPage}&pageSize=${pageSize}&keyword=${keyword}`
            )
            const data = await response.json()

            setUsers(data.users)
            setTotalPages(data.totalPages)
        } catch (error: any) {
            console.error('Error fetching users:', error)
        }
        setIsLoading(false)
    }

    useEffect(() => {
        fetchUsers()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentPage, pageSize, keyword])

    const handlePageChange = (newPage: number) => {
        if (newPage < 1 || newPage > totalPages) {
            alert('Halaman tidak valid')
            return
        }
        setCurrentPage(newPage)
    }

    const handleChangeKeyword = debounce((newKeyword: string) => {
        setKeyword(newKeyword)
    }, 500)

    return (
        <div>
            <div className='flex items-center justify-between'>
                <div className='font-semibold text-2xl'>Users</div>
                <input
                    type='text'
                    placeholder='Cari pengguna'
                    onChange={e => handleChangeKeyword(e.target.value)}
                    className='px-3 py-1 border border-zinc-300 rounded-md focus:outline-none w-[50%]'
                />

                <Link
                    href={'/admin/users/create'}
                    className='flex gap-3 text-white bg-u-orange-500 items-center px-3 py-1 rounded-md hover:opacity-85 cursor-pointer'>
                    Tambah User <FaPlusCircle />{' '}
                </Link>
            </div>
            {isLoading ? (
                <UserListSkeleton />
            ) : (
                <div className=''>
                    {/* Tampilkan daftar pengguna (users) */}
                    <div className='my-5 flex flex-col gap-3'>
                        {users.map(user => (
                            <UserListItem
                                key={user.id}
                                user={user}
                                onChange={fetchUsers}
                            />
                        ))}
                    </div>
                    {/* if user length = 0 */}
                    {users.length === 0 && !isLoading ? (
                        <div className='text-center text-zinc-200 mt-5 flex flex-col items-center justify-center'>
                            <FaInfoCircle size={150} className='mb-3' />
                            Tidak ada pengguna
                        </div>
                    ) : (
                        <div className='flex items-center gap-3 mt-3'>
                            <button
                                className='cursor-pointer bg-zinc-50 rounded-md px-2 py-2 text-u-orange-500 hover:bg-u-orange-500 hover:text-white'
                                onClick={() =>
                                    handlePageChange(currentPage - 1)
                                }
                                disabled={currentPage === 1}>
                                <FaChevronLeft size={10} />
                            </button>
                            <span className='text-sm text-zinc-700'>
                                Halaman
                                <input
                                    type='number'
                                    value={currentPage}
                                    onChange={e =>
                                        handlePageChange(Number(e.target.value))
                                    }
                                    className='w-10 mx-3 px-2 py-1 border border-zinc-300 rounded-md text-center focus:outline-none '
                                    name=''
                                    id=''
                                />
                                dari {totalPages}
                            </span>
                            <button
                                className='cursor-pointer bg-zinc-50 rounded-md px-2 py-2 text-u-orange-500 hover:bg-u-orange-500 hover:text-white'
                                onClick={() =>
                                    handlePageChange(currentPage + 1)
                                }
                                disabled={currentPage === totalPages}>
                                <FaChevronRight size={10} />
                            </button>
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}

export default UserList
