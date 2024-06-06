'use client'
import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { ArticleTableType, CategoryType } from '@/types/admin/articles/type'
import { FaImage } from 'react-icons/fa'
import TextEditor from '@/components/molecules/TextEditor'
import DropzoneImage from '@/components/molecules/DropzoneImage'
import CategoryInput from '@/components/molecules/CategoryInput'

const articleSchema = z.object({
    id: z.string().optional(),
    title: z.string().min(5).max(255),
    image: z.string().optional(),
    content: z.string().min(5)
})

type FormArticleProps = {
    article?: ArticleTableType
}

const FormArticle: React.FC<FormArticleProps> = ({ article }) => {
    const router = useRouter()
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        setValue
    } = useForm<z.infer<typeof articleSchema>>({
        resolver: zodResolver(articleSchema)
    })

    const [submitError, setSubmitError] = useState<string | null>(null)
    const [fileImage, setFileImage] = useState<File | null>(null)

    const handleContentChange = (content: string) => {
        console.debug(content)
        setValue('content', content)
    }

    const onSubmit = async (data: z.infer<typeof articleSchema>) => {
        console.debug(data)
    }

    const handleFileDrop = (file: File) => {
        console.debug(file)
        setFileImage(file)
    }

    const handleCategoryChange = (category: CategoryType[]) => {
        console.debug(category)
    }

    return (
        <form className='space-y-4 mt-5' onSubmit={handleSubmit(onSubmit)}>
            <DropzoneImage
                onFileDrop={handleFileDrop}
                initialImage={article ? article.image : ''}
            />
            <div className='input-group'>
                <label htmlFor='title'>Title:</label>
                <input type='text' id='title' {...register('title')} />
                {errors.title && (
                    <p className='text-red-500'>{errors.title.message}</p>
                )}
            </div>

            <div className='input-group'>
                <label htmlFor='content'>Content:</label>
                <TextEditor
                    content={article ? article.content : ''}
                    onContentChange={handleContentChange}
                />
                {errors.content && (
                    <p className='text-red-500'>{errors.content.message}</p>
                )}
            </div>

            <div className='input-group'>
                <label htmlFor='category'>Category</label>
                <CategoryInput onCategoryChange={handleCategoryChange} />
            </div>

            {submitError && <p className='text-red-500'>{submitError}</p>}
            <div className='flex items-center gap-3 justify-end'>
                <Link
                    href={'/admin/article/'}
                    className='bg-zinc-100 hover:bg-zinc-200 text-zinc-500 font-semibold text-sm py-2 px-4 rounded'>
                    Cancel
                </Link>
                <button
                    type='submit'
                    className='bg-blue-500 hover:bg-blue-700 text-white font-semibold text-sm py-2 px-4 rounded'>
                    {article ? 'Simpan Perubahan' : 'Posting Article'}
                </button>
            </div>
        </form>
    )
}

export default FormArticle
