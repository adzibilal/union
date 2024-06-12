'use client'
import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { redirect, useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import {
    PortofolioTableType,
    StyleDesignType
} from '@/types/admin/portofolio/type'
import { FaImage } from 'react-icons/fa'
import TextEditor from '@/components/molecules/TextEditor'
import DropzoneImage from '@/components/molecules/DropzoneImage'
import StyleDesignInput from '@/components/molecules/StyleDesignInput'
import { Session } from '@/lib'
import LoadingSpinner from '@/components/atoms/LoadingSpinner'
import { title } from 'process'

const portofolioSchema = z.object({
    title: z.string().min(5).max(255),
    resume: z.string().min(5).max(255),
    content: z.string().min(5),
    image: z.string().optional(),
    buildPrice: z.string().optional(),
    client: z.string().optional(),
    designPrice: z.string().optional(),
    location: z.string().optional(),
    material: z.string().optional(),
    projectType: z.string().optional(),
    size: z.string().optional(),
    isPublished: z.boolean().optional()
})

type FormPortofolioProps = {
    portofolio?: PortofolioTableType
    session?: Session
}

const FormPortofolio: React.FC<FormPortofolioProps> = ({
    portofolio,
    session
}) => {
    const router = useRouter()
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        setValue
    } = useForm<z.infer<typeof portofolioSchema>>({
        resolver: zodResolver(portofolioSchema)
    })

    const [isLoading, setIsLoading] = useState(false)
    const [submitError, setSubmitError] = useState<string | null>(null)
    const [fileImage, setFileImage] = useState<File | null>(null)
    const [selectedStyleDesign, setSelectedStyleDesign] = useState<
        StyleDesignType[]
    >([])
    const [isPublishedState, setIsPublishedState] = useState(
        portofolio?.isPublished || false
    )

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

    const onSubmit = async (data: z.infer<typeof portofolioSchema>) => {
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

            if (data.buildPrice && isNaN(parseInt(data.buildPrice))) {
                errors.buildPrice = {
                    type: 'manual',
                    message: 'Build Price harus berupa angka'
                }
                return
            }

            if (data.designPrice && isNaN(parseInt(data.designPrice))) {
                errors.designPrice = {
                    type: 'manual',
                    message: 'Design Price harus berupa angka'
                }
                return
            }

            const payload = {
                title: data.title,
                resume: data.resume,
                slug:
                    data.title.replace(/\s/g, '-').toLowerCase() +
                    Math.floor(1000 + Math.random() * 9000),
                content: data.content,
                image: data.image || null,
                buildPrice: data.buildPrice ? parseInt(data.buildPrice) : 0,
                client: data.client,
                designPrice: data.designPrice ? parseInt(data.designPrice) : 0,
                location: data.location,
                material: data.material,
                projectType: data.projectType,
                size: data.size,
                isPublished: data.isPublished || false,
                authorId: session?.user.id || null,
                styleDesigns: selectedStyleDesign.map(
                    styleDesign => styleDesign.id
                )
            }

            if (portofolio) {
                await fetch(`/api/cms/portofolio/${portofolio.slug}`, {
                    method: 'PATCH',
                    body: JSON.stringify({
                        title: payload.title,
                        resume: payload.resume,
                        slug: portofolio.slug,
                        content: payload.content,
                        image: payload.image,
                        buildPrice: payload.buildPrice,
                        client: payload.client,
                        designPrice: payload.designPrice,
                        location: payload.location,
                        material: payload.material,
                        projectType: payload.projectType,
                        size: payload.size,
                        isPublished: payload.isPublished,
                        styleDesigns: payload.styleDesigns
                    })
                })
            } else {
                await fetch('/api/cms/portofolio', {
                    method: 'POST',
                    body: JSON.stringify(payload)
                })
            }
            router.push('/admin/portofolio')
        } catch (error) {
            setSubmitError('Terjadi kesalahan saat menyimpan data artikel.')
            console.error(error)
        }
        setIsLoading(false)
    }

    const handleFileDrop = (file: File) => {
        setFileImage(file)
    }

    const handleStyleDesignChange = (styleDesign: StyleDesignType[]) => {
        setSelectedStyleDesign(styleDesign)
    }

    useEffect(() => {
        if (portofolio) {
            reset({
                title: portofolio.title,
                resume: portofolio.resume,
                image: portofolio.image || '',
                content: portofolio.content,
                isPublished: portofolio.isPublished,
                buildPrice: portofolio.buildPrice.toString(),
                client: portofolio.client,
                designPrice: portofolio.designPrice.toString(),
                location: portofolio.location,
                material: portofolio.material,
                projectType: portofolio.projectType,
                size: portofolio.size
            })
            setSelectedStyleDesign(
                portofolio.PortofolioStyle.map(item => item.style)
            )
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [portofolio])

    return (
        <form className='space-y-4 mt-5' onSubmit={handleSubmit(onSubmit)}>
            <DropzoneImage
                onFileDrop={handleFileDrop}
                initialImage={portofolio ? portofolio.image : ''}
            />
            <div className='input-group'>
                <label htmlFor='title'>Title:</label>
                <input type='text' id='title' {...register('title')} />
                {errors.title && (
                    <p className='text-red-500'>{errors.title.message}</p>
                )}
            </div>

            {/* resume */}
            <div className='input-group'>
                <label htmlFor='resume'>Resume:</label>
                <input type='text' id='resume' {...register('resume')} />
                {errors.resume && (
                    <p className='text-red-500'>{errors.resume.message}</p>
                )}
            </div>

            <div className='input-group'>
                <label htmlFor='content'>Content:</label>
                <TextEditor
                    content={portofolio ? portofolio.content : ''}
                    onContentChange={handleContentChange}
                />
                {errors.content && (
                    <p className='text-red-500'>{errors.content.message}</p>
                )}
            </div>

            <div className='input-group'>
                <label htmlFor='buildPrice'>Build Price:</label>
                <input
                    type='number'
                    id='buildPrice'
                    {...register('buildPrice')}
                />
                {errors.buildPrice && (
                    <p className='text-red-500'>{errors.buildPrice.message}</p>
                )}
            </div>

            <div className='input-group'>
                <label htmlFor='client'>Client:</label>
                <input type='text' id='client' {...register('client')} />
                {errors.client && (
                    <p className='text-red-500'>{errors.client.message}</p>
                )}
            </div>

            <div className='input-group'>
                <label htmlFor='designPrice'>Design Price:</label>
                <input
                    type='number'
                    id='designPrice'
                    {...register('designPrice')}
                />
                {errors.designPrice && (
                    <p className='text-red-500'>{errors.designPrice.message}</p>
                )}
            </div>

            <div className='input-group'>
                <label htmlFor='location'>Location:</label>
                <input type='text' id='location' {...register('location')} />
                {errors.location && (
                    <p className='text-red-500'>{errors.location.message}</p>
                )}
            </div>

            <div className='input-group'>
                <label htmlFor='material'>Material:</label>
                <input type='text' id='material' {...register('material')} />
                {errors.material && (
                    <p className='text-red-500'>{errors.material.message}</p>
                )}
            </div>

            <div className='input-group'>
                <label htmlFor='projectType'>Project Type:</label>
                <input
                    type='text'
                    id='projectType'
                    {...register('projectType')}
                />
                {errors.projectType && (
                    <p className='text-red-500'>{errors.projectType.message}</p>
                )}
            </div>

            <div className='input-group'>
                <label htmlFor='size'>Size:</label>
                <input type='text' id='size' {...register('size')} />
                {errors.size && (
                    <p className='text-red-500'>{errors.size.message}</p>
                )}
            </div>

            <div className='input-group'>
                <label htmlFor='styleDesign'>StyleDesign</label>
                <StyleDesignInput
                    initialStyleDesigns={
                        portofolio
                            ? portofolio.PortofolioStyle.map(item => item.style)
                            : []
                    }
                    onStyleDesignChange={handleStyleDesignChange}
                />
            </div>

            {/* isPublished */}
            <div className='input-group'>
                <label htmlFor='isPublished'>Published:</label>
                <label
                    htmlFor='isPublished'
                    className='relative inline-block h-8 w-14 cursor-pointer rounded-full bg-gray-300 transition [-webkit-tap-highlight-color:_transparent] has-[:checked]:bg-u-orange-500'>
                    <input
                        type='checkbox'
                        className='hidden peer'
                        id='isPublished'
                        onClick={() => setIsPublishedState(!isPublishedState)}
                        checked={isPublishedState}
                        {...register('isPublished')}
                    />

                    <span className='absolute inset-y-0 start-0 m-1 size-6 rounded-full bg-white transition-all peer-checked:start-6'></span>
                </label>
                {errors.isPublished && (
                    <p className='text-red-500'>{errors.isPublished.message}</p>
                )}
            </div>

            {submitError && <p className='text-red-500'>{submitError}</p>}
            <div className='flex items-center gap-3 justify-end'>
                <Link
                    href={'/admin/portofolio/'}
                    className='bg-zinc-100 hover:bg-zinc-200 text-zinc-500 font-semibold text-sm py-2 px-4 rounded'>
                    Cancel
                </Link>
                <button
                    type='submit'
                    disabled={isLoading}
                    className='bg-blue-500 hover:bg-blue-700 text-white font-semibold text-sm py-2 px-4 rounded disabled:opacity-60 disabled:cursor-not-allowed'>
                    {portofolio ? 'Simpan Perubahan' : 'Posting Portofolio'}
                </button>
            </div>
            {isLoading && <LoadingSpinner />}
        </form>
    )
}

export default FormPortofolio
