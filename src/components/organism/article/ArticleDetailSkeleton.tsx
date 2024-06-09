import React from 'react'

const ArticleDetailSkeleton = () => {
  return (
    <div className='animate-pulse'>
        <div className='w-full h-[50vh] bg-zinc-50 shadow-md mb-5 rounded-md'></div>
        <div className='h-5 bg-zinc-200 rounded-md mt-2'></div>
        <div className='h-5 bg-zinc-200 rounded-md mt-2'></div>
        <div className='h-5 bg-zinc-200 rounded-md mt-2'></div>
    </div>
  )
}

export default ArticleDetailSkeleton