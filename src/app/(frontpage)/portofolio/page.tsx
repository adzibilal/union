import PageHeader from '@/components/organism/PageHeader'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const PortofolioPage = () => {
    return (
        <div>
            <PageHeader
                title='Portofolio'
                subtitle='List of our work that we have done.'
            />

            <div className='max-container py-10'>
                <div className='grid grid-cols-3 gap-3'>
                    <div className='shadow-lg'>
                        <Image
                            src='/assets/images/porto/1.png'
                            alt='about'
                            width={500}
                            height={600}
                            className='aspect-[5/4] w-full object-cover'
                        />
                        <div className='p-3'>
                            <div className=''>PRE MADE HOME CONSULTATION</div>
                            <div className='grid grid-cols-2'>
                                <div className='text-sm text-zinc-500'>
                                    Interior Design
                                </div>
                                <div className='text-sm text-zinc-500'>
                                    Construction
                                </div>
                            </div>
                            <Link href={`#`} target='_blank'>
                                <div className='bg-u-orange-500 mt-5 text-white px-6 py-3 w-max hover:bg-u-orange-300 cursor-pointer'>
                                    Selengkapnya
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PortofolioPage
