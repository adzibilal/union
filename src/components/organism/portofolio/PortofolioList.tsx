'use client'
import React, { useEffect, useState } from 'react'
import PortofolioListItem from './PortofolioListItem'
import { PortofolioTableType } from '@/types/admin/portofolio/type'
import toast from 'react-hot-toast'
import { debounce } from 'lodash'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import PortofolioListSkeleton from './PortofolioListSkeleton'

const PortofolioList = () => {
    const [portofolios, setPortofolios] = useState<PortofolioTableType[]>([])
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages, setTotalPages] = useState(1)
    const [pageSize, setPageSize] = useState(6)
    const [keyword, setKeyword] = useState('')
    const [isLoading, setIsLoading] = useState(true)

    const getPortofolio = async () => {
        setIsLoading(true)
        try {
            const response = await fetch(
                `/api/portofolio?page=${currentPage}&pageSize=${pageSize}&keyword=${keyword}`,
                {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            )
            const data = await response.json()
            setPortofolios(data.portofolios)
            setTotalPages(data.totalPages)
        } catch (error) {
            console.log(error)
        }
        setIsLoading(false)
    }

    useEffect(() => {
        getPortofolio()
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
        <div className='max-container py-10 !px-5'>
            <input
                type='text'
                placeholder='Cari portofolio...'
                className='w-full px-3 py-2 border border-zinc-300 rounded-md focus:outline-none mt-10'
                onChange={e => handleChangeKeyword(e.target.value)}
            />

            {isLoading ? (
                <PortofolioListSkeleton />
            ) : portofolios && portofolios.length === 0 ? (
                <div>Portofolio Tidak ditemukan</div>
            ) : (
                <>
                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 mb-20 mt-10'>
                        {portofolios.map(portofolio => (
                            <PortofolioListItem
                                key={portofolio.id}
                                portofolio={portofolio}
                            />
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

export default PortofolioList
