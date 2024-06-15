import React from 'react'
import SectionTitle from '../molecules/SectionTitle'
import Image from 'next/image'
import Link from 'next/link'

const PortofolioSection = () => {
    return (
        <div className='max-container py-10'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 items-center'>
                <div className=''>
                    <SectionTitle
                        subTitle='Perfect Partner'
                        title='Kepuasan Anda Adalah Prioritas Bagi Kami'
                    />
                    <div className='text-zinc-600 mt-6'>
                        Kami berkomitmen untuk memberikan pelayanan terbaik dan
                        hasil yang memuaskan. Setiap proyek kami kerjakan dengan
                        sepenuh hati, karena kebahagiaan Anda adalah kebanggaan
                        kami.
                    </div>
                    <div className='mt-6'>
                        <Link href={`/portofolio`} className='bg-u-orange-500 text-white px-6 py-3 uppercase'>
                            PORTOFOLIO KAMI
                        </Link>
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
