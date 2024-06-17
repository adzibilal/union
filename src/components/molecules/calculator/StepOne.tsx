'use client'
import React, { useState, useEffect } from 'react'

interface StepOneProps {
    onNext: () => void
    onPrev: () => void
    selected: string
    onSelect: (selected: string) => void
}

const StepOne: React.FC<StepOneProps> = ({
    onNext,
    onPrev,
    selected,
    onSelect
}) => {
    const roomType = [
        '1 Bedroom',
        '2 Bedroom SMALL',
        '2 Bedroom LARGE',
        '3 Bedroom SMALL',
        '3 Bedroom LARGE',
        '4 Bedroom SMALL',
        '4 Bedroom LARGE',
        '5 Bedroom ++'
    ]
    const [selectedType, setSelectedType] = useState<string | null>(selected)

    useEffect(() => {
        setSelectedType(selected)
    }, [selected])

    const handleClick = (roomType: string) => {
        setSelectedType(roomType)
        onSelect(roomType)
    }

    return (
        <div className='py-10'>
            <div className='text-3xl mb-8 text-center'>
                Masukan Jumlah Ruangan
            </div>

            <fieldset className='grid grid-cols-2 max-md:grid-cols-1 gap-4'>
                <legend className='sr-only'>Room Type</legend>

                {roomType.map((room, index) => (
                    <div key={index}>
                        <label
                            htmlFor={room}
                            className='flex cursor-pointer justify-between gap-4 rounded-lg border border-gray-100 bg-white p-4 text-sm font-medium shadow-sm hover:border-gray-200 has-[:checked]:border-u-orange-500 has-[:checked]:ring-1 has-[:checked]:ring-u-orange-500'>
                            <div>
                                <p className='text-gray-700'>{room}</p>
                            </div>

                            <input
                                type='radio'
                                name='room'
                                value={room}
                                id={room}
                                className='size-5 border-gray-300 text-u-orange-500'
                                checked={selectedType === room}
                                onChange={() => handleClick(room)}
                            />
                        </label>
                    </div>
                ))}
            </fieldset>

            <div className='flex gap-3 mt-10 justify-center'>
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

export default StepOne
