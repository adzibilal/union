import React from 'react'
import SectionTitle from '../molecules/SectionTitle'
import { FaMessage } from 'react-icons/fa6'
import { FaHome, FaRuler } from 'react-icons/fa'
import { useTranslations } from 'next-intl'

const ProduceWorkSection = () => {
    const t = useTranslations('ProduceWorkSection')
    return (
        <div className='max-container'>
            <SectionTitle
                subTitle={t('subtitle')}
                title={t('title')}
            />

            <div className='grid gap-4 grid-cols-1 lg:grid-cols-3 mt-16'>
                <div className='border-2 p-6 flex flex-col gap-4'>
                    <FaMessage className='text-5xl text-u-orange-500' />
                    <div className='text-3xl uppercase font-extrabold'>
                        {t('1.title')}
                    </div>
                    <div className='text-sm text-zinc-600 leading-relaxed'>
                        {t('1.description')}
                    </div>
                </div>
                <div className='border-2 border-u-orange-500 p-6 flex flex-col gap-4 text-white bg-u-orange-500'>
                    <FaRuler className='text-5xl' />
                    <div className='text-3xl uppercase font-extrabold'>
                        {t('2.title')}
                    </div>
                    <div className='text-sm leading-relaxed'>
                        {t('2.description')}
                    </div>
                </div>
                <div className='border-2 p-6 flex flex-col gap-4'>
                    <FaHome className='text-5xl text-u-orange-500' />
                    <div className='text-3xl uppercase font-extrabold'>
                        {t('3.title')}
                    </div>
                    <div className='text-sm text-zinc-600 leading-relaxed'>
                        {t('3.description')}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProduceWorkSection
