'use client'
import PageHeader from '@/components/organism/PageHeader'
import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'

const ContactPage = () => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const data = {
            firstName: formData.get('firstName'),
            lastName: formData.get('lastName'),
            email: formData.get('email'),
            message: formData.get('message')
        }
        const messageToWhatsapp = `Hi, I am ${data.firstName} ${data.lastName}. ${data.message}. My email is ${data.email}`

        window.open(
            `https://wa.me/6281212345678?text=${messageToWhatsapp}`,
            '_blank'
        )
    }
    return (
        <div>
            <PageHeader title='Contact' subtitle='Get in touch with us.' />

            <div className='max-container'>
                {/* form input massage to whatsaap */}
                <form onSubmit={handleSubmit} method='get'>
                    <div className='grid grid-cols-1 gap-5 mt-10'>
                        <div className='grid grid-cols-2 gap-5 max-md:grid-cols-1'>
                            {/* firstname lastname */}
                            <input
                                type='text'
                                name='firstName'
                                placeholder='First Name'
                                required
                                className='w-full px-3 py-2 border border-zinc-300 focus:outline-none'
                            />
                            <input
                                type='text'
                                name='lastName'
                                placeholder='Last Name'
                                className='w-full px-3 py-2 border border-zinc-300 focus:outline-none'
                            />
                        </div>
                        {/* email */}
                        <input
                            type='email'
                            name='email'
                            placeholder='Email'
                            className='w-full px-3 py-2 border border-zinc-300 focus:outline-none'
                        />
                        <textarea
                            required
                            name='message'
                            placeholder='How can we help you?'
                            className='w-full px-3 py-2 border border-zinc-300 focus:outline-none h-[300px]'></textarea>
                        <button
                            type='submit'
                            className='w-full bg-green-500 text-white py-2 hover:bg-green-600 transition duration-200 flex gap-3 items-center justify-center'>
                            <FaWhatsapp />
                            WhatsApp Now
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
