'use client'
import PageHeader from '@/components/organism/PageHeader'
import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import { useTranslations } from 'next-intl'

const ContactPage = () => {
    const t = useTranslations('ContactPage');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const data = {
            firstName: formData.get('firstName') as string,
            lastName: formData.get('lastName') as string,
            email: formData.get('email') as string,
            message: formData.get('message') as string
        }
        const messageToWhatsapp = t('whatsappMessage', {
            firstName: data.firstName || '',
            lastName: data.lastName || '',
            message: data.message || '',
            email: data.email || ''
        });

        window.open(
            `https://wa.me/62811233078?text=${encodeURIComponent(messageToWhatsapp)}`,
            '_blank'
        )
    }

    return (
        <div>
            <PageHeader title={t('title')} subtitle={t('subtitle')} />

            <div className='max-container'>
                {/* form input message to whatsapp */}
                <form onSubmit={handleSubmit} method='get'>
                    <div className='grid grid-cols-1 gap-5 mt-10'>
                        <div className='grid grid-cols-2 gap-5 max-md:grid-cols-1'>
                            {/* firstname lastname */}
                            <input
                                type='text'
                                name='firstName'
                                placeholder={t('form.firstNamePlaceholder')}
                                required
                                className='w-full px-3 py-2 border border-zinc-300 focus:outline-none'
                            />
                            <input
                                type='text'
                                name='lastName'
                                placeholder={t('form.lastNamePlaceholder')}
                                className='w-full px-3 py-2 border border-zinc-300 focus:outline-none'
                            />
                        </div>
                        {/* email */}
                        <input
                            type='email'
                            name='email'
                            placeholder={t('form.emailPlaceholder')}
                            className='w-full px-3 py-2 border border-zinc-300 focus:outline-none'
                        />
                        <textarea
                            required
                            name='message'
                            placeholder={t('form.messagePlaceholder')}
                            className='w-full px-3 py-2 border border-zinc-300 focus:outline-none h-[300px]'></textarea>
                        <button
                            type='submit'
                            className='w-full bg-green-500 text-white py-2 hover:bg-green-600 transition duration-200 flex gap-3 items-center justify-center'>
                            <FaWhatsapp />
                            {t('form.submitButton')}
                        </button>
                    </div>
                </form>
            </div>

            <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.2002462822243!2d107.51866509999999!3d-6.8665914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e5ba6bfe928d%3A0xb4dd82264ab08a9f!2sCV.%20UNION%20CREATIVE%20DESIGN!5e0!3m2!1sid!2sid!4v1718334269121!5m2!1sid!2sid'
                className='w-full h-[500px] mt-20'
                loading='lazy'></iframe>
        </div>
    )
}

export default ContactPage
