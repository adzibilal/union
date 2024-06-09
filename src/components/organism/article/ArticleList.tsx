'use client'
import { ArticleTableType } from '@/types/admin/articles/type'
import React, { useEffect, useState } from 'react'
import ArticleItem from './ArticleItem'
import { debounce } from 'lodash'
import toast from 'react-hot-toast'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import ArticleListSkeleton from './ArticleListSkeleton'

const ArticleList = () => {
    const [articles, setArticles] = useState<ArticleTableType[]>([])
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages, setTotalPages] = useState(1)
    const [pageSize, setPageSize] = useState(6)
    const [keyword, setKeyword] = useState('')

    const getArticle = async () => {
        try {
            const response = await fetch(
                `/api/articles?page=${currentPage}&pageSize=${pageSize}&keyword=${keyword}`,
                {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            )
            const data = await response.json()
            setArticles(data.articles)
            setTotalPages(data.totalPages)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getArticle()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentPage, pageSize, keyword])

    const handlePageChange = (newPage: number) => {
        if (newPage < 1 || newPage > totalPages) {
            toast.error('Invalid page number')
            return
        }
        setCurrentPage(newPage)
    }

    const handleChangeKeyword = debounce((newKeyword: string) => {
        setKeyword(newKeyword)
    }, 500)

    return (
        <div className='max-container !px-5'>
            {articles && articles.length === 0 ? (
                <ArticleListSkeleton />
            ) : (
                <>
                    <input
                        type='text'
                        placeholder='Cari artikel...'
                        className='w-full px-3 py-2 border border-zinc-300 rounded-md focus:outline-none mt-20'
                        onChange={e => handleChangeKeyword(e.target.value)}
                    />

                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 mb-20 mt-10'>
                        {articles.map(article => (
                            <ArticleItem key={article.id} article={article} />
                        ))}
                    </div>

                    <div className='flex items-center gap-3 mt-3 justify-center'>
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
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}>
                            <FaChevronRight size={10} />
                        </button>
                    </div>
                </>
            )}
        </div>
    )
}

export default ArticleList
