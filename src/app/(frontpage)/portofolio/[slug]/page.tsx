'use client'
import ContentRender from '@/components/molecules/ContentRender'
import PortofolioDetailSkeleton from '@/components/organism/portofolio/PortofolioDetailSkeleton'
import { PortofolioTableType } from '@/types/admin/portofolio/type'
import { diffForHumans, rupiahFormat } from '@/utils'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import {
    BiBox,
    BiCalendar,
    BiHome,
    BiPhotoAlbum,
    BiPin,
    BiRuler,
    BiUser
} from 'react-icons/bi'
import { FaMoneyBill } from 'react-icons/fa'
import { FaLocationDot, FaLocationPin } from 'react-icons/fa6'

const PortofolioDetailPage = () => {
    const { slug } = useParams<{ slug: string }>()
    const [portofolio, setPortofolio] = useState<PortofolioTableType | null>(
        null
    )

    const getPortofolio = async () => {
        try {
            const response = await fetch(`/api/portofolio/${slug}`)
            const data = await response.json()
            setPortofolio(data)
        } catch (error) {
            console.error('[GET PORTOFOLIO BY SLUG]', error)
        }
    }

    useEffect(() => {
        getPortofolio()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className=''>
            <div className='w-full h-[30vh] bg-zinc-200 overflow-hidden -z-10 opacity-10 relative'>
                <Image
                    src='/assets/images/sliders/1.jpg'
                    width={1200}
                    height={300}
                    className='w-full h-[30vh] object-cover'
                    alt=''
                />
            </div>
            <div className='max-w-[1000px] mx-auto -mt-[250px] max-sm:px-6'>
                {portofolio ? (
                    <div className='my-10'>
                        {portofolio.image && (
                            <Image
                                src={portofolio.image}
                                alt={portofolio.title}
                                width={800}
                                height={500}
                                className='rounded-md aspect-video w-full object-cover shadow-lg z-30'
                            />
                        )}

                        <h1 className='text-4xl font-bold my-5 max-sm:text-xl'>
                            {portofolio.title}
                        </h1>

                        <div className='flex items-center justify-between border-b pb-5 mb-5 max-sm:flex-col max-sm:items-start max-sm:gap-3'>
                            <div className='flex gap-3 items-center'>
                                {portofolio.PortofolioStyle.map(
                                    (item, index) => (
                                        <div
                                            key={index}
                                            className='bg-orange-100 text-orange-500 font-semibold text-xs px-2 py-1 rounded-md hover:underline cursor-pointer'>
                                            {item.style.name}
                                        </div>
                                    )
                                )}
                            </div>
                            <div className='flex justify-between items-center text-sm text-zinc-700 gap-3 max-sm:text-xs max-sm:w-full'>
                                <div className='flex items-center gap-2'>
                                    <BiCalendar />
                                    <div className=''>
                                        {diffForHumans(portofolio.createdAt)}
                                    </div>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <BiUser />
                                    <div className=''>
                                        Posted by{' '}
                                        <Link
                                            href={`/author/${portofolio.author.id}`}
                                            className='hover:underline cursor-pointer text-u-orange-500'>
                                            {portofolio.author.name}
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='bg-zinc-50 p-3'>
                            <div className='flex items-center gap-7 justify-center'>
                                <div className=''>
                                    <div className='flex items-center gap-1 text-xs text-zinc-600 mb-1'>
                                        <FaMoneyBill />
                                        <div className='font-semibold'>
                                            Design Price
                                        </div>
                                    </div>
                                    <div className='text-zinc-700 text-sm'>
                                        {rupiahFormat(portofolio.designPrice) ||
                                            'Not Set'}
                                    </div>
                                </div>
                                <div className=''>
                                    <div className='flex items-center gap-1 text-xs text-zinc-600 mb-1'>
                                        <FaMoneyBill />
                                        <div className='font-semibold'>
                                            Build Price
                                        </div>
                                    </div>
                                    <div className='text-zinc-700 text-sm'>
                                        {rupiahFormat(portofolio.buildPrice) ||
                                            'Not Set'}
                                    </div>
                                </div>

                                <div className=''>
                                    <div className='flex items-center gap-1 text-xs text-zinc-600 mb-1'>
                                        <BiHome />
                                        <div className='font-semibold'>
                                            Project Type
                                        </div>
                                    </div>
                                    <div className='text-zinc-700 text-sm'>
                                        {portofolio.projectType || 'Not Set'}
                                    </div>
                                </div>
                                <div className=''>
                                    <div className='flex items-center gap-1 text-xs text-zinc-600 mb-1'>
                                        <BiRuler />
                                        <div className='font-semibold'>
                                            Size
                                        </div>
                                    </div>
                                    <div className='text-zinc-700 text-sm'>
                                        {portofolio.size || 'Not Set'}
                                    </div>
                                </div>
                                <div className=''>
                                    <div className='flex items-center gap-1 text-xs text-zinc-600 mb-1'>
                                        <BiUser />
                                        <div className='font-semibold'>
                                            Client
                                        </div>
                                    </div>
                                    <div className='text-zinc-700 text-sm'>
                                        {portofolio.client || 'Not Set'}
                                    </div>
                                </div>
                                <div className=''>
                                    <div className='flex items-center gap-1 text-xs text-zinc-600 mb-1'>
                                        <FaLocationDot />
                                        <div className='font-semibold'>
                                            Location
                                        </div>
                                    </div>
                                    <div className='text-zinc-700 text-sm'>
                                        {portofolio.location || 'Not Set'}
                                    </div>
                                </div>
                            </div>
                            <div className='flex items-center gap-7 justify-center mt-5'>
                                <div className=''>
                                    <div className='flex items-center gap-1 text-xs text-zinc-600 mb-1'>
                                        <BiBox />
                                        <div className='font-semibold'>
                                            Material
                                        </div>
                                    </div>
                                    <div className='text-zinc-700 text-sm'>
                                        {portofolio.material || 'Not Set'}
                                    </div>
                                </div>

                                <div className=''>
                                    <div className='flex items-center gap-1 text-xs text-zinc-600 mb-1'>
                                        <BiPhotoAlbum />
                                        <div className='font-semibold'>
                                            Gaya Design
                                        </div>
                                    </div>
                                    <div className='text-zinc-700 text-sm flex gap-2'>
                                        {portofolio.PortofolioStyle.map(
                                            (item, index) => (
                                                <div
                                                    key={index}
                                                    className='text-u-orange-500 hover:underline cursor-pointer flex gap-2'>
                                                    {item.style.name}

                                                    {index !==
                                                        portofolio
                                                            .PortofolioStyle
                                                            .length -
                                                            1 && (
                                                        <div className='text-zinc-500'>
                                                            |
                                                        </div>
                                                    )}
                                                </div>
                                            )
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <ContentRender html={portofolio.content} />
                    </div>
                ) : (
                    <PortofolioDetailSkeleton />
                )}
            </div>
        </div>
    )
}

export default PortofolioDetailPage
