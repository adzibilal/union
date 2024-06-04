import NavLink from '@/components/atoms/admin/NavLink'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BiHome, BiNews, BiPhotoAlbum, BiUser } from 'react-icons/bi'
const SideBar = () => {
    return (
        <div className='w-full h-full bg-white border-r py-5'>
            <Image
                src={'/assets/images/logo-main.png'}
                width={500}
                height={200}
                alt=''
                className='h-auto w-[50%] mx-auto mt-5'
            />

            <div className='p-5 flex flex-col gap-2 mt-10'>
                <NavLink
                    href='/admin/dashboard'
                    label='Dashboard'
                    icon={<BiHome />}
                />
                <NavLink
                    href='/admin/portofolio'
                    label='Portofolio'
                    icon={<BiPhotoAlbum />}
                />
                <NavLink
                    href='/admin/article'
                    label='Article'
                    icon={<BiNews />}
                />
                <NavLink href='/admin/users' label='Users' icon={<BiUser />} />
            </div>
        </div>
    )
}

export default SideBar
