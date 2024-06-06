'use client'
import Breadcrumb from '@/components/molecules/admin/Breadcrumb'
import FormArticle from '@/components/organism/admin/article/FormArticle'
import { getSession } from '@/lib'
import { ArticleTableType } from '@/types/admin/articles/type'
import { redirect, useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const EditArticlePage = () => {
    const { slug } = useParams<{ slug: string }>()
    const [article, setArticle] = useState<ArticleTableType | null>(null)

    const getArticle = async () => {
        try {
            const response = await fetch(`/api/cms/articles/${slug}`)
            const data = await response.json()
            setArticle(data)
        } catch (error) {
            console.error('[GET ARTICLE BY ID]', error)
        }
    }

    useEffect(() => {
        getArticle()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const items = [
        { href: '/admin/dashboard', children: 'Dashboard' },
        { href: '/admin/article', children: 'Articles' },
        { children: 'Create New Article' }
    ]
    return (
        <div className='p-5 w-full bg-zinc-50'>
            <div className='mb-5'>
                <Breadcrumb items={items} />
            </div>

            <div className='bg-white shadow-sm border rounded-md w-full p-6 max-w-screen-md mx-auto'>
                <div className='text-zinc-900 text-3xl font-semibold'>
                    Edit Article
                </div>
                {article && <FormArticle article={article} />}
            </div>
        </div>
    )
}

export default EditArticlePage
