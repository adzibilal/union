import React from 'react'

const UserListSkeleton = () => {
    return (
        <div className='animate-pulse'>
            <div className='flex flex-col gap-3 my-5'>
                <div className='h-12 w-full rounded-md bg-zinc-100'></div>
                <div className='h-12 w-full rounded-md bg-zinc-100'></div>
                <div className='h-12 w-full rounded-md bg-zinc-100'></div>
                <div className='h-12 w-full rounded-md bg-zinc-100'></div>
                <div className='h-12 w-full rounded-md bg-zinc-100'></div>
            </div>

            <div className="flex gap-3">
                <div className="h-8 w-8 rounded-md bg-zinc-100"></div>
                <div className="h-8 w-12 rounded-md bg-zinc-100"></div>
                <div className="h-8 w-12 rounded-md bg-zinc-100"></div>
                <div className="h-8 w-8 rounded-md bg-zinc-100"></div>
            </div>
        </div>
    )
}

export default UserListSkeleton
