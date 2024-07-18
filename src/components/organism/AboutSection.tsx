import React from 'react'
import SectionTitle from '../molecules/SectionTitle'
import { FaCheckCircle } from 'react-icons/fa'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

const AboutSection = () => {
    const t = useTranslations('AboutSection')
    return (
        <div className='max-container py-32'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 items-center'>
                <Image
                    src='/assets/images/home-1.png'
                    alt='about'
                    width={2000}
                    height={1000}
                    className='aspect-[4/5] w-full object-cover'
                />
                <div className=''>
                    <SectionTitle
                        subTitle={t('welcome')}
                        title={t('companyName')}
                    />

                    <div className='text-md text-zinc-500 text-justify mb-2 leading-relaxed mt-4'>
                        {t('description')}
                    </div>
                    <div className='grid grid-cols-1 gap-3 mt-8'>
                        {/* item checklist */}
                        <div className='flex items-center gap-3'>
                            <FaCheckCircle className='text-u-orange-500' />
                            <div className='text-zinc-500'>
                                {t('features-1')}
                            </div>
                        </div>
                        <div className='flex items-center gap-3'>
                            <FaCheckCircle className='text-u-orange-500' />
                            <div className='text-zinc-500'>
                                {t('features-2')}
                            </div>
                        </div>
                        <div className='flex items-center gap-3'>
                            <FaCheckCircle className='text-u-orange-500' />
                            <div className='text-zinc-500'>
                                {t('features-3')}
                            </div>
                        </div>
                        <div className='flex items-center gap-3'>
                            <FaCheckCircle className='text-u-orange-500' />
                            <div className='text-zinc-500'>
                                {t('features-4')}
                            </div>
                        </div>
                    </div>

                    {/* statistic section */}
                    <div className='grid grid-cols-3 gap-3 mt-10'>
                        <div className='flex flex-col items-center justify-center gap-3'>
                            <div className='text-u-orange-500 text-5xl font-extrabold'>
                                10 Y+
                            </div>
                            <div className='uppercase text-zinc-600'>
                                {t('experience')}
                            </div>
                        </div>
                        <div className='flex flex-col items-center justify-center gap-3'>
                            <div className='text-u-orange-500 text-5xl font-extrabold'>
                                100+
                            </div>
                            <div className='uppercase text-zinc-600'>
                                {t('projects')}
                            </div>
                        </div>
                        <div className='flex flex-col items-center justify-center gap-3'>
                            <div className='text-u-orange-500 text-5xl font-extrabold'>
                                50+
                            </div>
                            <div className='uppercase text-zinc-600'>
                                {t('clients')}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutSection
