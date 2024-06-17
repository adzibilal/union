import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

interface ResultQuizProps {
    answers: (number | null)[]
}

const ResultQuiz: React.FC<ResultQuizProps> = ({ answers }) => {
    const [image, setImage] = useState<string>('')
    const [result, setResult] = useState<string>('')
    const [description, setDescription] = useState<string>('')

    useEffect(() => {
        const processAnswers = (answers: (number | null)[]) => {
            const result = answers.reduce((acc, curr) => {
                if (!curr) return acc
                if (!acc[curr]) {
                    acc[curr] = 1
                } else {
                    acc[curr] += 1
                }
                return acc
            }, {} as { [key: number]: number })

            const max = Math.max(...Object.values(result))
            const style = Object.keys(result).find(
                (key: string) => result[parseInt(key ?? '')] === max
            )

            if (!style)
                return {
                    image: '',
                    result: 'Tidak ada jawaban',
                    description: ''
                }
            switch (parseInt(style)) {
                case 1:
                    return {
                        image: '/assets/images/quiz/modern-1.jpg',
                        result: 'Modern',
                        description:
                            'Gaya modern mengedepankan desain minimalis dengan garis-garis bersih dan palet warna netral. Fungsionalitas dan estetika yang sederhana menjadi fokus utama.'
                    }
                case 2:
                    return {
                        image: '/assets/images/quiz/classic.jpg',
                        result: 'Classic',
                        description:
                            'Gaya klasik terinspirasi oleh desain Eropa yang elegan dan mewah, dengan ornamen dekoratif yang kaya dan detail yang rumit.'
                    }
                case 3:
                    return {
                        image: '/assets/images/quiz/scandinavian.jpg',
                        result: 'Skandinavia',
                        description:
                            'Gaya Skandinavia terkenal dengan kesederhanaan, fungsionalitas, dan keindahan alami. Menggunakan banyak elemen kayu, warna-warna terang, dan ruang terbuka.'
                    }
                case 4:
                    return {
                        image: '/assets/images/quiz/industrial.jpg',
                        result: 'Industrial',
                        description:
                            'Gaya industrial menampilkan material mentah seperti batu bata, logam, dan kayu yang belum diolah. Desainnya sering kali terlihat maskulin dan utilitarian.'
                    }
                default:
                    return {
                        image: '',
                        result: 'Tidak ada jawaban',
                        description: ''
                    }
            }
        }

        const processedResult = processAnswers(answers)
        setImage(processedResult.image)
        setResult(processedResult.result)
        setDescription(processedResult.description)
    }, [answers])

    return (
        <div className='p-5 flex flex-col gap-3 items-center justify-center'>
            <div className='text-2xl font-bold'>Hasil Quiz</div>
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
                KONSULTASI SEKARANG
            </Link>
        </div>
    )
}

export default ResultQuiz
