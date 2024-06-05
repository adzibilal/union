'use client'
import React, { useState, useEffect, useRef } from 'react'
import {
    FaChevronLeft,
    FaChevronRight,
    FaInfoCircle,
    FaPlusCircle
} from 'react-icons/fa'
import { debounce } from 'lodash'
import Link from 'next/link'
import { ArticleTableType } from '@/types/admin/articles/type'
import ArticleListItem from '@/components/atoms/admin/articles/ArticleListItem'

function ArticleList() {
    const [articles, setArticles] = useState<ArticleTableType[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages, setTotalPages] = useState(1)
    const [pageSize, setPageSize] = useState(6)
    const [keyword, setKeyword] = useState('')
    const abortControllerRef = useRef<AbortController | null>(null)

    async function fetchUsers() {
        setIsLoading(true)
        if (abortControllerRef.current) {
            abortControllerRef.current.abort()
        }

        abortControllerRef.current = new AbortController()
        const signal = abortControllerRef.current.signal

        try {
            const response = await fetch(
                `/api/cms/articles?page=${currentPage}&pageSize=${pageSize}&keyword=${keyword}`,
                { signal }
            )
            const data = await response.json()

            setArticles(data.articles)
            setTotalPages(data.totalPages)
        } catch (error: any) {
            if (error.name !== 'AbortError') {
                console.error('Error fetching users:', error)
            }
        }
        setIsLoading(false)
    }

    useEffect(() => {
        fetchUsers()
        return () => {
            if (abortControllerRef.current) {
                abortControllerRef.current.abort()
            }
        }
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
                <div className='font-semibold text-2xl'>Articles</div>
                <input
                    type='text'
                    placeholder='Cari Article'
                    onChange={e => handleChangeKeyword(e.target.value)}
                    className='px-3 py-1 border border-zinc-300 rounded-md focus:outline-none w-[50%]'
                />

                <Link
                    href={'/admin/users/create'}
                    className='flex gap-3 text-white bg-u-orange-500 items-center px-3 py-1 rounded-md hover:opacity-85 cursor-pointer'>
                    Buat Article <FaPlusCircle />{' '}
                </Link>
            </div>
            {isLoading ? (
                // <UserListSkeleton />
                <div className='text-center text-zinc-200 mt-5 flex flex-col items-center justify-center'>
                    <FaInfoCircle size={150} className='mb-3' />
                    Loading...
                </div>
            ) : (
                <div className=''>
                    {/* Tampilkan daftar pengguna (users) */}
                    <div className='my-5 grid grid-cols-2 gap-3'>
                        {articles.map(article => (
                            <ArticleListItem
                                key={article.id}
                                article={article}
                                onChange={fetchUsers}
                            />
                        ))}
                    </div>
                    {/* if user length = 0 */}
                    {articles.length === 0 && !isLoading ? (
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

export default ArticleList
