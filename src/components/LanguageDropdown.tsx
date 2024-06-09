'use client'
import React from 'react'
import { setCookie, getCookie } from 'cookies-next'
import { useRouter, usePathname } from 'next/navigation'
import '/node_modules/flag-icons/css/flag-icons.min.css'

const LanguageDropdown = () => {
    const router = useRouter()
    // Get the current locale from the cookie
    const locale = getCookie('locale')

    const changeLanguage = (locale: string) => {
        setCookie('locale', locale)
        router.refresh()
    }

    return (
        <div className='relative group'>
            <div className=''>
                {locale === 'id' ? (
                    <span className='fi fi-id border'></span>
                ) : (
                    <span className='fi fi-gb'></span>
                )}
            </div>
            <div className='absolute top-[100%] bg-zinc-50 right-0 hidden group-hover:flex flex-col z-50 shadow-md'>
                <button className='flex gap-3 items-center px-3 py-1 hover:bg-zinc-100' onClick={() => changeLanguage('id')}>
                    <span className='fi fi-id'></span>{' '}
                    <div className=''>Indonesia</div>
                </button>
                <button className='flex gap-3 items-center px-3 py-1 hover:bg-zinc-100' onClick={() => changeLanguage('en')}>
                    <span className='fi fi-gb'></span>
                    <div className=''>English</div>
                </button>
            </div>
        </div>
    )
}

export default LanguageDropdown
