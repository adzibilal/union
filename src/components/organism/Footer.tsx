import Link from 'next/link'
import React from 'react'
import {
    FaChevronRight,
    FaFacebook,
    FaInstagram,
    FaLinkedinIn,
    FaTwitter
} from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='bg-zinc-900 mt-36'>
            <div className='max-container pt-6'>
                <div className='bg-u-orange-500 p-6 -mt-20'>
                    <div className='bg-zinc-200 -mt-16 flex justify-around items-center py-5'>
                        <div className='bg-zinc-400 py-6 px-8'>LOGO</div>
                        <div className='bg-zinc-400 py-6 px-8'>LOGO</div>
                        <div className='bg-zinc-400 py-6 px-8'>LOGO</div>
                        <div className='bg-zinc-400 py-6 px-8'>LOGO</div>
                        <div className='bg-zinc-400 py-6 px-8'>LOGO</div>
                        <div className='bg-zinc-400 py-6 px-8'>LOGO</div>
                        <div className='bg-zinc-400 py-6 px-8'>LOGO</div>
                    </div>
                    <div className='text-white font-extrabold uppercase text-5xl my-5'>
                        LETS CHANGE YOUR OWN HOME INTERIOR DESIGN NOW
                    </div>
                    <div className='bg-zinc-900 text-white px-6 py-3 w-max hover:bg-zinc-700 cursor-pointer'>
                        CONTACT US
                    </div>
                </div>

                <div className='grid grid-cols-[2fr_1fr_1fr] pt-16 pb-8'>
                    <div className='flex flex-col gap-3'>
                        <div className='text-lg font-extrabold uppercase text-white'>
                            Information
                        </div>
                        <div className='text-zinc-200'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Ut elit tellus, luctus nec ullamcorper mattis,
                            pulvinar dapibus leo.
                        </div>
                        <div className='flex gap-3'>
                            <Link href='/'>
                                <FaFacebook
                                    size={22}
                                    className='text-u-orange-500'
                                />
                            </Link>
                            <Link href='/'>
                                <FaTwitter
                                    size={22}
                                    className='text-u-orange-500'
                                />
                            </Link>
                            <Link href='/'>
                                <FaInstagram
                                    size={22}
                                    className='text-u-orange-500'
                                />
                            </Link>
                            <Link href='/'>
                                <FaLinkedinIn
                                    size={22}
                                    className='text-u-orange-500'
                                />
                            </Link>
                        </div>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <div className='text-lg font-extrabold uppercase text-white'>
                            NAVIGATION
                        </div>
                        <div className='flex flex-col gap-3'>
                            <Link href='/'>
                                <div className='text-zinc-200 flex gap-2 items-center'>
                                    <FaChevronRight className='text-u-orange-500' />
                                    Home
                                </div>
                            </Link>
                            <Link href='/'>
                                <div className='text-zinc-200 flex gap-2 items-center'>
                                    <FaChevronRight className='text-u-orange-500' />
                                    About
                                </div>
                            </Link>
                            <Link href='/'>
                                <div className='text-zinc-200 flex gap-2 items-center'>
                                    <FaChevronRight className='text-u-orange-500' />
                                    Services
                                </div>
                            </Link>
                            <Link href='/'>
                                <div className='text-zinc-200 flex gap-2 items-center'>
                                    <FaChevronRight className='text-u-orange-500' />
                                    Projects
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <div className='text-lg font-extrabold uppercase text-white'>
                            CONTACT US
                        </div>
                    </div>
                </div>

                <div className="flex justify-between items-center uppercase text-white font-semibold border-t-2 border-zinc-700 pt-5 pb-10">
                    <div className="">Allright Reserved - UNION CREATIVE DESIGN &copy; 2024</div>

                    <div className="flex gap-10">
                        <Link href="/">
                            <div className="text-white">Privacy Policy</div>
                        </Link>
                        <Link href="/">
                            <div className="text-white">Term Of Use</div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
