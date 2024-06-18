import ArticleList from '@/components/organism/article/ArticleList'
import PageHeader from '@/components/organism/PageHeader'
import { useTranslations } from 'next-intl'
import React from 'react'

const ArticlePages = () => {
    const t = useTranslations('ArticlePages')
    return (
        <div className='bg-zinc-50 pb-10'>
            <PageHeader
                title={t('title')}
                subtitle={t('subtitle')}
            />
            <ArticleList />
        </div>
    )
}

export default ArticlePages
