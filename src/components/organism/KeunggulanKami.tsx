import React from 'react'
import SectionTitle from '../molecules/SectionTitle'
import { FaMessage } from 'react-icons/fa6'
import { FaHome, FaLaptop, FaRuler, FaSchool, FaUsers } from 'react-icons/fa'
import { useTranslations } from 'next-intl'

const KeunggulanKamiSection = () => {
    const t = useTranslations('KeunggulanKamiSection')
    return (
        <div className='max-container'>
            <SectionTitle
                subTitle={t('subTitle')}
                title={t('title')}
            />

            <div className='grid gap-4 grid-cols-1 lg:grid-cols-4 mt-16'>
                <div className='border-2 p-6 flex flex-col gap-4'>
                    <FaUsers className='text-5xl text-u-orange-500' />
                    <div className='text-3xl uppercase font-extrabold'>
                        {t('timProfesional.title')}
                    </div>
                    <div className='text-sm text-zinc-600 leading-relaxed'>
                        {t('timProfesional.description')}
                    </div>
                </div>
                <div className='border-2 border-u-orange-500 p-6 flex flex-col gap-4 text-white bg-u-orange-500'>
                    <FaLaptop className='text-5xl' />
                    <div className='text-3xl uppercase font-extrabold'>
                        {t('teknologiCanggih.title')}
                    </div>
                    <div className='text-sm leading-relaxed'>
                        {t('teknologiCanggih.description')}
                    </div>
                </div>
                <div className='border-2 p-6 flex flex-col gap-4'>
                    <FaHome className='text-5xl text-u-orange-500' />
                    <div className='text-3xl uppercase font-extrabold'>
                        {t('workshopTerpadu.title')}
                    </div>
                    <div className='text-sm text-zinc-600 leading-relaxed'>
                        {t('workshopTerpadu.description')}
                    </div>
                </div>
                <div className='border-2 border-u-orange-500 p-6 flex flex-col gap-4 text-white bg-u-orange-500'>
                    <FaSchool className='text-5xl' />
                    <div className='text-3xl uppercase font-extrabold'>
                        {t('portofolioKuat.title')}
                    </div>
                    <div className='text-sm text-white leading-relaxed'>
                        {t('portofolioKuat.description')}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default KeunggulanKamiSection
