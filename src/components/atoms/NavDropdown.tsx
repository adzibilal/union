'use client'
import Link from 'next/link'
import React from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { FaChevronDown } from 'react-icons/fa'

interface NavLinkProps {
    href: string
    label: string
}

interface NavDropdownProps {
    label: string
    submenu: NavLinkProps[]
}

const NavDropdown: React.FC<NavDropdownProps> = ({ label, submenu }) => {
    return (
        <div className='relative group cursor-pointer'>
            <div className='h-[70px] flex items-center justify-center px-4 uppercase font-semibold group-hover:bg-u-orange-500/95 group-hover:text-white'>
                {label}
                <FaChevronDown className='ml-2' />
            </div>
            <div className='absolute top-[70px] right-0 w-max bg-white hidden group-hover:flex flex-col shadow-md'>
                {submenu.map((child, index) => (
                    <Link
                        key={index}
                        href={child.href}
                        className='py-2 flex items-center justify-center px-6 uppercase font-semibold hover:bg-u-orange-500/95 hover:text-white'>
                        {child.label}
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default NavDropdown
