import React from 'react'
import SectionTitle from '../molecules/SectionTitle'
import { FaCheckCircle } from 'react-icons/fa'
import Image from 'next/image'

const AboutSection = () => {
    return (
        <div className='max-container py-32'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 items-center'>
                <Image
                    src='/assets/images/porto/1.png'
                    alt='about'
                    width={500}
                    height={600}
                    className='aspect-[4/5] w-full object-cover'
                />
                <div className=''>
                    <SectionTitle
                        subTitle='Selamat Datang di'
                        title='UNION CREATIVE DESIGN'
                    />

                    <div className='text-md text-zinc-500 text-justify mb-2 leading-relaxed mt-4'>
                        Kami hadir untuk mewujudkan hunian impian Anda menjadi
                        kenyataan. Dengan pengalaman lebih dari 10 tahun, kami
                        adalah solusi terdepan untuk desain hunian terbaik.
                    </div>
                    <div className='grid grid-cols-1 gap-3 mt-8'>
                        {/* item checklist */}
                        <div className='flex items-center gap-3'>
                            <FaCheckCircle className='text-u-orange-500' />
                            <div className='text-zinc-500'>Furnitur Custom Berteknologi Tinggi</div>
                        </div>
                        <div className='flex items-center gap-3'>
                            <FaCheckCircle className='text-u-orange-500' />
                            <div className='text-zinc-500'>Desain Arsitektur & Interior yang Profesional</div>
                        </div>
                        <div className='flex items-center gap-3'>
                            <FaCheckCircle className='text-u-orange-500' />
                            <div className='text-zinc-500'>Konstruksi & Renovasi Berkualitas</div>
                        </div>
                        <div className='flex items-center gap-3'>
                            <FaCheckCircle className='text-u-orange-500' />
                            <div className='text-zinc-500'>Ahli Dekorasi dengan Sentuhan Estetika</div>
                        </div>
                    </div>

                    {/* statistic section */}
                    <div className='grid grid-cols-3 gap-3 mt-10'>
                        <div className='flex flex-col items-center justify-center gap-3'>
                            <div className='text-u-orange-500 text-5xl font-extrabold'>
                                10 Y+
                            </div>
                            <div className='uppercase text-zinc-600'>
                                Experience
                            </div>
                        </div>
                        <div className='flex flex-col items-center justify-center gap-3'>
                            <div className='text-u-orange-500 text-5xl font-extrabold'>
                                100+
                            </div>
                            <div className='uppercase text-zinc-600'>
                                Projects
                            </div>
                        </div>
                        <div className='flex flex-col items-center justify-center gap-3'>
                            <div className='text-u-orange-500 text-5xl font-extrabold'>
                                50+
                            </div>
                            <div className='uppercase text-zinc-600'>
                                Clients
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutSection
