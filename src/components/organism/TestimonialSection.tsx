'use client'
import React from 'react'
import SectionTitle from '../molecules/SectionTitle'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import { FaStar } from 'react-icons/fa'

const TestimonialSection = () => {
    const dataTestimonial = [
        {
            rating: 3,
            testi: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo molestias porro commodi a eveniet laudantium excepturi autem doloremque error libero ea et odio sit quam placeat ipsa sint, ipsum esse.',
            ava: '/assets/images/ava.png',
            name: 'John De',
            profession: 'Art Director'
        },
        {
            rating: 1,
            testi: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo molestias porro commodi a eveniet laudantium excepturi autem doloremque error libero ea et odio sit quam placeat ipsa sint, ipsum esse.',
            ava: '/assets/images/ava.png',
            name: 'John De',
            profession: 'Art Director'
        },
        {
            rating: 2,
            testi: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo molestias porro commodi a eveniet laudantium excepturi autem doloremque error libero ea et odio sit quam placeat ipsa sint, ipsum esse.',
            ava: '/assets/images/ava.png',
            name: 'John De',
            profession: 'Art Director'
        },
        {
            rating: 4,
            testi: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo molestias porro commodi a eveniet laudantium excepturi autem doloremque error libero ea et odio sit quam placeat ipsa sint, ipsum esse.',
            ava: '/assets/images/ava.png',
            name: 'John De',
            profession: 'Art Director'
        },
        {
            rating: 5,
            testi: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo molestias porro commodi a eveniet laudantium excepturi autem doloremque error libero ea et odio sit quam placeat ipsa sint, ipsum esse.',
            ava: '/assets/images/ava.png',
            name: 'John De',
            profession: 'Art Director'
        },
        {
            rating: 3,
            testi: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo molestias porro commodi a eveniet laudantium excepturi autem doloremque error libero ea et odio sit quam placeat ipsa sint, ipsum esse.',
            ava: '/assets/images/ava.png',
            name: 'John De',
            profession: 'Art Director'
        },
    ]

    return (
        <div className='max-container !mt-32 !mb-52'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 items-center'>
                <div className=''>
                    <SectionTitle
                        subTitle='Clients Feedback'
                        title='OUR TESTIMONIAL FROM BEST CLIENTS'
                    />
                    <div className='text-zinc-500 leading-relaxed'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nemo molestias porro commodi a eveniet laudantium
                        excepturi autem doloremque error libero ea et odio sit
                        quam placeat ipsa sint, ipsum esse.
                    </div>
                </div>
                <div className=''>
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
                        {dataTestimonial.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className='border border-zinc-300 p-4'>
                                    <div className='flex items-center gap-2 mb-3'>
                                        {item.rating && Array.from({ length: 5 }).map((_, index) => (
                                            <FaStar key={index} className={`text-u-orange-500 text-xl ${index < item.rating ? 'text-u-orange-500' : 'text-zinc-500'}`} />
                                        ))}
                                    </div>
                                    <div className='leading-relaxed text-zinc-500'>{item.testi}</div>
                                    <div className="flex gap-3 items-center mt-3">
                                        <div className="min-w-9 h-9 aspect-square rounded-full bg-zinc-300"></div>
                                        <div className="">
                                            <div className="font-extrabold text-lg uppercase">{item.name}</div>
                                            <div className="uppercase text-u-orange-500 text-sm">{item.profession}</div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default TestimonialSection
