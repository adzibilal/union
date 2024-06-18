import PageHeader from '@/components/organism/PageHeader'
import PortofolioList from '@/components/organism/portofolio/PortofolioList'
import { useTranslations } from 'next-intl'
import React from 'react'

const PortofolioPage = () => {
    const t = useTranslations('PortofolioPage')
    return (
        <div>
            <PageHeader
                title={t('title')}
                subtitle={t('subtitle')}
            />

            <PortofolioList />
        </div>
    )
}

export default PortofolioPage
