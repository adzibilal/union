'use client'
import React from 'react'
import StepOne from '../molecules/quiz/StepOne'
import StepTwo from '../molecules/quiz/StepTwo'
import StepThree from '../molecules/quiz/StepThree'
import StepFour from '../molecules/quiz/StepFour'
import StepFive from '../molecules/quiz/StepFive'

const StyleQuiz = () => {
    const [currentStep, setCurrentStep] = React.useState(0)

    return (
        <div className=''>
            {currentStep === 0 ? (
                <div className='flex flex-col items-center justify-center gap-2 h-full'>
                    <div className='text-2xl font-bold'>
                        Apa gaya desain interior saya?
                    </div>
                    <div className='text-sm text-zinc-600'>
                        Temukan gaya desain interior Anda
                    </div>
                    <div
                        onClick={() => setCurrentStep(1)}
                        className='bg-u-orange-500 text-white px-6 py-3 uppercase mt-3 cursor-pointer hover:bg-u-orange-500/90'>
                        MUAI QUIZ
                    </div>
                </div>
            ) : currentStep === 1 ? (
                <StepOne 
                    selectedStyle={1}
                    setSelectedStyle={() => {}}
                    onNext={() => setCurrentStep(2)}
                />
            ) : currentStep === 2 ? (
                <StepTwo 
                    selectedStyle={1}
                    setSelectedStyle={() => {}}
                    onNext={() => setCurrentStep(3)}
                    onPrev={() => setCurrentStep(1)}
                />
            ) : currentStep === 3 ? (
                <StepThree
                    selectedStyle={1}
                    setSelectedStyle={() => {}}
                    onNext={() => setCurrentStep(4)}
                    onPrev={() => setCurrentStep(2)}
                />
            ) : currentStep === 4 ? (
                <StepFour 
                    selectedStyle={1}
                    setSelectedStyle={() => {}}
                    onNext={() => setCurrentStep(5)}
                    onPrev={() => setCurrentStep(3)}
                />
            ) : currentStep === 5 ? (
                <StepFive 
                    selectedStyle={1}
                    setSelectedStyle={() => {}}
                    onNext={() => setCurrentStep(6)}
                    onPrev={() => setCurrentStep(4)}
                />
            ) : (
                <div>Result</div>
            )}
        </div>
    )
}

export default StyleQuiz
