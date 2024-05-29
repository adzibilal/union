"use client"
import React from 'react'
import { setCookie } from 'cookies-next'
import { useRouter, usePathname } from 'next/navigation'

const LanguageDropdown = () => {
    const router = useRouter()

    const changeLanguage = (locale: string) => {
        setCookie('locale', locale)
        router.refresh()
    }

    return (
        <div className='flex gap-3'>
            <button onClick={() => changeLanguage('id')}>ID</button>
            <div className="">|</div>
            <button onClick={() => changeLanguage('en')}>EN</button>
        </div>
    )
}

export default LanguageDropdown
