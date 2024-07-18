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
        '/assets/images/clients/1.png',
        '/assets/images/clients/2.png',
        '/assets/images/clients/3.png',
        '/assets/images/clients/4.png',
        '/assets/images/clients/5.png',
        '/assets/images/clients/6.png',
        '/assets/images/clients/7.png',
        '/assets/images/clients/8.png',
        '/assets/images/clients/9.png',
        '/assets/images/clients/10.png',
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
                        width={200}
                        height={200}
                        className='aspect-video mx-auto rounded-md shadow-md'
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default SliderLogoFooter
