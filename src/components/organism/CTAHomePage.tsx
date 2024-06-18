import { useTranslations } from 'next-intl'
import Link from 'next/link'
import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'

const CTAHomePage = () => {
    const t = useTranslations('CTAHomePage')
    return (
        <div className='bg-u-orange-500'>
            <div className='max-container flex flex-col items-center justify-center gap-3 text-center text-white py-10'>
                <div className='font-bold text-4xl'>{t('title')}</div>
                <div className=' mb-5'>{t('subtitle')}</div>

                {/* CTA BUTTON WA */}

                <Link
                    href={`/contact`}
                    className='bg-green-600 hover:bg-green-700 flex items-center gap-3 text-white px-6 py-3 uppercase animate-bounce w-max'>
                    <FaWhatsapp />
                    {t('button')}
                </Link>
            </div>
        </div>
    )
}

export default CTAHomePage
