'use client'
import React, { useState, useEffect, useRef } from 'react'
import {
    FaChevronLeft,
    FaChevronRight,
    FaInfoCircle,
    FaPlusCircle
} from 'react-icons/fa'
import { debounce, set } from 'lodash'
import StyleDesignListSkeleton from './StyleDesignListSkeleton'
import ModalFormStyleDesign from '@/components/molecules/admin/style-design/ModalFormStyleDesign'
import { StyleDesignType } from '@/types/admin/portofolio/type'
import StyleDesignListItem from '@/components/atoms/admin/style-design/StyleDesignListItem'

function StyleDesignList() {
    const [styleDesigns, setStyleDesign] = useState<StyleDesignType[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages, setTotalPages] = useState(1)
    const [pageSize, setPageSize] = useState(6)
    const [keyword, setKeyword] = useState('')
    const abortControllerRef = useRef<AbortController | null>(null)

    const [isModalOpen, setIsModalOpen] = useState(false)
    const [initialValues, setInitialValues] = useState<StyleDesignType | null>(
        null
    )

    async function fetchStyleDesign() {
        setIsLoading(true)
        if (abortControllerRef.current) {
            abortControllerRef.current.abort()
        }

        abortControllerRef.current = new AbortController()
        const signal = abortControllerRef.current.signal

        try {
            const response = await fetch(
                `/api/cms/style-design?page=${currentPage}&pageSize=${pageSize}&keyword=${keyword}`,
                { signal }
            )
            const data = await response.json()

            setStyleDesign(data.styleDesigns)
            setTotalPages(data.totalPages)
        } catch (error: any) {
            if (error.name !== 'AbortError') {
                console.error('Error fetching :', error)
            }
        }
        setIsLoading(false)
    }

    useEffect(() => {
        fetchStyleDesign()
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

    const handleOpenModal = (
        type: 'create' | 'edit',
        styleDesign?: StyleDesignType
    ) => {
        if (type === 'edit') {
            if (!styleDesign) return
            setInitialValues(styleDesign)
        }
        setIsModalOpen(true)
    }

    const clearModal = () => {
        setInitialValues(null)
        setIsModalOpen(false)
    }

    return (
        <div>
            <ModalFormStyleDesign
                isOpen={isModalOpen}
                initialValues={initialValues}
                onClose={clearModal}
                onChange={fetchStyleDesign}
            />
            <div className='flex items-center justify-between'>
                <div className='font-semibold text-2xl'>Style Design</div>
                <input
                    type='text'
                    placeholder='Cari Style Design'
                    onChange={e => handleChangeKeyword(e.target.value)}
                    className='px-3 py-1 border border-zinc-300 rounded-md focus:outline-none w-[50%]'
                />

                <div
                    onClick={() => handleOpenModal('create')}
                    className='flex gap-3 text-white bg-u-orange-500 items-center px-3 py-1 rounded-md hover:opacity-85 cursor-pointer'>
                    Buat Style Design <FaPlusCircle />{' '}
                </div>
            </div>
            {isLoading ? (
                <StyleDesignListSkeleton />
            ) : (
                <div className=''>
                    {/* Tampilkan daftar pengguna (users) */}
                    <div className='my-5 grid grid-cols-2 gap-3'>
                        {styleDesigns.map(styleDesign => (
                            <StyleDesignListItem
                                key={styleDesign.id}
                                styleDesign={styleDesign}
                                onChange={fetchStyleDesign}
                                onEdit={styleDesign =>
                                    handleOpenModal('edit', styleDesign)
                                }
                            />
                        ))}
                    </div>
                    {/* if user length = 0 */}
                    {styleDesigns.length === 0 && !isLoading ? (
                        <div className='text-center text-zinc-200 mt-5 flex flex-col items-center justify-center'>
                            <FaInfoCircle size={150} className='mb-3' />
                            Tidak ada Style Design
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

export default StyleDesignList
