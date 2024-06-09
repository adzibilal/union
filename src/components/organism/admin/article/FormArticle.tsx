'use client'
import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { redirect, useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { ArticleTableType, CategoryType } from '@/types/admin/articles/type'
import { FaImage } from 'react-icons/fa'
import TextEditor from '@/components/molecules/TextEditor'
import DropzoneImage from '@/components/molecules/DropzoneImage'
import CategoryInput from '@/components/molecules/CategoryInput'
import { Session } from '@/lib'
import LoadingSpinner from '@/components/atoms/LoadingSpinner'

const articleSchema = z.object({
    id: z.string().optional(),
    title: z.string().min(5).max(255),
    image: z.string().optional(),
    content: z.string().min(5)
})

type FormArticleProps = {
    article?: ArticleTableType
    session?: Session
}

const FormArticle: React.FC<FormArticleProps> = ({ article, session }) => {
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

    const [isLoading, setIsLoading] = useState(false)
    const [submitError, setSubmitError] = useState<string | null>(null)
    const [fileImage, setFileImage] = useState<File | null>(null)
    const [selectedCategory, setSelectedCategory] = useState<CategoryType[]>([])

    const handleContentChange = (content: string) => {
        setValue('content', content)
    }

    const handleUploadImage = async () => {
        setIsLoading(true)
        const file = fileImage // Add null check for e.target.files
        const formData = new FormData()
        if (file) {
            formData.append('file', file)
        }
        formData.append('upload_preset', 'union_upload')

        try {
            const response = await fetch(
                'https://api.cloudinary.com/v1_1/dr2sbogew/image/upload',
                {
                    method: 'POST',
                    body: formData
                }
            )
            const data = await response.json()
            const imageUrl = data.secure_url
            return imageUrl
        } catch (error) {
            console.error(error)
            return 'error'
        }
        setIsLoading(false)
    }

    const onSubmit = async (data: z.infer<typeof articleSchema>) => {
        setIsLoading(true)
        try {
            if (fileImage) {
                const imageUrl = await handleUploadImage()
                if (imageUrl === 'error') {
                    setSubmitError('Terjadi kesalahan saat mengunggah gambar')
                    return
                } else {
                    data.image = imageUrl
                }
            }

            const payload = {
                title: data.title,
                slug:
                    data.title.replace(/\s/g, '-').toLowerCase() +
                    Math.floor(1000 + Math.random() * 9000),
                content: data.content,
                image: data.image || null,
                authorId: session?.user.id || null,
                categories: selectedCategory.map(category => category.id)
            }

            if (article) {
                await fetch(`/api/cms/articles/${article.slug}`, {
                    method: 'PATCH',
                    body: JSON.stringify({
                        title: payload.title,
                        slug: article.slug,
                        content: payload.content,
                        image: payload.image,
                        categories: payload.categories
                    })
                })
            } else {
                await fetch('/api/cms/articles', {
                    method: 'POST',
                    body: JSON.stringify(payload)
                })
            }
            router.push('/admin/article')
        } catch (error) {
            setSubmitError('Terjadi kesalahan saat menyimpan data artikel.')
            console.error(error)
        }
        setIsLoading(false)
    }

    const handleFileDrop = (file: File) => {
        setFileImage(file)
    }

    const handleCategoryChange = (category: CategoryType[]) => {
        setSelectedCategory(category)
    }

    useEffect(() => {
        if (article) {
            reset({
                id: article.id,
                title: article.title,
                image: article.image || '',
                content: article.content
            })
            setSelectedCategory(
                article.ArticleCategory.map(item => item.category)
            )
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [article])

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
                <CategoryInput
                    initialCategories={
                        article
                            ? article.ArticleCategory.map(item => item.category)
                            : []
                    }
                    onCategoryChange={handleCategoryChange}
                />
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
                    disabled={isLoading}
                    className='bg-blue-500 hover:bg-blue-700 text-white font-semibold text-sm py-2 px-4 rounded disabled:opacity-60 disabled:cursor-not-allowed'>
                    {article ? 'Simpan Perubahan' : 'Posting Article'}
                </button>
            </div>
            {isLoading && <LoadingSpinner />}
        </form>
    )
}

export default FormArticle
