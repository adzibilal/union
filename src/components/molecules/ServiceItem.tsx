import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface ServiceItemProps {
    index: number
    title: string
    description: string
    image: string
    icon: React.ReactNode
    link: string
}

const ServiceItem: React.FC<ServiceItemProps> = ({
    index,
    title,
    description,
    image,
    icon,
    link
}) => {
    // cek index ganjil atau genap
    const isGenap = index % 2 === 0
    return (
        <div
            className={`flex gap-10 items-center max-lg:flex-col ${
                isGenap ? 'flex-row-reverse' : 'flex-row'
            }`}>
            <div className='w-[40%] max-lg:w-[80%] max-md:w-full'>
                <Image
                    src={image}
                    alt={title}
                    className='w-full aspect-[9/10] object-cover'
                    width={600}
                    height={600}
                />
            </div>
            <div className='w-[60%] max-lg:w-[80%] max-md:w-full'>
                <div className='text-[50px] text-u-orange-500 bg-u-orange-300/20 w-max p-2 mb-4'>
                    {icon}
                </div>
                <h3 className='font-bold uppercase text-4xl'>{title}</h3>
                <p className='leading-relaxed mt-2'>{description}</p>
                {/* button */}
                <Link
                    href={link}
                    className='inline-block mt-5 bg-u-orange-500 text-white py-2 px-5 hover:bg-u-orange-300 transition duration-200'>
                    Kontak Kami
                </Link>
            </div>
        </div>
    )
}

export default ServiceItem
