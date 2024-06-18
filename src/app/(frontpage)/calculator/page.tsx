import CalculatorDesign from '@/components/organism/CalculatorDesign'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import React from 'react'

const CalculatorPage = () => {
    const t = useTranslations('CalculatorPage')
    return (
        <div>
            <div className=''>
                <div className="bg-[url('/assets/images/calculator.png')] w-full aspect-[25/6] bg-center flex items-center justify-center">
                    <div className='text-2xl bg-u-orange-500/60 font-bold uppercase text-white p-5'>
                        {t('title')}
                    </div>
                </div>
                <div className='max-container'>
                    <CalculatorDesign />
                </div>
            </div>
        </div>
    )
}

export default CalculatorPage
