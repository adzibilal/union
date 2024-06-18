import { useTranslations } from 'next-intl'
import React from 'react'

interface ResultProps {
    onFinish: () => void
}

const Result: React.FC<ResultProps> = ({ onFinish }) => {
    const t = useTranslations('CalculatorDesign.steps.result')
    return (
        <div className='py-10'>
            <div className='text-3xl mb-8 text-center'>{t('title')}</div>
            <p className='text-center'>{t('description')}</p>

            <div className='flex gap-3 mt-10 justify-center'>
                <button
                    onClick={onFinish}
                    className='bg-u-orange-500 text-white px-6 py-3 uppercase mt-3 cursor-pointer hover:bg-u-orange-500/90 disabled:opacity-50 disabled:cursor-not-allowed'>
                    {t('buttonFinish')}
                </button>
            </div>
        </div>
    )
}

export default Result
