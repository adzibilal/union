import { CategoryType } from '@/types/admin/articles/type'
import React, { use, useEffect } from 'react'

interface ModalFormCategoryProps {
    isOpen: boolean
    initialValues?: CategoryType | null
    onClose: () => void
    onChange: () => void
}

const ModalFormCategory: React.FC<ModalFormCategoryProps> = ({
    isOpen,
    initialValues,
    onClose,
    onChange
}) => {
    const [isLoading, setIsLoading] = React.useState(false)
    const [name, setName] = React.useState('')

    const handleSubmitFormCategory = async () => {
        setIsLoading(true)
        try {
            if (initialValues) {
                // Update category
                await fetch(`/api/cms/categories/${initialValues.id}`, {
                    method: 'PATCH',
                    body: JSON.stringify({
                        name: name
                    })
                })
            } else {
                // Create category
                await fetch('/api/cms/categories', {
                    method: 'POST',
                    body: JSON.stringify({
                        name: name
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
                        <h1 className='text-lg font-semibold'>Form Category</h1>
                        <form
                            className='mt-5'
                            onSubmit={e => {
                                e.preventDefault()
                                handleSubmitFormCategory()
                            }}>
                            <div className='grid grid-cols-1 gap-5'>
                                <div>
                                    <label className='block text-sm font-medium text-gray-700'>
                                        Name
                                    </label>
                                    <input
                                        onChange={e => setName(e.target.value)}
                                        value={name}
                                        type='text'
                                        className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                                    />
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
                                        ? 'Update Category'
                                        : 'Create Category'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ModalFormCategory
