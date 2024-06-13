import React from 'react'

const PortofolioListSkeleton = () => {
    return (
        <div className='grid grid-cols-3 max-sm:grid-cols-1 gap-5 my-10'>
            {[1, 2, 3, 4, 5, 6].map(index => (
                <div
                    key={index}
                    className='p-5 rounded-md animate-pulse'>
                    <div className='w-full h-[30vh] bg-zinc-200'></div>
                    <div className='h-5 bg-zinc-200 rounded-md mt-2'></div>
                    <div className='h-5 bg-zinc-200 rounded-md mt-2'></div>
                    <div className='h-5 bg-zinc-200 rounded-md mt-2'></div>
                    </div>
            ))}
        </div>
    )
}

export default PortofolioListSkeleton
