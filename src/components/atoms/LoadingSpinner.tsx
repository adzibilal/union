import React from 'react'
import { FaSpinner } from 'react-icons/fa'

const LoadingSpinner = () => {
  return (
    <div className='z-[999] bg-white p-2 fixed bottom-3 right-3 shadow-md rounded-lg'>
        <FaSpinner className='animate-spin text-u-orange-500 text-xl' />
    </div>
  )
}

export default LoadingSpinner