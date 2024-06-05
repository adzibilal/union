'use client'

import { ArticleTableType } from '@/types/admin/articles/type'
import { diffForHumans } from '@/utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaEdit, FaImage, FaTrash } from 'react-icons/fa'

interface ArticleListItemProps {
    article: ArticleTableType
    onChange: () => void
}

const ArticleListItem: React.FC<ArticleListItemProps> = props => {
    const handleDeleteArticle = async () => {
        const conf = confirm('Apakah anda yakin ingin menghapus article ini?')
        if (!conf) return
        try {
            const response = await fetch(
                `/api/cms/articles/${props.article.slug}`,
                {
                    method: 'DELETE'
                }
            )

            if (response.ok) {
                alert('Article berhasil dihapus')
            } else {
                alert('Gagal menghapus article')
            }
        } catch (error) {
            console.error('[DELETE USER]', error)
            alert('Gagal menghapus article')
        } finally {
            props.onChange()
        }
    }

    return (
        <div className={`bg-zinc-50 px-3 py-2 rounded-md relative  group `}>
            <div className='flex flex-col w-full items-center gap-3'>
                {props.article.image ? (
                    <Image
                        src={props.article.image}
                        alt={props.article.title}
                        width={200}
                        height={200}
                        className='rounded-md aspect-video w-full'
                    />
                ) : (
                    <div className='rounded-md aspect-video w-full bg-zinc-200 flex items-center justify-center'>
                        <FaImage className='text-zinc-400 text-4xl' />
                    </div>
                )}

                <div className='w-full'>
                    <div className='flex gap-3 items-center mb-2'>
                        {props.article.categories.map((category, index) => (
                            <div
                                key={index}
                                className='bg-orange-100 text-orange-500 font-semibold text-xs px-2 py-1 rounded-md'>
                                {category.name}
                            </div>
                        ))}
                    </div>
                    <div className='text-zinc-900 text-lg font-semibold'>
                        {props.article.title}
                    </div>
                    <div className='text-zinc-500 text-sm'>
                        {props.article.slug}
                    </div>
                    <div className='flex items-center justify-between mt-3'>
                        <div className='text-zinc-500 text-xs'>
                            Created by: {props.article.author.name}
                        </div>
                        <div className='text-zinc-500 text-xs'>
                            {diffForHumans(props.article.createdAt)}
                        </div>
                    </div>
                </div>
            </div>
            {/* actions item */}
            <div className='absolute top-4 right-4 bg-white shadow-sm rounded-full px-3 py-1 items-center gap-3 hidden group-hover:flex'>
                <Link
                    href={`/admin/articles/${props.article.slug}`}
                    className='text-blue-500 font-semibold'>
                    <FaEdit />
                </Link>
                <button
                    className='text-red-500 font-semibold'
                    onClick={() => handleDeleteArticle()}>
                    <FaTrash />
                </button>
            </div>
        </div>
    )
}

export default ArticleListItem
