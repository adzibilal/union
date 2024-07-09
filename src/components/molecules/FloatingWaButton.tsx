import Link from 'next/link'
import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'

const FloatingWaButton = () => {
    return (
        <Link
            href={`https://wa.link/5tpxq0`}
            target='_blank'
            className='fixed bottom-5 right-5 z-50 text-white bg-green-500 hover:bg-green-600 cursor-pointer p-3 px-5 rounded-full flex items-center justify-between gap-3'>
            <FaWhatsapp className='text-3xl' />
            Konsultasi Sekarang
        </Link>
    )
}

export default FloatingWaButton
