import Link from 'next/link'
import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'

const CTAWhatsApp = () => {
    return (
        <div className='bg-u-orange-500 py-10 my-20'>
            <div className='max-container'>
                <div className='grid grid-cols-2 gap-10 items-center max-md:flex max-md:flex-col'>
                    <div className='bg-white p-5 max-md:w-full max-md:flex max-md:flex-col max-md:justify-center max-md:items-center'>
                        <FaWhatsapp className='text-5xl text-u-orange-500' />
                        <div className='mt-2'>Contact Us Now</div>
                        <div className='text-3xl font-semibold mt-2'>
                            +62 812 3456 7890
                        </div>
                        <Link
                            href='https://wa.me/6281234567890'
                            className='bg-u-orange-500 text-white px-5 py-2 mt-5 inline-block'>
                            Chat Now
                        </Link>
                    </div>
                    <div className='text-5xl font-bold text-white text-center max-md:text-3xl'>
                        &ldquo;WORK HARD & GREAT QUALITY IS MY PRIORITY&rdquo;
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CTAWhatsApp
