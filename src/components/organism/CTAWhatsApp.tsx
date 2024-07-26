import { useTranslations } from 'next-intl'
import Link from 'next/link'
import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'

const CTAWhatsApp = () => {
    const t = useTranslations('CTAWhatsApp')
    return (
        <div className='bg-u-orange-500 py-10 my-20'>
            <div className='max-container'>
                <div className='grid grid-cols-2 gap-10 items-center max-md:flex max-md:flex-col'>
                    <div className='bg-white p-5 max-md:w-full max-md:flex max-md:flex-col max-md:justify-center max-md:items-center'>
                        <FaWhatsapp className='text-5xl text-u-orange-500' />
                        <div className='mt-2'>{t('contactUsNow')}</div>
                        <div className='text-3xl font-semibold mt-2'>
                            +62 8112 434 411
                        </div>
                        <Link
                            href='https://wa.me/628112434411'
                            className='bg-u-orange-500 text-white px-5 py-2 mt-5 inline-block'
                            target='_blank'
                            >
                            {t('chatNow')}
                        </Link>
                    </div>
                    <div className='text-5xl font-bold text-white text-center max-md:text-3xl'>
                        {t('quote')}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CTAWhatsApp
