import React from 'react'

const ArticleListSkeleton = () => {
    return (
        <div className='my-5 grid grid-cols-2 gap-3'>
            {[1, 2, 3, 4].map(item => (
                <div
                    key={item}
                    className='bg-zinc-50 p-3 rounded-md shadow-md animate-pulse'>
                    <div className='h-40 bg-zinc-200 rounded-md'></div>
                    <div className='h-4 bg-zinc-200 rounded-md mt-2'></div>
                    <div className='h-4 bg-zinc-200 rounded-md mt-2'></div>
                    <div className='h-4 bg-zinc-200 rounded-md mt-2'></div>
                </div>
            ))}
        </div>
    )
}

export default ArticleListSkeleton
