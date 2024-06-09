'use client'
import ContentRender from '@/components/molecules/ContentRender'
import ArticleDetailSkeleton from '@/components/organism/article/ArticleDetailSkeleton'
import RelatedArticles from '@/components/organism/article/RelatedArticles'
import { ArticleTableType } from '@/types/admin/articles/type'
import { diffForHumans } from '@/utils'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { BiCalendar, BiUser } from 'react-icons/bi'

const ArticleDetailPage = () => {
    const { slug } = useParams<{ slug: string }>()
    const [article, setArticle] = useState<ArticleTableType | null>(null)

    const getArticle = async () => {
        try {
            const response = await fetch(`/api/articles/${slug}`)
            const data = await response.json()
            setArticle(data)
        } catch (error) {
            console.error('[GET ARTICLE BY SLUG]', error)
        }
    }

    useEffect(() => {
        getArticle()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className=''>
            <div className='w-full h-[30vh] bg-zinc-200 overflow-hidden -z-10 opacity-10 relative'>
                <Image
                    src='/assets/images/sliders/1.jpg'
                    width={1200}
                    height={300}
                    className='w-full h-[30vh] object-cover'
                    alt=''
                />
            </div>
            <div className='max-w-[1000px] mx-auto -mt-[250px]'>
                {article ? (
                    <div className='my-10'>
                        {article.image && (
                            <Image
                                src={article.image}
                                alt={article.title}
                                width={800}
                                height={500}
                                className='rounded-md aspect-video w-full object-cover shadow-lg z-30'
                            />
                        )}

                        <h1 className='text-4xl font-bold my-5'>
                            {article.title}
                        </h1>

                        <div className='flex items-center justify-between border-b pb-5 mb-5'>
                            <div className='flex gap-3 items-center'>
                                {article.ArticleCategory.map((item, index) => (
                                    <div
                                        key={index}
                                        className='bg-orange-100 text-orange-500 font-semibold text-xs px-2 py-1 rounded-md hover:underline cursor-pointer'>
                                        {item.category.name}
                                    </div>
                                ))}
                            </div>
                            <div className='flex justify-between items-center text-sm text-zinc-700 gap-3'>
                                <div className='flex items-center gap-2'>
                                    <BiCalendar />
                                    <div className=''>
                                        {diffForHumans(article.createdAt)}
                                    </div>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <BiUser />
                                    <div className=''>
                                        Posted by{' '}
                                        <Link
                                            href={`/author/${article.author.id}`}
                                            className='hover:underline cursor-pointer text-u-orange-500'>
                                            {article.author.name}
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <ContentRender html={article.content} />

                        <RelatedArticles slug={article.slug} />
                    </div>
                ) : (
                    <ArticleDetailSkeleton />
                )}
            </div>
        </div>
    )
}

export default ArticleDetailPage
