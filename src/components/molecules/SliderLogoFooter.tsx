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
import Image from 'next/image'

const SliderLogoFooter = () => {
    const dataCarousel = [
        '/assets/images/logo/logo-1.svg',
        '/assets/images/logo/logo-2.svg',
        '/assets/images/logo/logo-3.svg',
        '/assets/images/logo/logo-4.svg',
        '/assets/images/logo/logo-5.svg',
    ]
    return (
        <Swiper
            spaceBetween={30}
            slidesPerView={4}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false
            }}
            pagination={{
                clickable: true
            }}
            loop={true}
            modules={[Autoplay]}
            className='mySwiper'>
            {dataCarousel.map((item, index) => (
                <SwiperSlide key={index} className='flex items-center justify-center'>
                    <Image 
                        src={item}
                        alt='logo'
                        width={150}
                        height={150}
                        className='aspect-video mx-auto'
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default SliderLogoFooter
