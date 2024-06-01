import Image from 'next/image'
import React from 'react'

interface SectionTitleProps {
    subTitle: string
    title: string
}

const SectionTitle: React.FC<SectionTitleProps> = ({ subTitle, title }) => {
    return (
        <div className='relative mt-3'>
            <Image
                src='/assets/images/icon-black.png'
                alt='Section Title'
                width={300}
                height={300}
                className='opacity-5 -z-0 absolute -top-3 -left-3 w-32'
            />
            {/* sub title */}
            <div className='font-extrabold text-u-orange-500'>{subTitle}</div>
            {/* title */}
            <div className='font-extrabold text-zinc-900 text-4xl leading-relaxed'>
                {title}
            </div>
        </div>
    )
}

export default SectionTitle
