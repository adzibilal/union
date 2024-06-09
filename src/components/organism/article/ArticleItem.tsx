import { ArticleTableType } from '@/types/admin/articles/type'
import { diffForHumans, removeTagHTML } from '@/utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BiCalendar, BiUser } from 'react-icons/bi'
import { FaCalendar } from 'react-icons/fa'

interface ArticleItemProps {
    article: ArticleTableType
}

const ArticleItem: React.FC<ArticleItemProps> = ({ article }) => {
    return (
        <div className='bg-white shadow-md rounded-md overflow-hidden h-max'>
            {article.image && (
                <Image
                    src={article.image}
                    alt={article.title}
                    width={1000}
                    height={500}
                    className='object-cover aspect-video w-full'
                />
            )}
            <div className='p-5'>
                <div className='flex gap-3 items-center mb-2'>
                    {article.ArticleCategory.map((item, index) => (
                        <div
                            key={index}
                            className='bg-orange-100 text-orange-500 font-semibold text-xs px-2 py-1 rounded-md hover:underline cursor-pointer'>
                            {item.category.name}
                        </div>
                    ))}
                </div>
                <Link href={`/articles/${article.slug}`}>
                    <h2 className='text-xl font-semibold text-gray-800 hover:underline cursor-pointer line-clamp-2 text-ellipsis mt-5'>
                        {article.title}
                    </h2>
                </Link>

                <p className='text-gray-500 line-clamp-3 text-ellipsis overflow-hidden mt-2 text-sm '>
                    {removeTagHTML(article.content)}
                </p>

                <div className='flex justify-between items-center text-sm text-zinc-700 mt-5'>
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
        </div>
    )
}

export default ArticleItem
