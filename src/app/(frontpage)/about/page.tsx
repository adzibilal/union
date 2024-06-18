import SectionTitle from '@/components/molecules/SectionTitle'
import AboutSection from '@/components/organism/AboutSection'
import CTAWhatsApp from '@/components/organism/CTAWhatsApp'
import KeunggulanKamiSection from '@/components/organism/KeunggulanKami'
import OurTeam from '@/components/organism/OurTeam'
import PageHeader from '@/components/organism/PageHeader'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaCheckCircle } from 'react-icons/fa'

const AboutPage = () => {
    const t = useTranslations('AboutPage')
    return (
        <div>
            <PageHeader title={t('pageTitle')} subtitle={t('pageSubtitle')} />

            <div className='max-container py-32'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 items-center'>
                    <div className=''>
                        <Image
                            src='/assets/images/porto/3.png'
                            alt={t('aboutImageAlt')}
                            width={500}
                            height={600}
                            className='aspect-[4/5] w-full object-cover'
                        />
                    </div>
                    <div className=''>
                        <SectionTitle
                            subTitle={t('sectionTitle')}
                            title={t('sectionSubtitle')}
                        />
                        <div className=''>{t('sectionDescription')}</div>
                        <div className='mt-8'>
                            <Link
                                href={`/portofolio`}
                                className='bg-u-orange-500 text-white px-6 py-3 uppercase'>
                                {t('portofolioButton')}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className='bg-u-orange-500 mb-20'>
                <div className='max-container py-16 flex flex-col items-end max-md:items-start'>
                    <div className='text-6xl font-bold text-white mb-3'>
                        {t('visionTitle')}
                    </div>
                    <div className='text-white text-xl'>
                       {t('visionText')}
                    </div>
                </div>
                <div className='max-container py-16 flex flex-col items-start'>
                    <div className='text-6xl font-bold text-white mb-3'>
                        {t('missionTitle')}
                    </div>

                    <div className='flex flex-col items-start gap-3 mt-3'>
                        <div className='flex items-center justify-center gap-2 text-white text-xl'>
                            <FaCheckCircle />
                            <div className=''>
                               {t('missionItems.1')}
                            </div>
                        </div>
                        <div className='flex items-center justify-center gap-2 text-white text-xl'>
                            <FaCheckCircle />
                            <div className=''>
                                {t('missionItems.2')}
                            </div>
                        </div>
                        <div className='flex items-center justify-center gap-2 text-white text-xl'>
                            <FaCheckCircle />
                            <div className=''>
                                {t('missionItems.3')}
                            </div>
                        </div>
                        <div className='flex items-center justify-center gap-2 text-white text-xl'>
                            <FaCheckCircle />
                            <div className=''>
                                {t('missionItems.4')}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <KeunggulanKamiSection />
            <br />
            <br />
            <br />
            <OurTeam />

            <CTAWhatsApp />
        </div>
    )
}

export default AboutPage
