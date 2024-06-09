import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import NavLink from '../atoms/NavLink'
import NavDropdown from '../atoms/NavDropdown'
import LanguageDropdown from '../LanguageDropdown'
import NavMobile from './NavMobile'
import { useTranslations } from 'next-intl'

const Navbar = () => {
    const t = useTranslations('Navbar')

    return (
        <div className='bg-white shadow-sm'>
            <div className='max-container flex justify-between items-center'>
                <div className='py-3'>
                    <Link href='/'>
                        <Image
                            src={'/assets/images/logo-main.png'}
                            alt='Logo'
                            width={150}
                            height={50}
                        />
                    </Link>
                </div>

                <div className='h-full flex gap-3 items-center'>
                    {/* Navbar Links */}
                    <div className='h-full hidden lg:flex'>
                        {/* NavLink */}
                        <NavLink href='/' label={t('home')} />
                        <NavLink href='/about' label={t('about')} />
                        <NavLink href='/services' label={t('services')} />
                        <NavLink href='/portofolio' label={t('portofolio')} />
                        <NavLink href='/articles' label={t('articles')} />
                        <NavDropdown
                            label={t('pages')}
                            submenu={[
                                { href: '/style-quiz', label: t('style-quiz') },
                                {
                                    href: '/calculator',
                                    label: t('calculator')
                                },
                                { href: '/contact', label: t('contact') },
                                { href: '/faq', label: t('faq') }
                            ]}
                        />
                    </div>
                    <LanguageDropdown />
                    {/* Nav Mobile */}
                    <NavMobile />
                </div>
            </div>
        </div>
    )
}

export default Navbar
