import Link from 'next/link'
import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'

const CTAHomePage = () => {
    return (
        <div className='bg-u-orange-500'>
            <div className='max-container flex flex-col items-center justify-center gap-3 text-center text-white py-10'>
                <div className='font-bold text-4xl'>
                    Jadikan Hunian Anda Lebih Bermakna Bersama Kami
                </div>
                <div className=' mb-5'>
                    Hubungi kami sekarang untuk konsultasi gratis dan wujudkan
                    hunian impian Anda bersama UNION CREATIVE DESIGN.
                </div>

                {/* CTA BUTTON WA */}

                <Link
                    href={`/contact`}
                    className='bg-green-600 hover:bg-green-700 flex items-center gap-3 text-white px-6 py-3 uppercase animate-bounce w-max'>
                    <FaWhatsapp />
                    HUBUNGI KAMI
                </Link>
            </div>
        </div>
    )
}

export default CTAHomePage
