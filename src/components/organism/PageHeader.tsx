import React from 'react'

interface PageHeaderProps {
    title: string;
    subtitle: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle }) => {
    return (
        <div className='w-full h-[30vh] bg-u-orange-500 text-white'>
            <div className='max-container w-full h-full flex justify-center flex-col'>
                <div className='uppercase font-extrabold text-6xl'>
                    {title}
                </div>
                <div className=''>
                    {subtitle}
                </div>
            </div>
        </div>
    )
}

export default PageHeader
