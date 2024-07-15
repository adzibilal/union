import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'

const UnderConstruction = () => {
    return (
        <div className='w-screen h-screen flex items-center justify-center flex-col gap-5'>
            <Image
                src={'/assets/images/logo-main.png'}
                width={500}
                height={200}
                alt=''
                className='h-20 w-auto mx-auto mb-10'
            />
            <h1 className='text-u-orange-300 text-4xl font-bold'>Under Construction</h1>
            <p>This page is under construction. Please come back later.</p>
            {/* whatsapp button */}
            <Link
                className='bg-green-500 hover:bg-green-600 text-white flex items-center gap-3 px-3 py-2 rounded-md'
                href={`https://wa.me/62811233078?text=Halo%20Union%20Creative%20Design%2C%20saya%20ingin%20bertanya%20tentang%20produk%20dan%20layanan%20yang%20anda%20tawarkan`}
                target='_blank'>
                <FaWhatsapp className='' />
                <p>Contact Us</p>
            </Link>
        </div>
    )
}

export default UnderConstruction
