'use client'
import { getCookie } from 'cookies-next'
import React, { useEffect, useState } from 'react'
import { FaChevronDown } from 'react-icons/fa'

interface FaqAccordionProps {
    faq: {
        question: {
            id: string
            en: string
        }
        answer: {
            id: string
            en: string
        }
    }
}

const FaqAccordion: React.FC<FaqAccordionProps> = ({ faq }) => {
    const [isOpen, setIsOpen] = React.useState(false)
    const [locale, setLocale] = useState<string>('')

    useEffect(() => {
        const fetchLocale = async () => {
            const localeFromCookie = getCookie('locale') as string
            setLocale(localeFromCookie || 'id')
        }
        fetchLocale()
    }, [])

    useEffect(() => {
        console.debug(locale, 'locale')
    }, [locale])

    return (
        <div className='mb-3'>
            <div
                onClick={() => setIsOpen(!isOpen)}
                className={`flex justify-between gap-10 items-center border-b p-2 cursor-pointer ${
                    isOpen ? 'bg-u-orange-500 text-white' : ''
                }`}>
                {locale === 'id' ? faq.question.id : faq.question.en}

                <FaChevronDown
                    className={`${isOpen ? 'transform rotate-180' : ''}`}
                />
            </div>
            <div
                className={`${
                    isOpen ? 'block' : 'hidden'
                } p-2 border border-t-0 text-sm text-justify text-zinc-600`}>
                {locale === 'id' ? faq.answer.id : faq.answer.en}
            </div>
        </div>
    )
}
export default FaqAccordion
