import React from 'react'
import SectionTitle from '../molecules/SectionTitle'
import { FaMessage } from 'react-icons/fa6'
import { FaHome, FaLaptop, FaRuler, FaSchool, FaUsers } from 'react-icons/fa'

const KeunggulanKamiSection = () => {
    return (
        <div className='max-container'>
            <SectionTitle
                subTitle='Keunggulan Kami'
                title='Mengapa Memilih Kami?'
            />

            <div className='grid gap-4 grid-cols-1 lg:grid-cols-4 mt-16'>
                <div className='border-2 p-6 flex flex-col gap-4'>
                    <FaUsers className='text-5xl text-u-orange-500' />
                    <div className='text-3xl uppercase font-extrabold'>
                        Tim Profesional
                    </div>
                    <div className='text-sm text-zinc-600 leading-relaxed'>
                        Didukung oleh tim arsitek, desainer interior, ahli
                        konstruksi, dan dekorator yang berpengalaman dan
                        berdedikasi.
                    </div>
                </div>
                <div className='border-2 border-u-orange-500 p-6 flex flex-col gap-4 text-white bg-u-orange-500'>
                    <FaLaptop className='text-5xl' />
                    <div className='text-3xl uppercase font-extrabold'>
                        Teknologi Canggih
                    </div>
                    <div className='text-sm leading-relaxed'>
                        Menggunakan mesin-mesin canggih berteknologi tinggi
                        untuk menghasilkan produk berkualitas tinggi.
                    </div>
                </div>
                <div className='border-2 p-6 flex flex-col gap-4'>
                    <FaHome className='text-5xl text-u-orange-500' />
                    <div className='text-3xl uppercase font-extrabold'>
                        Workshop Terpadu
                    </div>
                    <div className='text-sm text-zinc-600 leading-relaxed'>
                        Memiliki fasilitas kantor dan workshop terpadu di
                        Bandung Barat untuk efisiensi dan kualitas produksi.
                    </div>
                </div>
                <div className='border-2 border-u-orange-500 p-6 flex flex-col gap-4 text-white bg-u-orange-500'>
                    <FaSchool className='text-5xl' />
                    <div className='text-3xl uppercase font-extrabold'>
                        Portofolio Kuat
                    </div>
                    <div className='text-sm text-white leading-relaxed'>
                        Telah menyelesaikan berbagai proyek hunian dengan hasil
                        yang memuaskan.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default KeunggulanKamiSection
