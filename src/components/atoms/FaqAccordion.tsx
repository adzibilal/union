'use client'
import React from 'react'
import { FaChevronDown } from 'react-icons/fa'

interface FaqAccordionProps {
    faq: {
        question: string
        answer: string
    }
}

const FaqAccordion: React.FC<FaqAccordionProps> = ({ faq }) => {
    const [isOpen, setIsOpen] = React.useState(false)
    return (
        <div className='mb-3'>
            <div onClick={() => setIsOpen(!isOpen)} className={`flex justify-between gap-10 items-center border-b p-2 cursor-pointer ${isOpen ? 'bg-u-orange-500 text-white' : ''}`}>
                {faq.question}

                <FaChevronDown
                    className={`${isOpen ? 'transform rotate-180' : ''}`}
                />
            </div>
            <div className={`${isOpen ? 'block' : 'hidden'} p-2 border border-t-0 text-sm text-justify text-zinc-600`}>{faq.answer}</div>
        </div>
    )
}
export default FaqAccordion
