import Image from 'next/image'
import React from 'react'

export default async function AdminAuthLayout({
    children
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <div className='flex min-h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8'>
            <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
                <Image
                    src={'/assets/images/logo-main.png'}
                    width={500}
                    height={200}
                    alt=''
                    className='h-20 w-auto mx-auto'
                />
            </div>

            <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
                {children}
            </div>
        </div>
    )
}
