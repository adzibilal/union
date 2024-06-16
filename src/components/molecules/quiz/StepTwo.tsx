import Image from 'next/image'
import React, { useState } from 'react'
import { FaCheckCircle } from 'react-icons/fa'

const styles = [
    { id: 1, name: 'Netral', image: '/assets/images/quiz/modern-pallete.png' },
    { id: 2, name: 'Soft', image: '/assets/images/quiz/classic-pallete.png' },
    {
        id: 3,
        name: 'Warm',
        image: '/assets/images/quiz/scandinavian-pallete.png'
    },
    {
        id: 4,
        name: 'Vibrant',
        image: '/assets/images/quiz/vibrant-pallete.png'
    }
]

interface StepTwoProps {
    selectedStyle: number
    setSelectedStyle: (styleId: number) => void
    onNext: () => void
    onPrev: () => void
}

const StepTwo: React.FC<StepTwoProps> = ({
    selectedStyle,
    setSelectedStyle,
    onNext,
    onPrev
}) => {
    const [selected, setSelected] = useState<number>()

    const handleStyleClick = (styleId: number) => {
        setSelected(styleId)
    }

    return (
        <div className='px-5 py-3'>
            <div className='text-2xl font-bold mb-3'>
                Warna apa yang paling Anda sukai untuk dinding ruangan utama
                Anda?
            </div>
            <div className='grid grid-cols-2 gap-3'>
                {styles.map(style => (
                    <div
                        key={style.id}
                        className={`relative cursor-pointer border ${
                            selected === style.id
                                ? 'border-u-orange-500'
                                : 'border-transparent'
                        } hover:border-u-orange-500`}
                        onClick={() => handleStyleClick(style.id)}>
                        {selected === style.id && (
                            <FaCheckCircle className='absolute top-2 right-2 text-white shadow-md text-xl' />
                        )}
                        <div className='absolute bottom-0 left-0 bg-u-orange-500/50 text-white p-2'>
                            {style.name}
                        </div>
                        <Image
                            src={style.image}
                            alt={style.name}
                            className='w-full aspect-video'
                            width={500}
                            height={600}
                        />
                    </div>
                ))}
            </div>

            <div className='flex gap-3'>
                <div
                    onClick={() => {
                        onPrev()
                    }}
                    className='bg-u-orange-500 text-white px-6 py-3 uppercase mt-3 cursor-pointer hover:bg-u-orange-500/90'>
                    SEBELUMNYA
                </div>
                <div
                    onClick={() => {
                        onNext()
                    }}
                    className='bg-u-orange-500 text-white px-6 py-3 uppercase mt-3 cursor-pointer hover:bg-u-orange-500/90'>
                    SELANJUTNYA
                </div>
            </div>
        </div>
    )
}

export default StepTwo
