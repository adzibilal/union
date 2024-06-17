import React from 'react'

interface ResultProps {
    onFinish: () => void
}

const Result: React.FC<ResultProps> = ({ onFinish }) => {
    return (
        <div className='py-10'>
            <div className='text-3xl mb-8 text-center'>
                Terimakasih telah mengisi formulir
            </div>
            <p className='text-center'>Kami akan segera menghubungi anda</p>

            <div className='flex gap-3 mt-10 justify-center'>
                <button
                    onClick={onFinish}
                    className='bg-u-orange-500 text-white px-6 py-3 uppercase mt-3 cursor-pointer hover:bg-u-orange-500/90 disabled:opacity-50 disabled:cursor-not-allowed'>
                    Estimasi Ulang
                </button>
            </div>
        </div>
    )
}

export default Result
