'use client'
import { useTranslations } from 'next-intl'
import { redirect, useRouter } from 'next/navigation'
import React from 'react'
import { BiCross, BiXCircle } from 'react-icons/bi'
import { FaBars } from 'react-icons/fa'
import { FaX } from 'react-icons/fa6'

const NavMobile = () => {
    const [isOpen, setIsOpen] = React.useState(false)
    const router = useRouter()
    const t = useTranslations('Navbar')

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
                    className='bg-white shadow-md h-screen w-[95vw] md:w-[80vw] p-3 flex flex-col items-end'>
                    <div
                        className='flex justify-end bg-zinc-100 p-2 w-max mb-2 rounded-sm cursor-pointer hover:bg-u-orange-500 hover:text-white'
                        onClick={
                            // stop propagation
                            e => {
                                e.stopPropagation()
                                toggleNav()
                            }
                        }>
                        <BiXCircle className='text-2xl' />
                    </div>
                    <div className='flex flex-col gap-3 items-center w-full'>
                        <div
                            onClick={e => {
                                e.stopPropagation()
                                handleItemClick('/')
                            }}
                            className='bg-zinc-100 py-1 w-full rounded-sm text-center cursor-pointer hover:bg-u-orange-500 hover:text-white'>
                            {t('home')}
                        </div>
                        <div
                            onClick={e => {
                                e.stopPropagation()
                                handleItemClick('/about')
                            }}
                            className='bg-zinc-100 py-1 w-full rounded-sm text-center cursor-pointer hover:bg-u-orange-500 hover:text-white'>
                            {t('about')}
                        </div>
                        <div
                            onClick={e => {
                                e.stopPropagation()
                                handleItemClick('/services')
                            }}
                            className='bg-zinc-100 py-1 w-full rounded-sm text-center cursor-pointer hover:bg-u-orange-500 hover:text-white'>
                            {t('services')}
                        </div>
                        <div
                            onClick={e => {
                                e.stopPropagation()
                                handleItemClick('/portofolio')
                            }}
                            className='bg-zinc-100 py-1 w-full rounded-sm text-center cursor-pointer hover:bg-u-orange-500 hover:text-white'>
                            {t('portofolio')}
                        </div>
                        <div
                            onClick={e => {
                                e.stopPropagation()
                                handleItemClick('/articles')
                            }}
                            className='bg-zinc-100 py-1 w-full rounded-sm text-center cursor-pointer hover:bg-u-orange-500 hover:text-white'>
                            {t('articles')}
                        </div>
                        <div
                            onClick={e => {
                                e.stopPropagation()
                                handleItemClick('/style-quiz')
                            }}
                            className='bg-zinc-100 py-1 w-full rounded-sm text-center cursor-pointer hover:bg-u-orange-500 hover:text-white'>
                            {t('style-quiz')}
                        </div>
                        <div
                            onClick={e => {
                                e.stopPropagation()
                                handleItemClick('/calculator')
                            }}
                            className='bg-zinc-100 py-1 w-full rounded-sm text-center cursor-pointer hover:bg-u-orange-500 hover:text-white'>
                            {t('calculator')}
                        </div>
                        <div
                            onClick={e => {
                                e.stopPropagation()
                                handleItemClick('/contact')
                            }}
                            className='bg-zinc-100 py-1 w-full rounded-sm text-center cursor-pointer hover:bg-u-orange-500 hover:text-white'>
                            {t('contact')}
                        </div>
                        <div
                            onClick={e => {
                                e.stopPropagation()
                                handleItemClick('/faq')
                            }}
                            className='bg-zinc-100 py-1 w-full rounded-sm text-center cursor-pointer hover:bg-u-orange-500 hover:text-white'>
                            {t('faq')}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavMobile
