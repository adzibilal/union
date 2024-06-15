import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

const InfoBox = () => {
    return (
        <div className='max-container'>
            <div className='grid grid-cols-1 md:grid-cols-3'>
                <div className='p-7 bg-zinc-900 text-white flex flex-col gap-4'>
                    <div className='text-3xl font-extrabold'>
                        KONSULTASI DESAIN RUMAH
                    </div>
                    <div className='text-sm font-light leading-loose'>
                        Wujudkan hunian impian Anda bersama tim ahli kami.
                        Dapatkan solusi desain yang personal dan sesuai dengan
                        kebutuhan serta gaya hidup Anda.
                    </div>
                    <FaArrowRight size={25} />
                </div>
                <div className='p-7 bg-u-orange-500 text-white flex flex-col gap-4'>
                    <div className='text-3xl font-extrabold'>
                        DESAIN INTERIOR RUANGAN 3D & 2D
                    </div>
                    <div className='text-sm font-light leading-loose'>
                        Visualisasikan hunian impian Anda dengan desain 3D & 2D
                        yang detail dan realistis. Rasakan pengalaman
                        menjelajahi rumah Anda sebelum dibangun.
                    </div>
                    <FaArrowRight size={25} />
                </div>
                <div className='p-7 bg-zinc-900 text-white flex flex-col gap-4'>
                    <div className='text-3xl font-extrabold'>
                        FURNITUR INTERIOR CUSTOM
                    </div>
                    <div className='text-sm font-light leading-loose'>
                        Lengkapi hunian Anda dengan furnitur custom berkualitas
                        tinggi yang dirancang khusus untuk memaksimalkan fungsi
                        dan estetika ruang.
                    </div>
                    <FaArrowRight size={25} />
                </div>
            </div>
        </div>
    )
}

export default InfoBox
