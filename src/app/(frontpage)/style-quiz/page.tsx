import StyleQuiz from '@/components/organism/StyleQuiz'
import Image from 'next/image'
import React from 'react'

const StyleQuizPage = () => {
    return (
        <div className='max-container py-20'>
            <div className='bg-white border shadow-lg max-w-screen-lg mx-auto grid grid-cols-[1fr_2fr] max-md:grid-cols-1 '>
                <Image
                    src='/assets/images/quiz.jpg'
                    alt='style-quiz'
                    width={500}
                    height={600}
                    className='w-full h-full object-cover max-md:hidden'
                />
                <Image
                    src='/assets/images/quiz-mobile.png'
                    alt='style-quiz'
                    width={500}
                    height={600}
                    className='w-full object-cover hidden max-md:block'
                />
                <StyleQuiz />
            </div>
        </div>
    )
}

export default StyleQuizPage
