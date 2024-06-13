'use client'
import React, { useEffect, useState } from 'react'
import { setCookie, getCookie } from 'cookies-next'
import { useRouter, usePathname } from 'next/navigation'
import '/node_modules/flag-icons/css/flag-icons.min.css'

const LanguageDropdown = () => {
    const router = useRouter()
    const [locale, setLocale] = useState('')

    const fetchLocale = async () => {
        const localeFromCookie = await getCookie('locale')
        setLocale(localeFromCookie || 'id')
    }
    
    useEffect(() => {
        fetchLocale()
    }, [])

    const changeLanguage = async (localeValue: string): Promise<void> => {
        await setCookie('locale', localeValue)
        fetchLocale()
        router.refresh()
    }

    return (
        <div className='relative group'>
            <div>
                {locale === 'id' ? (
                    <span className='fi fi-id border'></span>
                ) : (
                    <span className='fi fi-gb'></span>
                )}
            </div>
            <div className='absolute top-[100%] bg-zinc-50 right-0 hidden group-hover:flex flex-col z-50 shadow-md'>
                <button
                    className='flex gap-3 items-center px-3 py-1 hover:bg-zinc-100'
                    onClick={() => changeLanguage('id')}>
                    <span className='fi fi-id'></span> <div>Indonesia</div>
                </button>
                <button
                    className='flex gap-3 items-center px-3 py-1 hover:bg-zinc-100'
                    onClick={() => changeLanguage('en')}>
                    <span className='fi fi-gb'></span>
                    <div>English</div>
                </button>
            </div>
        </div>
    )
}

export default LanguageDropdown
