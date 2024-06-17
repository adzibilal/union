'use client'
import React, { useState, useEffect } from 'react'

interface dataRoomType {
    ruangTamu: number
    livingRoom: number
    kitchen: number
    bedroom: number
    bathroom: number
    diningRoom: number
    otherBedroom: number
}

interface StepTwoProps {
    onNext: () => void
    onPrev: () => void
    data: dataRoomType
    onChange: (data: dataRoomType) => void
}

const StepTwo: React.FC<StepTwoProps> = ({
    onNext,
    onPrev,
    data,
    onChange
}) => {
    const [dataRoom, setDataRoom] = useState<dataRoomType>(data)

    useEffect(() => {
        onChange(dataRoom)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dataRoom])

    const parseKeyToName = (key: string) => {
        return key
            .split(/(?=[A-Z])/)
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ')
    }

    const handleQuantityChange = (room: keyof dataRoomType, amount: number) => {
        setDataRoom(prevData => ({
            ...prevData,
            [room]: Math.max(prevData[room] + amount, 0) // pastikan tidak ada nilai negatif
        }))
    }

    return (
        <div className='py-10'>
            <div className='text-3xl mb-8 text-center'>
                Ruangan yang akan di Desain
            </div>

            <div className='grid grid-cols-2 max-md:grid-cols-1 gap-4'>
                {Object.keys(dataRoom).map((room, index) => (
                    <div
                        className='border border-gray-200 px-3 py-2 flex items-center justify-between'
                        key={index}>
                        <div className=''>
                            <label
                                htmlFor={room}
                                className='text-sm font-medium'>
                                {parseKeyToName(room)}
                            </label>
                        </div>
                        <div>
                            <label htmlFor='Quantity' className='sr-only'>
                                Quantity
                            </label>

                            <div className='flex items-center rounded border border-gray-200'>
                                <button
                                    type='button'
                                    className='size-10 leading-10 text-gray-600 transition hover:opacity-75'
                                    onClick={() =>
                                        handleQuantityChange(
                                            room as keyof dataRoomType,
                                            -1
                                        )
                                    }>
                                    &minus;
                                </button>

                                <input
                                    type='number'
                                    id={room}
                                    value={dataRoom[room as keyof dataRoomType]}
                                    readOnly
                                    className='h-10 w-16 border-transparent text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none'
                                />

                                <button
                                    type='button'
                                    className='size-10 leading-10 text-gray-600 transition hover:opacity-75'
                                    onClick={() =>
                                        handleQuantityChange(
                                            room as keyof dataRoomType,
                                            1
                                        )
                                    }>
                                    &#43;
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className='flex gap-3 mt-10 justify-center'>
                <button
                    onClick={onPrev}
                    className='bg-u-orange-500 text-white px-6 py-3 uppercase mt-3 cursor-pointer hover:bg-u-orange-500/90'>
                    SEBELUMNYA
                </button>
                <button
                    onClick={onNext}
                    className='bg-u-orange-500 text-white px-6 py-3 uppercase mt-3 cursor-pointer hover:bg-u-orange-500/90 disabled:opacity-50 disabled:cursor-not-allowed'>
                    SELANJUTNYA
                </button>
            </div>
        </div>
    )
}

export default StepTwo
