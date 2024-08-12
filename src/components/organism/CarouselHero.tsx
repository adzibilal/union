'use client'
import React, { useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import required modules
import { Autoplay } from 'swiper/modules'
import CarouselItem from '../molecules/CarouselItem'
import { useTranslations } from 'next-intl'
import { FaWhatsapp } from 'react-icons/fa'
import Link from 'next/link'

const CarouselHero = () => {
    const t = useTranslations('Sliders')
    const dataCarousel = [
        {
            src: '/assets/images/sliders/hero-1.png',
            title: t('items.0.title'),
            subTitle: t('items.0.subTitle'),
            button: t('items.0.button'),
            linkButton: '/services'
        },
        {
            src: '/assets/images/sliders/banner1.jpg',
            title: t('items.1.title'),
            subTitle: t('items.1.subTitle'),
            button: t('items.1.button'),
            linkButton: '/portfolio'
        },
        {
            src: '/assets/images/sliders/hero-3.png',
            title: t('items.2.title'),
            subTitle: t('items.2.subTitle'),
            button: t('items.2.button'),
            linkButton: '/contact'
        },
        {
            src: '/assets/images/sliders/hero-4.png',
            title: t('items.3.title'),
            subTitle: t('items.3.subTitle'),
            button: t('items.3.button'),
            linkButton: '/projects'
        }
    ]

    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false
                }}
                pagination={{
                    clickable: true
                }}
                modules={[Autoplay]}
                className='mySwiper'>
                {dataCarousel.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className='flex items-center justify-center gap-3 p-2 bg-green-500 text-white'>
                            <Link
                                href={
                                    'https://api.whatsapp.com/send?phone=628112434411&text=Halo%20saya%20ingin%20bertanya%20tentang%20layanan%20yang%20anda%20tawarkan'
                                }
                                target='_blank'
                                className='flex gap-3 items-center cursor-pointer'>
                                <FaWhatsapp />
                                0811-2434-411
                            </Link>
                            <Link
                                href={
                                    'https://api.whatsapp.com/send?phone=62811233078&text=Halo%20saya%20ingin%20bertanya%20tentang%20layanan%20yang%20anda%20tawarkan'
                                }
                                target='_blank'
                                className='flex gap-3 items-center cursor-pointer'>
                                <FaWhatsapp />
                                0811-233-078
                            </Link>
                        </div>
                        <CarouselItem
                            src={item.src}
                            title={item.title}
                            subTitle={item.subTitle}
                            button={item.button}
                            linkButton={item.linkButton}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    )
}

export default CarouselHero
