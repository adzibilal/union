import React from 'react'
import SectionTitle from '../molecules/SectionTitle'
import Image from 'next/image'

const PortofolioSection = () => {
    return (
        <div className='max-container py-10'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 items-center'>
                <div className=''>
                    <SectionTitle
                        subTitle='Perfect Partner'
                        title='WE HAVE PRIORITY FOR CAN CREATE DREAM HOME DESIGN'
                    />
                    <div className='text-zinc-600 mt-6'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quasi, quod voluptatem. Quisquam, voluptate. Quisquam,
                        voluptate.
                    </div>
                    <div className='mt-6'>
                        <button className='bg-u-orange-500 text-white px-6 py-3 uppercase'>
                            PORTOFOLIO
                        </button>
                    </div>
                </div>
                <div className=''>
                    <Image
                        src='/assets/images/porto/2.png'
                        alt='about'
                        width={500}
                        height={600}
                        className='aspect-[4/5] w-full object-cover'
                    />
                </div>
            </div>
        </div>
    )
}

export default PortofolioSection
