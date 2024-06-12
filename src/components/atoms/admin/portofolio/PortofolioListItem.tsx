'use client'

import { PortofolioTableType } from '@/types/admin/portofolio/type'
import { diffForHumans } from '@/utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaEdit, FaImage, FaTrash } from 'react-icons/fa'
import LoadingSpinner from '../../LoadingSpinner'

interface PortofolioListItemProps {
    portofolio: PortofolioTableType
    onChange: () => void
}

const PortofolioListItem: React.FC<PortofolioListItemProps> = props => {
    const [isLoading, setIsLoading] = React.useState(false)
    const handleDeletePortofolio = async () => {
        const conf = confirm('Apakah anda yakin ingin menghapus portofolio ini?')
        if (!conf) return
        setIsLoading(true)
        try {
            const response = await fetch(
                `/api/cms/portofolios/${props.portofolio.slug}`,
                {
                    method: 'DELETE'
                }
            )

            if (response.ok) {
                alert('Portofolio berhasil dihapus')
            } else {
                alert('Gagal menghapus portofolio')
            }
        } catch (error) {
            console.error('[DELETE USER]', error)
            alert('Gagal menghapus portofolio')
        } finally {
            props.onChange()
        }
        setIsLoading(false)
    }

    return (
        <div className={`bg-zinc-50 px-3 py-2 rounded-md relative  group `}>
            {isLoading && <LoadingSpinner />}
            <div className='flex flex-col w-full items-center gap-3'>
                {props.portofolio.image ? (
                    <Image
                        src={props.portofolio.image}
                        alt={props.portofolio.title}
                        width={800}
                        height={500}
                        className='rounded-md aspect-video w-full object-cover'
                    />
                ) : (
                    <div className='rounded-md aspect-video w-full bg-zinc-200 flex items-center justify-center'>
                        <FaImage className='text-zinc-400 text-4xl' />
                    </div>
                )}

                <div className='w-full'>
                    <div className='flex gap-3 items-center mb-2'>
                        {/* {props.portofolio.PortofolioCategory.map((item, index) => (
                            <div
                                key={index}
                                className='bg-orange-100 text-orange-500 font-semibold text-xs px-2 py-1 rounded-md'>
                                {item.category.name}
                            </div>
                        ))} */}
                    </div>
                    <div className='text-zinc-900 text-lg font-semibold'>
                        {props.portofolio.title}
                    </div>
                    <div className='text-zinc-500 text-sm'>
                        {props.portofolio.resume}
                    </div>
                    <div className='flex items-center justify-between mt-3'>
                        <div className='text-zinc-500 text-xs'>
                            Created by: {props.portofolio.author.name}
                        </div>
                        <div className='text-zinc-500 text-xs'>
                            {diffForHumans(props.portofolio.createdAt)}
                        </div>
                    </div>
                </div>
            </div>
            {/* actions item */}
            <div className='absolute top-4 right-4 bg-white shadow-sm rounded-full px-3 py-1 items-center gap-3 hidden group-hover:flex'>
                <Link
                    href={`/admin/portofolio/${props.portofolio.slug}`}
                    className='text-blue-500 font-semibold'>
                    <FaEdit />
                </Link>
                <button
                    className='text-red-500 font-semibold'
                    onClick={() => handleDeletePortofolio()}>
                    <FaTrash />
                </button>
            </div>
        </div>
    )
}

export default PortofolioListItem
