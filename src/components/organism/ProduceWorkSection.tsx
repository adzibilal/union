import React from 'react'
import SectionTitle from '../molecules/SectionTitle'
import { FaMessage } from 'react-icons/fa6'
import { FaHome, FaRuler } from 'react-icons/fa'

const ProduceWorkSection = () => {
    return (
        <div className='max-container'>
            <SectionTitle subTitle='How We Work' title='OUR WORK PROCEDURE' />

            <div className='grid gap-4 grid-cols-1 lg:grid-cols-3 mt-16'>
                <div className='border-2 p-6 flex flex-col gap-4'>
                    <FaMessage className='text-5xl text-u-orange-500' />
                    <div className='text-3xl uppercase font-extrabold'>
                        CLIENT DESIGN CONSULTATION
                    </div>
                    <div className='text-sm text-zinc-600 leading-relaxed'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Debitis, eius id corrupti doloremque nostrum et
                        consequatur repellat sequi sed perferendis temporibus
                        similique quis atque eligendi laborum explicabo
                        accusantium dolore enim!
                    </div>
                </div>
                <div className='border-2 border-u-orange-500 p-6 flex flex-col gap-4 text-white bg-u-orange-500'>
                    <FaRuler className='text-5xl ' />
                    <div className='text-3xl uppercase font-extrabold'>
                        PROTOTYPING HOME DESIGN
                    </div>
                    <div className='text-sm leading-relaxed'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Debitis, eius id corrupti doloremque nostrum et
                        consequatur repellat sequi sed perferendis temporibus
                        similique quis atque eligendi laborum explicabo
                        accusantium dolore enim!
                    </div>
                </div>
                <div className='border-2 p-6 flex flex-col gap-4'>
                    <FaHome className='text-5xl text-u-orange-500' />
                    <div className='text-3xl uppercase font-extrabold'>
                        PROCESSING TO DESIGN HOME
                    </div>
                    <div className='text-sm text-zinc-600 leading-relaxed'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Debitis, eius id corrupti doloremque nostrum et
                        consequatur repellat sequi sed perferendis temporibus
                        similique quis atque eligendi laborum explicabo
                        accusantium dolore enim!
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProduceWorkSection
