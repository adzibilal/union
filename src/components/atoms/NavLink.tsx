'use client'
import Link from 'next/link'
import React from 'react'
import { usePathname, useRouter } from 'next/navigation'

interface NavLinkProps {
    href: string
    label: string
}

const NavLink: React.FC<NavLinkProps> = ({ href, label }) => {
    const router = useRouter()
    const pathname = usePathname()
    const isActive = pathname === href

    return (
        <Link
            href={href}
            className={` h-[70px] flex items-center justify-center px-4 uppercase cursor-pointer font-semibold hover:bg-u-orange-500/95 hover:text-white ${
                isActive ? 'bg-u-orange-500 text-white' : ''
            }`}>
            {label}
        </Link>
    )
}

export default NavLink
