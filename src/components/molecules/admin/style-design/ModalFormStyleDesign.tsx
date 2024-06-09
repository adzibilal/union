import { StyleDesignType } from '@/types/admin/portofolio/type'
import React, { use, useEffect } from 'react'

interface ModalFormStyleDesignProps {
    isOpen: boolean
    initialValues?: StyleDesignType | null
    onClose: () => void
    onChange: () => void
}

const ModalFormStyleDesign: React.FC<ModalFormStyleDesignProps> = ({
    isOpen,
    initialValues,
    onClose,
    onChange
}) => {
    const [isLoading, setIsLoading] = React.useState(false)
    const [name, setName] = React.useState('')
    const [description, setDescription] = React.useState('')

    const handleSubmitFormStyleDesign = async () => {
        setIsLoading(true)
        try {
            if (initialValues) {
                // Update category
                await fetch(`/api/cms/style-design/${initialValues.id}`, {
                    method: 'PATCH',
                    body: JSON.stringify({
                        name: name,
                        description: description
                    })
                })
            } else {
                // Create category
                await fetch('/api/cms/style-design', {
                    method: 'POST',
                    body: JSON.stringify({
                        name: name,
                        description: description
                    })
                })
            }
            setName('')
            onClose()
            onChange()
        } catch (error) {
            console.error(error)
        }
        setIsLoading(false)
    }

    const closeModal = () => {
        setName('')
        setIsLoading(false)
        onClose()
    }

    useEffect(() => {
        console.error(initialValues)
        if (initialValues) {
            setName(initialValues.name)
        }
    }, [initialValues])

    return (
        <div className=''>
            {isOpen && (
                <div className='fixed inset-0 z-10 bg-black bg-opacity-50 flex justify-center items-center'>
                    <div className='bg-white p-5 rounded-md w-full max-w-screen-md'>
                        <h1 className='text-lg font-semibold'>
                            Form StyleDesign
                        </h1>
                        <form
                            className='mt-5'
                            onSubmit={e => {
                                e.preventDefault()
                                handleSubmitFormStyleDesign()
                            }}>
                            <div className='grid grid-cols-1 gap-5'>
                                <div className='input-group'>
                                    <label>Name</label>
                                    <input
                                        onChange={e => setName(e.target.value)}
                                        value={name}
                                        type='text'
                                    />
                                </div>

                                <div className='input-group'>
                                    <label>Description</label>
                                    <textarea
                                        onChange={e =>
                                            setDescription(e.target.value)
                                        }
                                        value={description}
                                        className='h-24'></textarea>
                                </div>
                            </div>
                            <div className='flex justify-end gap-3 items-center mt-5'>
                                <button
                                    type='button'
                                    onClick={closeModal}
                                    className='bg-zinc-100 hover:bg-zinc-200 text-zinc-500 font-semibold text-sm py-2 px-4 rounded'>
                                    Close
                                </button>
                                <button
                                    type='submit'
                                    disabled={isLoading}
                                    className='bg-blue-500 hover:bg-blue-700 text-white font-semibold text-sm py-2 px-4 rounded disabled:opacity-60 disabled:cursor-not-allowed'>
                                    {isLoading
                                        ? 'Loading...'
                                        : initialValues
                                        ? 'Update StyleDesign'
                                        : 'Create StyleDesign'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ModalFormStyleDesign
