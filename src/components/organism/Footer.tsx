import Link from 'next/link'
import React from 'react'
import {
    FaChevronRight,
    FaFacebook,
    FaInstagram,
    FaLinkedinIn,
    FaTwitter
} from 'react-icons/fa'
import SliderLogoFooter from '../molecules/SliderLogoFooter'
import { useTranslations } from 'next-intl'

const Footer = () => {
    const t = useTranslations('Footer')

    return (
        <div className='bg-zinc-900 mt-36'>
            <div className='max-container pt-6'>
                <div className='bg-u-orange-500 p-6 -mt-20'>
                    <div className='bg-zinc-200 -mt-16 flex justify-around items-center py-5 max-sm:hidden px-5'>
                        <SliderLogoFooter />
                    </div>
                    <div className='text-white font-extrabold uppercase text-5xl my-5'>
                        {t('cta-text')}
                    </div>
                    <div className='bg-zinc-900 text-white px-6 py-3 w-max hover:bg-zinc-700 cursor-pointer'>
                        {t('cta-button')}
                    </div>
                </div>

                <div className='grid grid-cols-[2fr_1fr_1fr] max-sm:grid-cols-1 gap-10 pt-16 pb-8'>
                    <div className='flex flex-col gap-3'>
                        <div className='text-lg font-extrabold uppercase text-white'>
                            {t('intro-title')}
                        </div>
                        <div className='text-zinc-200 text-xs'>
                            {t('intro-desc')}
                        </div>
                        <div className='flex gap-3'>
                            <Link href='/'>
                                <FaFacebook
                                    size={22}
                                    className='text-u-orange-500'
                                />
                            </Link>
                            <Link href='/'>
                                <FaTwitter
                                    size={22}
                                    className='text-u-orange-500'
                                />
                            </Link>
                            <Link href='/'>
                                <FaInstagram
                                    size={22}
                                    className='text-u-orange-500'
                                />
                            </Link>
                            <Link href='/'>
                                <FaLinkedinIn
                                    size={22}
                                    className='text-u-orange-500'
                                />
                            </Link>
                        </div>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <div className='text-lg font-extrabold uppercase text-white'>
                            {t('navigation-title')}
                        </div>
                        <div className='flex flex-col gap-3'>
                            <Link href='/'>
                                <div className='text-zinc-200 flex gap-2 items-center'>
                                    <FaChevronRight className='text-u-orange-500' />
                                    {t('nav-home')}
                                </div>
                            </Link>
                            <Link href='/'>
                                <div className='text-zinc-200 flex gap-2 items-center'>
                                    <FaChevronRight className='text-u-orange-500' />
                                    {t('nav-about')}
                                </div>
                            </Link>
                            <Link href='/'>
                                <div className='text-zinc-200 flex gap-2 items-center'>
                                    <FaChevronRight className='text-u-orange-500' />
                                    {t('nav-services')}
                                </div>
                            </Link>
                            <Link href='/'>
                                <div className='text-zinc-200 flex gap-2 items-center'>
                                    <FaChevronRight className='text-u-orange-500' />
                                    {t('nav-projects')}
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <div className='text-lg font-extrabold uppercase text-white'>
                            {t('contact-title')}
                        </div>
                        {/* button chat wa */}
                        <Link
                            href={t('contact-link')}
                            target='_blank'
                            className='bg-u-orange-500 text-white px-6 py-3 w-max hover:bg-u-orange-300 cursor-pointer'>
                            {t('contact-button')}
                        </Link>
                    </div>
                </div>

                <div className='flex justify-between items-center uppercase text-white font-semibold border-t-2 border-zinc-700 pt-5 pb-10 max-sm:flex-col'>
                    <div className='max-sm:text-center max-sm:mb-5'>
                        {t('footer-note')}
                    </div>

                    <div className='flex gap-10 max-sm:text-xs'>
                        <Link href='/'>
                            <div className='text-white'>
                                {t('privacy-policy')}
                            </div>
                        </Link>
                        <Link href='/'>
                            <div className='text-white'>
                                {t('terms-of-use')}
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
