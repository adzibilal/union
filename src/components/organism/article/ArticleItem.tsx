import { ArticleTableType } from '@/types/admin/articles/type'
import { removeTagHTML } from '@/utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface ArticleItemProps {
    article: ArticleTableType
}

const ArticleItem: React.FC<ArticleItemProps> = ({ article }) => {
    return (
        <Link href={`/articles/${article.slug}`}>
            <div className='cursor-pointer'>
                {article.image && (
                    <Image
                        src={article.image}
                        alt={article.title}
                        width={500}
                        height={300}
                        className='object-cover aspect-video'
                    />
                )}
                <div className='mt-3'>
                    <div className='flex gap-3 items-center mb-2'>
                        {article.ArticleCategory.map((item, index) => (
                            <div
                                key={index}
                                className='bg-orange-100 text-orange-500 font-semibold text-xs px-2 py-1 rounded-md'>
                                {item.category.name}
                            </div>
                        ))}
                    </div>
                    <h2 className='text-2xl font-semibold text-gray-800'>
                        {article.title}
                    </h2>
                    <p className='text-gray-500 line-clamp-3 text-ellipsis overflow-hidden'>
                        {removeTagHTML(article.content)}
                    </p>
                </div>
            </div>
        </Link>
    )
}

export default ArticleItem
