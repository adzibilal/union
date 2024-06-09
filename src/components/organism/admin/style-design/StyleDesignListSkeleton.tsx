import React from 'react'

const StyleDesignListSkeleton = () => {
    return (
        <div className='my-5 grid grid-cols-2 gap-3'>
            {Array.from({ length: 6 }).map((_, index) => (
                <div
                    key={index}
                    className='animate-pulse flex items-center justify-between bg-zinc-50 px-3 py-2 rounded-md'>
                    <div className='flex items-center gap-2'>
                        <div className='w-20 h-4 bg-gray-200 rounded-md'></div>
                    </div>
                    <div className='items-center gap-3 hidden group-hover:flex'>
                        <div className='w-6 h-6 bg-gray-200 rounded-full'></div>
                        <div className='w-6 h-6 bg-gray-200 rounded-full'></div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default StyleDesignListSkeleton
