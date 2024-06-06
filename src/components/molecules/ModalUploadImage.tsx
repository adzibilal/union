import Image from 'next/image'
import React, { useRef, useState } from 'react'
import { FaImage } from 'react-icons/fa'

interface ModalUploadImageProps {
    isOpen: boolean
    onClose: () => void
    onImageUploaded: (url: string) => void
}

const ModalUploadImage: React.FC<ModalUploadImageProps> = ({
    isOpen,
    onClose,
    onImageUploaded
}) => {
    const fileInputUpload = useRef<HTMLInputElement>(null) // Move useRef outside of handleUploadImage function
    const [previewImage, setPreviewImage] = useState<string | null>(null)

    const handleUploadImage = async () => {
        const file = fileInputUpload.current?.files?.[0] // Add null check for e.target.files
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
            await onImageUploaded(imageUrl)
            setPreviewImage(null)
            onClose()
        } catch (error) {
            console.error(error)
            return 'error'
        }
    }

    const handleChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (file) {
            setPreviewImage(URL.createObjectURL(file))
        } else {
            setPreviewImage(null) // Clear preview if no file selected
        }
    }

    return (
        <div className=''>
            {isOpen && (
                <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50'>
                    <div className='bg-white p-5 rounded-lg w-96'>
                        <h1 className='text-xl font-bold'>Upload Image</h1>
                        <div
                            className='my-5 w-full cursor-pointer'
                            onClick={() => fileInputUpload.current?.click()}>
                            {previewImage ? (
                                <Image
                                    src={previewImage}
                                    alt='preview'
                                    width={500}
                                    height={200}
                                    className='w-full object-cover rounded-md my-5'
                                />
                            ) : (
                                <div className='rounded-md aspect-video w-full bg-zinc-200 flex items-center justify-center'>
                                    <FaImage className='text-zinc-400 text-4xl' />
                                </div>
                            )}
                        </div>
                        <input
                            type='file'
                            accept='image/*'
                            className='hidden'
                            ref={fileInputUpload} // Add ref to input element
                            onChange={e => {
                                handleChangeImage(e)
                            }}
                        />
                        <div className='flex justify-end gap-3 items-center mt-5'>
                            <button
                                type='button'
                                onClick={onClose}
                                className='bg-zinc-100 hover:bg-zinc-200 text-zinc-500 font-semibold text-sm py-2 px-4 rounded'>
                                Close
                            </button>
                            <button
                                type='button'
                                onClick={handleUploadImage}
                                className='bg-blue-500 hover:bg-blue-700 text-white font-semibold text-sm py-2 px-4 rounded'>
                                Upload
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ModalUploadImage
