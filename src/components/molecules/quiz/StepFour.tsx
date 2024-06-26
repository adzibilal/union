import { useTranslations } from 'next-intl'
import Image from 'next/image'
import React, { useState } from 'react'
import { FaCheckCircle } from 'react-icons/fa'

const styles = [
    { id: 1, name: 'Netral', image: '/assets/images/quiz/modern-light.png' },
    { id: 2, name: 'Soft', image: '/assets/images/quiz/clasic-light.png' },
    {
        id: 3,
        name: 'Warm',
        image: '/assets/images/quiz/scandinavian-light.png'
    },
    {
        id: 4,
        name: 'Vibrant',
        image: '/assets/images/quiz/industrial-light.png'
    }
]

interface StepFourProps {
    selectedStyle: number
    setSelectedStyle: (styleId: number) => void
    onNext: () => void
    onPrev: () => void
}

const StepFour: React.FC<StepFourProps> = ({
    selectedStyle,
    setSelectedStyle,
    onNext,
    onPrev
}) => {
    const [selected, setSelected] = useState<number | null>(
        selectedStyle || null
    )

    const handleStyleClick = (styleId: number) => {
        setSelected(styleId)
        setSelectedStyle(styleId)
    }

    const t = useTranslations('StyleQuiz')

    return (
        <div className='px-5 py-3'>
            <div className='text-2xl font-bold mb-3'>
                {t('questions.3')}
            </div>
            <div className='grid grid-cols-2 gap-3 max-md:grid-cols-1'>
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
                    {t('prev')}
                </div>
                <button
                    disabled={!selected}
                    onClick={() => {
                        onNext()
                    }}
                    className='bg-u-orange-500 text-white px-6 py-3 uppercase mt-3 cursor-pointer hover:bg-u-orange-500/90 disabled:opacity-50 disabled:cursor-not-allowed'>
                    {t('next')}
                </button>
            </div>
        </div>
    )
}

export default StepFour
