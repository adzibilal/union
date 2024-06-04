'use client'

import UserListItem from '@/components/atoms/admin/users/UserListItem'
import { UserTypeTable } from '@/types/admin/users/type'
import React, { useState, useEffect, useRef } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { debounce } from 'lodash'

function UserList() {
    const [users, setUsers] = useState<UserTypeTable[]>([])
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages, setTotalPages] = useState(1)
    const [pageSize, setPageSize] = useState(10) // Or get from user input
    const [keyword, setKeyword] = useState('')
    const isMounted = useRef(false)
    const abortControllerRef = useRef<AbortController | null>(null)

    async function fetchUsers() {
        if (abortControllerRef.current) {
            abortControllerRef.current.abort() // Cancel any pending requests
        }

        abortControllerRef.current = new AbortController()
        const signal = abortControllerRef.current.signal

        try {
            const response = await fetch(
                `/api/cms/users?page=${currentPage}&pageSize=${pageSize}&keyword=${keyword}`,
                { signal }
            )
            const data = await response.json()

            if (isMounted.current) {
                // Ensure the component is still mounted
                setUsers(data.users)
                setTotalPages(data.totalPages)
            }
        } catch (error: any) {
            if (error.name !== 'AbortError') {
                // Handle non-abort errors
                console.error('Error fetching users:', error)
            }
        }
    }

    useEffect(() => {
        isMounted.current = true
        fetchUsers()
        return () => {
            isMounted.current = false
            if (abortControllerRef.current) {
                abortControllerRef.current.abort() // Cleanup on unmount
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentPage, pageSize])

    useEffect(() => {
        const debouncedFetchUsers = debounce(fetchUsers, 500)
        debouncedFetchUsers()
        return () => debouncedFetchUsers.cancel() // Cleanup on unmount or keyword change
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [keyword])

    const handlePageChange = (newPage: number) => {
        setCurrentPage(newPage)
    }

    const handleChangeKeyword = (newKeyword: string) => {
        setKeyword(newKeyword)
    }

    return (
        <div>
            <div className='flex items-center justify-between'>
                <div className='font-semibold text-2xl'>Users</div>
                <input
                    type='text'
                    placeholder='Cari pengguna'
                    value={keyword}
                    onChange={e => handleChangeKeyword(e.target.value)}
                    className='px-3 py-2 border border-zinc-300 rounded-md focus:outline-none'
                />
            </div>
            {/* Tampilkan daftar pengguna (users) */}
            <div className='my-5 flex flex-col gap-3'>
                {users.map(user => (
                    <UserListItem key={user.id} user={user} />
                ))}
            </div>

            {/* Kontrol pagination */}
            <div className='flex items-center gap-3 mt-3'>
                <button
                    className='cursor-pointer bg-zinc-50 rounded-md px-2 py-2 text-u-orange-500 hover:bg-u-orange-500 hover:text-white'
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}>
                    <FaChevronLeft size={10} />
                </button>
                <span className='text-sm text-zinc-700'>
                    Halaman
                    <input
                        type='number'
                        value={currentPage}
                        onChange={e => handlePageChange(Number(e.target.value))}
                        className='w-10 mx-3 px-2 py-1 border border-zinc-300 rounded-md text-center focus:outline-none '
                        name=''
                        id=''
                    />
                    dari {totalPages}
                </span>
                <button
                    className='cursor-pointer bg-zinc-50 rounded-md px-2 py-2 text-u-orange-500 hover:bg-u-orange-500 hover:text-white'
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}>
                    <FaChevronRight size={10} />
                </button>
            </div>
        </div>
    )
}

export default UserList
