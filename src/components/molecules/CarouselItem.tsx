import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface CarouselItemProps {
    src: string
    title: string
    subTitle?: string
    button?: string
    linkButton?: string
}

const CarouselItem: React.FC<CarouselItemProps> = ({
    src,
    title,
    subTitle,
    button,
    linkButton
}) => {
    return (
        <div className='aspect-video lg:aspect-[21/8] relative'>
            <div className='w-full h-[50%] bg-gradient-to-b from-zinc-950/50 to-transparent absolute top-0 left-0 z-10'></div>
            <Image src={src} alt='hero' layout='fill' objectFit='cover' />
            <div className='max-container absolute left-[50%] bottom-20 translate-x-[-50%] z-20'>
                <div className='text-white text-4xl font-extrabold text-center'>
                    <h1 className='uppercase'>{title}</h1>
                    {subTitle && (
                        <h2 className='text-white text-lg'>{subTitle}</h2>
                    )}
                    {/* button cta */}
                    {linkButton && (
                        <div className='mt-6'>
                            <Link
                                href={linkButton}
                                className='bg-u-orange-500 hover:bg-u-orange-300 text-white text-lg uppercase px-6 py-3 '>
                                {button}
                            </Link>
                        </div>
                    )}
                </div>
            </div>
            <div className='w-full h-[80%] bg-gradient-to-t from-zinc-950/80 to-transparent absolute bottom-0 left-0 z-10'></div>
        </div>
    )
}

export default CarouselItem
