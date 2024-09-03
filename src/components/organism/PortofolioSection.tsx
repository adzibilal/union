import React from 'react'
import SectionTitle from '../molecules/SectionTitle'
import Image from 'next/image'
import Link from 'next/link'
import { useTranslations } from 'next-intl'

const PortofolioSection = () => {
    const t = useTranslations('PortofolioSection')
    return (
        <div className='max-container py-10'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 items-center'>
                <div className=''>
                    <SectionTitle subTitle={t('subtitle')} title={t('title')} />
                    <div className='text-zinc-600 mt-6'>{t('description')}</div>
                    <div className='mt-6'>
                        <Link
                            href={`/portofolio`}
                            className='bg-u-orange-500 text-white px-6 py-3 uppercase'>
                            {t('button')}
                        </Link>
                    </div>
                </div>
                <div className=''>
                    <Image
                        src='/assets/images/3.png'
                        alt='about'
                        width={2000}
                        height={1000}
                        className='aspect-[4/5] w-full object-cover'
                    />
                </div>
            </div>
        </div>
    )
}

export default PortofolioSection
