import { PortofolioTableType } from '@/types/admin/portofolio/type'
import { diffForHumans } from '@/utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BiCalendar, BiUser } from 'react-icons/bi'

interface PortofolioListItemProps {
    portofolio: PortofolioTableType
}

const PortofolioListItem: React.FC<PortofolioListItemProps> = ({
    portofolio
}) => {
    const {
        image,
        title,
        resume,
        slug,
        content,
        buildPrice,
        client,
        designPrice,
        isPublished,
        location,
        material,
        projectType,
        size,
        PortofolioStyle,
        author,
        createdAt
    } = portofolio

    return (
        <div className='shadow-lg'>
            <Image
                src={image || '/assets/images/porto/1.png'}
                alt='about'
                width={500}
                height={600}
                className='aspect-video w-full object-cover'
            />
            <div className='p-3'>
                <div className='flex gap-3 items-center mb-2'>
                    {PortofolioStyle.map((item, index) => (
                        <div
                            key={index}
                            className='bg-orange-100 text-orange-500 font-semibold text-xs px-2 py-1 rounded-md hover:underline cursor-pointer'>
                            {item.style.name}
                        </div>
                    ))}
                </div>
                <div className='font-bold text-xl'>{title || 'Title'}</div>
                <div className='text-sm text-zinc-600'>
                    {resume || 'Resume'}
                </div>

                <div className='flex justify-between items-center text-sm text-zinc-700 mt-5'>
                    <div className='flex items-center gap-2'>
                        <BiCalendar />
                        <div className=''>{diffForHumans(createdAt)}</div>
                    </div>
                    <div className='flex items-center gap-2'>
                        <BiUser />
                        <div className=''>
                            Designed by{' '}
                            <Link
                                href={`/author/${author.id}`}
                                className='hover:underline cursor-pointer text-u-orange-500'>
                                {author.name}
                            </Link>
                        </div>
                    </div>
                </div>
                <Link href={`/portofolio/${slug || 'slug'}`}>
                    <div className='bg-u-orange-500 mt-5 text-white px-6 py-3 w-max hover:bg-u-orange-300 cursor-pointer'>
                        Selengkapnya
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default PortofolioListItem
