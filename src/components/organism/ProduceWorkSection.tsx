import React from 'react'
import SectionTitle from '../molecules/SectionTitle'
import { FaMessage } from 'react-icons/fa6'
import { FaHome, FaRuler } from 'react-icons/fa'

const ProduceWorkSection = () => {
    return (
        <div className='max-container'>
            <SectionTitle
                subTitle='Cara Kami Bekerja'
                title='PROSEDUR KERJA KAMI'
            />

            <div className='grid gap-4 grid-cols-1 lg:grid-cols-3 mt-16'>
                <div className='border-2 p-6 flex flex-col gap-4'>
                    <FaMessage className='text-5xl text-u-orange-500' />
                    <div className='text-3xl uppercase font-extrabold'>
                        KONSULTASI DESAIN DENGAN KLIEN
                    </div>
                    <div className='text-sm text-zinc-600 leading-relaxed'>
                        Kami memulai dengan memahami kebutuhan dan visi desain
                        Anda melalui konsultasi mendalam.
                    </div>
                </div>
                <div className='border-2 border-u-orange-500 p-6 flex flex-col gap-4 text-white bg-u-orange-500'>
                    <FaRuler className='text-5xl' />
                    <div className='text-3xl uppercase font-extrabold'>
                        PEMBUATAN PROTOTYPE DESAIN RUMAH
                    </div>
                    <div className='text-sm leading-relaxed'>
                        Kami mengembangkan prototype desain awal berdasarkan
                        hasil konsultasi, memberikan gambaran visual tentang
                        konsep rumah Anda.
                    </div>
                </div>
                <div className='border-2 p-6 flex flex-col gap-4'>
                    <FaHome className='text-5xl text-u-orange-500' />
                    <div className='text-3xl uppercase font-extrabold'>
                        PENGEMBANGAN DESAIN RUMAH
                    </div>
                    <div className='text-sm text-zinc-600 leading-relaxed'>
                        Prototype desain disempurnakan dengan detail yang lebih
                        spesifik, memastikan desain akhir sesuai dengan harapan
                        dan kebutuhan Anda.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProduceWorkSection
