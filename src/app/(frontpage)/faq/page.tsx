import FaqAccordion from '@/components/atoms/FaqAccordion'
import PageHeader from '@/components/organism/PageHeader'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import React from 'react'

const FaqPage = () => {
    const t = useTranslations('FAQ')

    const trendingFaq = [
        {
            question: t('questions.trendingFaq.0.question'),
            answer: t('questions.trendingFaq.0.answer')
        },
        {
            question: t('questions.trendingFaq.1.question'),
            answer: t('questions.trendingFaq.1.answer')
        },
        {
            question: t('questions.trendingFaq.2.question'),
            answer: t('questions.trendingFaq.2.answer')
        },
        {
            question: t('questions.trendingFaq.3.question'),
            answer: t('questions.trendingFaq.3.answer')
        },
        {
            question: t('questions.trendingFaq.4.question'),
            answer: t('questions.trendingFaq.4.answer')
        }
    ]

    const freqFaq = [
        {
            question: t('questions.freqFaq.0.question'),
            answer: t('questions.freqFaq.0.answer')
        },
        {
            question: t('questions.freqFaq.1.question'),
            answer: t('questions.freqFaq.1.answer')
        },
        {
            question: t('questions.freqFaq.2.question'),
            answer: t('questions.freqFaq.2.answer')
        },
        {
            question: t('questions.freqFaq.3.question'),
            answer: t('questions.freqFaq.3.answer')
        },
        {
            question: t('questions.freqFaq.4.question'),
            answer: t('questions.freqFaq.4.answer')
        }
    ]

    return (
        <div>
            <PageHeader title='FAQ' subtitle='Frequently Asked Questions' />
            <div className='max-container'>
                <div className='grid grid-cols-2 max-lg:grid-cols-1 gap-10 my-20'>
                    <Image
                        src='/assets/images/faq1.png'
                        alt='FAQ'
                        width={500}
                        height={500}
                        className='w-full'
                    />
                    <div className=''>
                        <div className='text-u-orange-500 font-semibold text-sm uppercase mb-1'>
                            {t('trending-questions')}
                        </div>
                        <div className='text-3xl font-bold mb-1'>
                            {t('trending-title')}
                        </div>
                        <div className='text-sm text-zinc-500 text-justify mb-5'>
                            {t('trending-desc')}
                        </div>

                        {trendingFaq.map((faq, index) => (
                            <FaqAccordion key={index} faq={faq} />
                        ))}
                    </div>
                </div>
                <div className='grid grid-cols-2 max-lg:grid-cols-1 gap-10 my-20'>
                    <div className=''>
                        <div className='text-u-orange-500 font-semibold text-sm uppercase mb-1'>
                            {t('freq-questions')}
                        </div>
                        <div className='text-3xl font-bold mb-1'>
                            {t('freq-title')}
                        </div>
                        <div className='text-sm text-zinc-500 text-justify mb-5'>
                            {t('freq-desc')}
                        </div>

                        {freqFaq.map((faq, index) => (
                            <FaqAccordion key={index} faq={faq} />
                        ))}
                    </div>
                    <Image
                        src='/assets/images/faq2.png'
                        alt='FAQ'
                        width={500}
                        height={500}
                        className='w-full'
                    />
                </div>
            </div>
        </div>
    )
}

export default FaqPage
