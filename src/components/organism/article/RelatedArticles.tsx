'use effect'
import { ArticleTableType } from '@/types/admin/articles/type'
import { diffForHumans } from '@/utils'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { BiCalendar, BiUser } from 'react-icons/bi'

interface RelatedArticlesProps {
    slug: string
}

const RelatedArticles: React.FC<RelatedArticlesProps> = ({ slug }) => {
    const [relatedArticles, setRelatedArticles] = React.useState<
        ArticleTableType[]
    >([])

    const getRelatedArticles = async () => {
        try {
            const response = await fetch(`/api/articles/${slug}/related`)
            const data = await response.json()
            setRelatedArticles(data.relatedArticles)
        } catch (error) {
            console.error('[GET RELATED ARTICLES]', error)
        }
    }

    useEffect(() => {
        getRelatedArticles()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <div>
            {relatedArticles && (
                <div className='mt-20'>
                    <h1 className='font-semibold text-2xl text-center mb-5'>
                        Related Articles
                    </h1>

                    <div className=''>
                        {relatedArticles.map(article => (
                            <div
                                className='flex items-center max-sm:flex-col gap-3 shadow-md p-3 rounded-md mb-5 cursor-pointer hover:shadow-lg transition-all duration-300 ease-in-out'
                                key={article.id}>
                                {article.image && (
                                    <Image
                                        src={article.image}
                                        alt={article.title}
                                        width={200}
                                        height={100}
                                        className='aspect-video object-cover rounded-md shadow-lg max-sm:w-full'
                                    />
                                )}
                                <div className='max-sm:flex max-sm:flex-col max-sm:w-full max-sm:gap-2 max-sm:text-center max-sm:justify-center max-sm:items-center'>
                                    <Link
                                        href={`/articles/${article.slug}`}
                                        className='text-lg font-semibold cursor-pointer hover:underline'>
                                        {article.title}
                                    </Link>
                                    <div className='flex items-center gap-2 text-sm text-gray-500 max-sm:text-xs max-sm:flex-col max-sm:my-2'>
                                        <div className='flex items-center gap-1'>
                                            <BiCalendar />
                                            <div className=''>
                                                {diffForHumans(
                                                    article.createdAt
                                                )}
                                            </div>
                                        </div>
                                        <div className='flex items-center gap-1'>
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
                                    <div className='flex gap-3 items-center mt-2'>
                                        {article.ArticleCategory.map(
                                            (item, index) => (
                                                <div
                                                    key={index}
                                                    className='bg-orange-100 text-orange-500 font-semibold text-xs px-1 py-0.5 rounded-md hover:underline cursor-pointer'>
                                                    {item.category.name}
                                                </div>
                                            )
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}

export default RelatedArticles
