'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { BiHome } from 'react-icons/bi'

interface NavLinkProps {
    href: string
    label: string
    icon: React.ReactNode
}

const NavLink: React.FC<NavLinkProps> = ({ href, label, icon }) => {
    // check if href === current page
    const pathName = usePathname()
    const [isActive, setIsActive] = useState(false)
    // add active class

    useEffect(() => {
        setIsActive(pathName === href)
    }, [href, isActive, pathName])

    return (
        <Link href={href}>
            <div
                className={`flex gap-3 items-center px-3 py-2 rounded-lg hover:bg-u-orange-300 hover:text-white transition-all ease-in-out duration-150 font-semibold ${
                    isActive
                        ? 'bg-u-orange-500 text-white'
                        : 'bg-zinc-50 text-zinc-700'
                }`}>
                {icon}
                <div className=''>{label} </div>
            </div>
        </Link>
    )
}

export default NavLink
