import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import NavLink from '../atoms/NavLink'
import NavDropdown from '../atoms/NavDropdown'

const Navbar = () => {
    return (
        <div className='bg-white shadow-sm'>
            <div className='max-container flex justify-between items-center'>
                <Image
                    src={'/assets/images/horizontal-logo.png'}
                    alt='Logo'
                    width={200}
                    height={50}
                />

                <div className='h-full'>
                    {/* Navbar Links */}
                    <div className='flex h-full'>
                        {/* NavLink */}
                        <NavLink href='/' label='Home' />
                        <NavLink href='/about' label='About Us' />
                        <NavLink href='/services' label='Our Services' />
                        <NavLink href='/portofolio' label='Our Portofolio' />
                        <NavLink href='/articles' label='Article' />
                        <NavDropdown
                            label='Pages'
                            submenu={[
                                { href: '/style-quiz', label: 'Style Quiz' },
                                {
                                    href: '/calculator',
                                    label: 'Kalkulator Biaya'
                                },
                                { href: '/contact', label: 'Contact' },
                                { href: '/faq', label: 'FAQ' }
                            ]}
                        />
                    </div>

                    {/* Nav Mobile */}
                </div>
            </div>
        </div>
    )
}

export default Navbar
