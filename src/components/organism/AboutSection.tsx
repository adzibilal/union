import React from 'react'
import SectionTitle from '../molecules/SectionTitle'
import { FaCheckCircle } from 'react-icons/fa'

const AboutSection = () => {
    return (
        <div className='max-container py-32'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 items-center'>
                <div className='bg-zinc-100 aspect-[4/5] w-full'>
                    {/* image place holder */}
                </div>
                <div className=''>
                    <SectionTitle
                        subTitle='WHO WE ARE'
                        title='WE ARE PERFECT TEAM FOR HOME INTERIOR DECORATION'
                    />

                    <div className='text-md text-zinc-500 text-justify mb-2 leading-relaxed mt-4'>
                        Welcome to UNION CREATIVE DESIGN, your trusted partner
                        in creating innovative and high-quality interior and
                        construction solutions. Located in the heart of Bandung,
                        West Java, with a branch office in Cimahi Selatan, we
                        are committed to enhancing your business environment
                        with professionalism and expertise.
                    </div>
                    <div className='grid grid-cols-2 gap-3 mt-8'>
                        {/* item checklist */}
                        <div className='flex items-center gap-3'>
                            <FaCheckCircle className='text-u-orange-500' />
                            <div className='text-zinc-500'>Integrity</div>
                        </div>
                        <div className='flex items-center gap-3'>
                            <FaCheckCircle className='text-u-orange-500' />
                            <div className='text-zinc-500'>Respect</div>
                        </div>
                        <div className='flex items-center gap-3'>
                            <FaCheckCircle className='text-u-orange-500' />
                            <div className='text-zinc-500'>Honesty</div>
                        </div>
                        <div className='flex items-center gap-3'>
                            <FaCheckCircle className='text-u-orange-500' />
                            <div className='text-zinc-500'>Creativity</div>
                        </div>
                    </div>

                    {/* statistic section */}
                    <div className='grid grid-cols-3 gap-3 mt-10'>
                        <div className='flex flex-col items-center justify-center gap-3'>
                            <div className='text-u-orange-500 text-5xl font-extrabold'>
                                15 Y
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
