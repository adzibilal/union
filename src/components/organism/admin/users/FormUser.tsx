'use client'
import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { useRouter } from 'next/navigation'
import { UserTypeTable } from '@/types/admin/users/type'
import Image from 'next/image'
import Link from 'next/link'
import LoadingSpinner from '@/components/atoms/LoadingSpinner'

const userSchema = z.object({
    id: z.string().optional(),
    email: z.string().email({ message: 'Format email tidak valid' }),
    name: z
        .string()
        .min(1, { message: 'Nama harus diisi' })
        .max(255, { message: 'Nama terlalu panjang (maksimal 255 karakter)' }),
    image: z.string().optional(),
    isActive: z.boolean().optional(),
    role: z
        .enum(['USER', 'ADMIN'], {
            message: 'Role harus berupa USER atau ADMIN'
        })
        .optional()
})

type FormUserProps = {
    user?: UserTypeTable
}

const FormUser: React.FC<FormUserProps> = ({ user }) => {
    const router = useRouter()
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        setValue
    } = useForm<z.infer<typeof userSchema>>({
        resolver: zodResolver(userSchema)
    })

    const [submitError, setSubmitError] = useState<string | null>(null)
    const [previewImage, setPreviewImage] = useState<string | null>(null)
    const fileInputRef = React.useRef<HTMLInputElement>(null)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        if (user) {
            Object.entries(user).forEach(([key, value]) => {
                if (value !== null) {
                    setValue(key as keyof z.infer<typeof userSchema>, value)
                }
            })
            setPreviewImage(user.image)
        }
    }, [user, setValue])

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0]
        if (file) {
            setPreviewImage(URL.createObjectURL(file))
        } else {
            setPreviewImage(null) // Clear preview if no file selected
            setValue('image', '') // Clear image filename in form data
        }
    }

    const handleUploadImage = async () => {
        const file = fileInputRef.current?.files?.[0] // Add null check for e.target.files
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
    }

    const onSubmit = async (data: z.infer<typeof userSchema>) => {
        setIsLoading(true)
        try {
            // if file input is not empty, upload the file
            if (fileInputRef.current?.files?.length) {
                const imageUrl = await handleUploadImage()
                if (imageUrl === 'error') {
                    setSubmitError('Terjadi kesalahan saat mengunggah gambar')
                    return
                } else {
                    // set image url to data
                    data.image = imageUrl
                }
            }
            if (user) {
                await fetch(`/api/cms/users/${user.id}`, {
                    method: 'PATCH',
                    body: JSON.stringify({
                        email: data.email,
                        name: data.name,
                        role: data.role,
                        isActive: data.isActive,
                        image: data.image
                    })
                })
            } else {
                await fetch('/api/cms/users', {
                    method: 'POST',
                    body: JSON.stringify(data)
                })
            }
            router.push('/admin/users')
        } catch (error) {
            setSubmitError('Terjadi kesalahan saat menyimpan data pengguna.')
            console.error(error)
        }
        setIsLoading(false)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='space-y-4 mt-5'>
            {previewImage && (
                <Image
                    src={previewImage}
                    alt='Preview'
                    width={200}
                    height={200}
                    className='w-40 h-w-40 aspect-square object-cover rounded-full'
                />
            )}
            {/* image */}
            <div className='input-group'>
                <label htmlFor='image'>Image:</label>
                <input
                    type='file'
                    accept='image/*'
                    id='image'
                    ref={fileInputRef}
                    onChange={handleImageChange}
                />
            </div>
            <div className='input-group'>
                <label htmlFor='email'>Email:</label>
                <input type='email' id='email' {...register('email')} />
                {errors.email && (
                    <p className='text-red-500'>{errors.email.message}</p>
                )}
            </div>

            <div className='input-group'>
                <label htmlFor='name'>Nama:</label>
                <input type='text' id='name' {...register('name')} />
                {errors.name && (
                    <p className='text-red-500'>{errors.name.message}</p>
                )}
            </div>

            <div className='input-group'>
                <label htmlFor='role'>Role:</label>
                <select id='role' {...register('role')}>
                    <option value='USER'>User</option>
                    <option value='ADMIN'>Admin</option>
                </select>
                {errors.role && (
                    <p className='text-red-500'>{errors.role.message}</p>
                )}
            </div>

            {submitError && <p className='text-red-500'>{submitError}</p>}
            <div className='flex items-center gap-3 justify-end'>
                <Link
                    href={'/admin/users/'}
                    className='bg-zinc-100 hover:bg-zinc-200 text-zinc-500 font-semibold text-sm py-2 px-4 rounded'>
                    Cancel
                </Link>
                <button
                    type='submit'
                    disabled={isLoading}
                    className='bg-blue-500 hover:bg-blue-700 text-white font-semibold text-sm py-2 px-4 rounded disabled:opacity-60 disabled:cursor-not-allowed'>
                    {user ? 'Simpan Perubahan' : 'Buat Pengguna'}
                </button>
            </div>
            {isLoading && <LoadingSpinner />}
        </form>
    )
}

export default FormUser
