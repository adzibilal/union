'use client'
import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { ArticleTableType } from '@/types/admin/articles/type'
import { FaImage } from 'react-icons/fa'
import TextEditor from '@/components/molecules/TextEditor'

const articleSchema = z.object({
    id: z.string().optional(),
    title: z.string(),
    slug: z.string(),
    content: z.string(),
    author: z.string(),
    date: z.string()
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
    const [previewImage, setPreviewImage] = useState<string | null>(null)
    const fileInputRef = React.useRef<HTMLInputElement>(null)

    const handleContentChange = (content: string) => {
        console.debug(content)
        setValue('content', content)
    }

    return (
        <form className='space-y-4 mt-5'>
            <div id='image-input' className='cursor-pointer'>
                {/* {props.article.image ? (
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
                )} */}
                <div className='rounded-md aspect-video w-full bg-zinc-200 flex items-center justify-center'>
                    <FaImage className='text-zinc-400 text-4xl' />
                </div>
            </div>
            <div className='input-group'>
                <label htmlFor='name'>Title:</label>
                <input type='text' id='title' />
                {/* <input type='text' id='name' {...register('name')} /> */}
                {/* {errors.name && (
                    <p className='text-red-500'>{errors.name.message}</p>
                )} */}
            </div>

            <TextEditor
                content={article ? article.content : ''}
                onContentChange={handleContentChange}
            />

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