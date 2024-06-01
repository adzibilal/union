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

const CarouselHero = () => {
    const dataCarousel = [
        {
            src: '/assets/images/sliders/1.jpg',
            title: 'Welcome to Our Website',
            subTitle: 'We are here to help you',
            button: 'Get Started',
            linkButton: '/contact'
        },
        {
            src: '/assets/images/sliders/2.jpg',
            title: 'We are the best in the business',
            subTitle: 'We provide the best service for you',
            button: 'Contact Us',
            linkButton: '/contact'
        },
        {
            src: '/assets/images/sliders/3.jpg',
            title: 'We are the best in the business',
            subTitle: 'We provide the best service for you',
            button: 'Contact Us',
            linkButton: '/contact'
        },
        {
            src: '/assets/images/sliders/4.jpg',
            title: 'We are the best in the business',
            subTitle: 'We provide the best service for you',
            button: 'Contact Us',
            linkButton: '/contact'
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
