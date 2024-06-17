'use client'
import React from 'react'
import StepOne from '../molecules/quiz/StepOne'
import StepTwo from '../molecules/quiz/StepTwo'
import StepThree from '../molecules/quiz/StepThree'
import StepFour from '../molecules/quiz/StepFour'
import StepFive from '../molecules/quiz/StepFive'
import ResultQuiz from './ResultQuiz'

const StyleQuiz = () => {
    const [currentStep, setCurrentStep] = React.useState(0)
    const [answers, setAnswers] = React.useState<(number | null)[]>([
        null,
        null,
        null,
        null,
        null
    ])

    return (
        <div className='max-md:pt-5 max-md:pb-10'>
            {currentStep === 0 ? (
                <div className='flex flex-col items-center justify-center gap-2 h-full max-md:py-10 max-md:text-center'>
                    <div className='text-2xl font-bold max-sm:text-xl'>
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
                    selectedStyle={answers[0] as number}
                    setSelectedStyle={(id) => {
                        setAnswers([id, answers[1], answers[2], answers[3], answers[4]])
                    }}
                    onNext={() => setCurrentStep(2)}
                />
            ) : currentStep === 2 ? (
                <StepTwo
                    selectedStyle={answers[1] as number}
                    setSelectedStyle={(id) => {
                        setAnswers([answers[0], id, answers[2], answers[3], answers[4]])
                    }}
                    onNext={() => setCurrentStep(3)}
                    onPrev={() => setCurrentStep(1)}
                />
            ) : currentStep === 3 ? (
                <StepThree
                    selectedStyle={answers[2] as number}
                    setSelectedStyle={(id) => {
                        setAnswers([answers[0], answers[1], id, answers[3], answers[4]])
                    }}
                    onNext={() => setCurrentStep(4)}
                    onPrev={() => setCurrentStep(2)}
                />
            ) : currentStep === 4 ? (
                <StepFour
                    selectedStyle={answers[3] as number}
                    setSelectedStyle={(id) => {
                        setAnswers([answers[0], answers[1], answers[2], id, answers[4]])
                    }}
                    onNext={() => setCurrentStep(5)}
                    onPrev={() => setCurrentStep(3)}
                />
            ) : currentStep === 5 ? (
                <StepFive
                    selectedStyle={answers[4] as number}
                    setSelectedStyle={(id) => {
                        setAnswers([answers[0], answers[1], answers[2], answers[3], id])
                    }}
                    onNext={() => setCurrentStep(6)}
                    onPrev={() => setCurrentStep(4)}
                />
            ) : (
                <ResultQuiz answers={answers} />
            )}
        </div>
    )
}

export default StyleQuiz
