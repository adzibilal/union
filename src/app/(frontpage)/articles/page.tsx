import ArticleList from '@/components/organism/article/ArticleList'
import PageHeader from '@/components/organism/PageHeader'
import React from 'react'

const ArticlePages = () => {
    return (
        <div>
            <PageHeader
                title='Articles'
                subtitle='List of articles that we have published.'
            />
            <ArticleList />
        </div>
    )
}

export default ArticlePages
