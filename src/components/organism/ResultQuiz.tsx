'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useTranslations } from 'next-intl'

interface ResultQuizProps {
    answers: (number | null)[]
}

const ResultQuiz: React.FC<ResultQuizProps> = ({ answers }) => {
    const t  = useTranslations('ResultQuiz')
    const [image, setImage] = useState<string>('')
    const [result, setResult] = useState<string>('')
    const [description, setDescription] = useState<string>('')

    useEffect(() => {
        const processAnswers = (answers: (number | null)[]) => {
            const result = answers.reduce((acc, curr) => {
                if (curr === null) return acc
                if (!acc[curr]) {
                    acc[curr] = 1
                } else {
                    acc[curr] += 1
                }
                return acc
            }, {} as { [key: number]: number })

            const max = Math.max(...Object.values(result))
            const style = Object.keys(result).find(
                (key: string) => result[parseInt(key)] === max
            )

            if (!style) return {
                image: '',
                result: t('noAnswer.result'),
                description: t('noAnswer.description')
            }

            return {
                image: t(`styles.${style}.image`),
                result: t(`styles.${style}.result`),
                description: t(`styles.${style}.description`)
            }
        }

        const processedResult = processAnswers(answers)
        setImage(processedResult.image)
        setResult(processedResult.result)
        setDescription(processedResult.description)
    }, [answers, t])

    return (
        <div className='p-5 flex flex-col gap-3 items-center justify-center'>
            <div className='text-2xl font-bold'>{t('title')}</div>
            {image && (
                <Image
                    src={image}
                    alt='style'
                    width={400}
                    height={400}
                    className='aspect-video object-cover'
                />
            )}
            <div className='text-3xl font-bold'>{result}</div>
            <div className='text-md text-center'>{description}</div>

            {/* cta */}
            <Link
                href={'/contact'}
                className='bg-u-orange-500 text-white px-6 py-3 uppercase mt-3 cursor-pointer hover:bg-u-orange-500/90 disabled:opacity-50 disabled:cursor-not-allowed'>
                {t('cta')}
            </Link>
        </div>
    )
}

export default ResultQuiz
