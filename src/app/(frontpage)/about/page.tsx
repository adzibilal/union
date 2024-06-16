import SectionTitle from '@/components/molecules/SectionTitle'
import AboutSection from '@/components/organism/AboutSection'
import CTAWhatsApp from '@/components/organism/CTAWhatsApp'
import KeunggulanKamiSection from '@/components/organism/KeunggulanKami'
import OurTeam from '@/components/organism/OurTeam'
import PageHeader from '@/components/organism/PageHeader'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaCheckCircle } from 'react-icons/fa'

const AboutPage = () => {
    return (
        <div>
            <PageHeader
                title='About Us'
                subtitle='We are a creative agency that focus on delivering the best digital solution for our client.'
            />

            <div className='max-container py-32'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 items-center'>
                    <div className=''>
                        <Image
                            src='/assets/images/porto/3.png'
                            alt='about'
                            width={500}
                            height={600}
                            className='aspect-[4/5] w-full object-cover'
                        />
                    </div>
                    <div className=''>
                        <SectionTitle
                            subTitle='UNION CREATIVE DESIGN'
                            title='One-Stop Smart Living
                            Solution'
                        />
                        <div className=''>
                            Kami hadir untuk mewujudkan hunian impian Anda
                            menjadi kenyataan. Dengan pengalaman lebih dari 10
                            tahun, kami adalah solusi terdepan untuk desain
                            hunian terbaik.
                        </div>
                        <div className='mt-8'>
                            <Link
                                href={`/portofolio`}
                                className='bg-u-orange-500 text-white px-6 py-3 uppercase'>
                                PORTOFOLIO KAMI
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className='bg-u-orange-500 mb-20'>
                <div className='max-container py-16 flex flex-col items-end max-md:items-start'>
                    <div className='text-6xl font-bold text-white mb-3'>
                        Visi Kami
                    </div>
                    <div className='text-white text-xl'>
                        Menjadi perusahaan penyedia solusi hunian terdepan yang
                        menghadirkan desain bermakna, fungsional, dan estetis.
                    </div>
                </div>
                <div className='max-container py-16 flex flex-col items-start'>
                    <div className='text-6xl font-bold text-white mb-3'>
                        Misi Kami
                    </div>

                    <div className='flex flex-col items-start gap-3 mt-3'>
                        <div className='flex items-center justify-center gap-2 text-white text-xl'>
                            <FaCheckCircle />
                            <div className=''>
                                Memberikan layanan one-stop smart living
                                solution yang komprehensif dan berkualitas
                                tinggi.
                            </div>
                        </div>
                        <div className='flex items-center justify-center gap-2 text-white text-xl'>
                            <FaCheckCircle />
                            <div className=''>
                                Menciptakan hunian yang unik, personal, dan
                                mencerminkan kepribadian pemiliknya.
                            </div>
                        </div>
                        <div className='flex items-center justify-center gap-2 text-white text-xl'>
                            <FaCheckCircle />
                            <div className=''>
                                Menggunakan teknologi terkini dan material
                                berkualitas untuk hasil terbaik.
                            </div>
                        </div>
                        <div className='flex items-center justify-center gap-2 text-white text-xl'>
                            <FaCheckCircle />
                            <div className=''>
                                Membangun hubungan jangka panjang dengan klien
                                berdasarkan kepercayaan dan kepuasan.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <KeunggulanKamiSection />
            <br /><br /><br />
            <OurTeam />

            <CTAWhatsApp />
        </div>
    )
}

export default AboutPage
