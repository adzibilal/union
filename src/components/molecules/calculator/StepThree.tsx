'use client'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'

interface StepThreeProps {
    onNext: () => void
    onPrev: () => void
    selected: string
    onSelect: (selected: string) => void
}

const StepThree: React.FC<StepThreeProps> = ({
    onNext,
    onPrev,
    selected,
    onSelect
}) => {
    const budgetType = ['STANDARD', 'PREMIUM', 'LUXURY']
    const [selectedType, setSelectedType] = useState<string | null>(selected)

    useEffect(() => {
        setSelectedType(selected)
    }, [selected])

    const handleClick = (budgetType: string) => {
        setSelectedType(budgetType)
        onSelect(budgetType)
    }

    return (
        <div className='py-10'>
            <div className='text-3xl mb-8 text-center'>Pilih Budget Anda</div>

            <fieldset className='grid grid-cols-2 max-md:grid-cols-1 gap-4'>
                <legend className='sr-only'>Budget Type</legend>

                {budgetType.map((budget, index) => (
                    <div key={index}>
                        <label
                            htmlFor={budget}
                            className='flex cursor-pointer justify-between gap-4 overflow-hidden relative rounded-lg border border-gray-100 bg-white text-sm font-medium shadow-sm hover:border-gray-200 has-[:checked]:border-u-orange-500 has-[:checked]:ring-1 has-[:checked]:ring-u-orange-500'>
                            <div className='relative w-full'>
                                <Image
                                    src={`/assets/images/calc/${budget.toLowerCase()}.png`}
                                    alt={budget}
                                    width={500}
                                    height={100}
                                    className='w-full'
                                />
                                <p className='absolute bg-u-orange-500 text-white uppercase px-4 py-2 bottom-0 left-0'>{budget}</p>
                            </div>

                            <input
                                type='radio'
                                name='budget'
                                value={budget}
                                id={budget}
                                className='size-5 border-gray-300 text-u-orange-500 absolute top-3 right-3'
                                checked={selectedType === budget}
                                onChange={() => handleClick(budget)}
                            />
                        </label>
                    </div>
                ))}
            </fieldset>

            <div className='flex gap-3 mt-10 justify-center'>
                <button
                    onClick={onPrev}
                    className='bg-u-orange-500 text-white px-6 py-3 uppercase mt-3 cursor-pointer hover:bg-u-orange-500/90'>
                    SEBELUMNYA
                </button>
                <button
                    disabled={!selectedType}
                    onClick={onNext}
                    className='bg-u-orange-500 text-white px-6 py-3 uppercase mt-3 cursor-pointer hover:bg-u-orange-500/90 disabled:opacity-50 disabled:cursor-not-allowed'>
                    SELANJUTNYA
                </button>
            </div>
        </div>
    )
}

export default StepThree
