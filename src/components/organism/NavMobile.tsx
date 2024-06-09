'use client'
import { redirect, useRouter } from 'next/navigation'
import React from 'react'
import { FaBars } from 'react-icons/fa'
import { FaX } from 'react-icons/fa6'

const NavMobile = () => {
    const [isOpen, setIsOpen] = React.useState(false)
    const router = useRouter()

    const toggleNav = () => {
        setIsOpen(!isOpen)
    }

    const handleItemClick = (path: string) => {
        console.log('path', path)
        setIsOpen(false)
        router.push(path)
    }

    return (
        <div className='lg:hidden'>
            <div className='cursor-pointer' onClick={toggleNav}>
                <FaBars className='text-2xl text-u-orange-500' />
            </div>
            <div
                className={`fixed w-full top-0 z-50 flex justify-end transition-all ease-in duration-300 ${
                    isOpen ? 'left-0' : 'left-[100%]'
                }`}
                // onclick stop propagation & toggle nav
                onClick={e => {
                    e.stopPropagation()
                    toggleNav()
                }}>
                <div
                    onClick={
                        // stop propagation
                        e => {
                            e.stopPropagation()
                        }
                    }
                    className='bg-white shadow-md h-screen w-[95vw] md:w-[80vw] p-3'>
                    <div className='flex justify-end'>
                        <FaX className='text-2xl text-u-orange-500' />
                    </div>
                    <div className='flex flex-col gap-3 items-center'>
                        <div
                            onClick={e => {
                                e.stopPropagation()
                                handleItemClick('/')
                            }}
                            className='bg-zinc-100 py-1 w-full rounded-sm text-center cursor-pointer hover:bg-u-orange-500 hover:text-white'>
                            Home
                        </div>
                        <div
                            onClick={e => {
                                e.stopPropagation()
                                handleItemClick('/about')
                            }}
                            className='bg-zinc-100 py-1 w-full rounded-sm text-center cursor-pointer hover:bg-u-orange-500 hover:text-white'>
                            About
                        </div>
                        <div
                            onClick={e => {
                                e.stopPropagation()
                                handleItemClick('/services')
                            }}
                            className='bg-zinc-100 py-1 w-full rounded-sm text-center cursor-pointer hover:bg-u-orange-500 hover:text-white'>
                            Services
                        </div>
                        <div
                            onClick={e => {
                                e.stopPropagation()
                                handleItemClick('/portofolio')
                            }}
                            className='bg-zinc-100 py-1 w-full rounded-sm text-center cursor-pointer hover:bg-u-orange-500 hover:text-white'>
                            Portofolio
                        </div>
                        <div
                            onClick={e => {
                                e.stopPropagation()
                                handleItemClick('/articles')
                            }}
                            className='bg-zinc-100 py-1 w-full rounded-sm text-center cursor-pointer hover:bg-u-orange-500 hover:text-white'>
                            Articles
                        </div>
                        <div
                            onClick={e => {
                                e.stopPropagation()
                                handleItemClick('/style-quiz')
                            }}
                            className='bg-zinc-100 py-1 w-full rounded-sm text-center cursor-pointer hover:bg-u-orange-500 hover:text-white'>
                            Style Quiz
                        </div>
                        <div
                            onClick={e => {
                                e.stopPropagation()
                                handleItemClick('/calculator')
                            }}
                            className='bg-zinc-100 py-1 w-full rounded-sm text-center cursor-pointer hover:bg-u-orange-500 hover:text-white'>
                            Calculator
                        </div>
                        <div
                            onClick={e => {
                                e.stopPropagation()
                                handleItemClick('/contact')
                            }}
                            className='bg-zinc-100 py-1 w-full rounded-sm text-center cursor-pointer hover:bg-u-orange-500 hover:text-white'>
                            Contact
                        </div>
                        <div
                            onClick={e => {
                                e.stopPropagation()
                                handleItemClick('/faq')
                            }}
                            className='bg-zinc-100 py-1 w-full rounded-sm text-center cursor-pointer hover:bg-u-orange-500 hover:text-white'>
                            FAQ
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavMobile
