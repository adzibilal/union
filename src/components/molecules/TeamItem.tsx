import Image from 'next/image'
import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'

interface TeamItemProps {
    index: number
    name: string
    image: string
    role: string
}

const TeamItem: React.FC<TeamItemProps> = ({ index, name, image, role }) => {
    const isGanjil = index % 2 === 0

    return (
        <div className='flex flex-col items-center'>
            <Image
                src={image}
                alt={name}
                width={400}
                height={400}
                className='aspect-[4/5] w-full object-cover'
            />
            <div
                className={`border border-t-0 w-full p-5 text-center ${
                    isGanjil
                        ? 'border-zinc-200'
                        : 'border-gray-950 bg-zinc-950 text-white'
                } `}>
                <p className='text-lg font-light uppercase'>{role}</p>
                <h3 className='font-extrabold text-2xl uppercase'>{name}</h3>

                <div className='flex items-center gap-3 justify-center mt-5 mb-3'>
                    <FaFacebook size={25} className='text-u-orange-500' />
                    <FaInstagram size={25} className='text-u-orange-500' />
                    <FaLinkedin size={25} className='text-u-orange-500' />
                </div>
            </div>
        </div>
    )
}

export default TeamItem
