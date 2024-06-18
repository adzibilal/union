import { useTranslations } from 'next-intl'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

const InfoBox = () => {
    const t = useTranslations('InfoBox')
    return (
        <div className='max-container'>
            <div className='grid grid-cols-1 md:grid-cols-3'>
                <div className='p-7 bg-zinc-900 text-white flex flex-col gap-4'>
                    <div className='text-3xl font-extrabold'>
                        {t('1.title')}
                    </div>
                    <div className='text-sm font-light leading-loose'>
                        {t('1.description')}
                    </div>
                    <FaArrowRight size={25} />
                </div>
                <div className='p-7 bg-u-orange-500 text-white flex flex-col gap-4'>
                    <div className='text-3xl font-extrabold'>
                        {t('2.title')}
                    </div>
                    <div className='text-sm font-light leading-loose'>
                        {t('2.description')}
                    </div>
                    <FaArrowRight size={25} />
                </div>
                <div className='p-7 bg-zinc-900 text-white flex flex-col gap-4'>
                    <div className='text-3xl font-extrabold'>
                        {t('3.title')}
                    </div>
                    <div className='text-sm font-light leading-loose'>
                        {t('3.description')}
                    </div>
                    <FaArrowRight size={25} />
                </div>
            </div>
        </div>
    )
}

export default InfoBox
