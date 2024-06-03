import Image from 'next/image'
import React from 'react'

const SideBar = () => {
    return (
        <div className='w-full h-full bg-white border-r py-5'>
            <Image
                src={'/assets/images/logo-main.png'}
                width={500}
                height={200}
                alt=''
                className='h-auto w-[50%] mx-auto'
            />
        </div>
    )
}

export default SideBar
