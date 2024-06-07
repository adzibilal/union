'use client'
import { UserTypeTable } from '@/types/admin/users/type'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
import LoadingSpinner from '../../LoadingSpinner'
import { CategoryType } from '@/types/admin/articles/type'
import toast from 'react-hot-toast'

interface CategoryListItemProps {
    category: CategoryType
    onChange: () => void
    onEdit: (category: CategoryType) => void
}

const CategoryListItem: React.FC<CategoryListItemProps> = props => {
    const [isLoading, setIsLoading] = React.useState(false)
    const handleDeleteCategory = async () => {
        setIsLoading(true)
        const conf = confirm('Apakah anda yakin ingin menghapus category ini?')
        if (!conf) return
        try {
            const response = await fetch(
                `/api/cms/categories/${props.category.id}`,
                {
                    method: 'DELETE'
                }
            )

            if (response.ok) {
                toast.success('Category berhasil dihapus')
            } else {
                toast.error(
                    'Gagal menghapus category, category masih digunakan pada artikel'
                )
            }
        } catch (error) {
            console.error('[DELETE USER]', error)
            toast.error('Gagal menghapus category')
        } finally {
            props.onChange()
        }
        setIsLoading(false)
    }

    return (
        <div
            className={`bg-zinc-50 px-3 py-2 rounded-md flex justify-between items-center group`}>
            <div className='flex items-center gap-2'>
                <p className='font-semibold'>{props.category.name}</p>
            </div>

            {/* actions item */}
            <div className='items-center gap-3 hidden group-hover:flex'>
                <div
                    onClick={() => props.onEdit(props.category)}
                    className='text-blue-500 font-semibold'>
                    <FaEdit />
                </div>
                <button
                    className='text-red-500 font-semibold'
                    onClick={() => handleDeleteCategory()}>
                    <FaTrash />
                </button>
            </div>
            {isLoading && <LoadingSpinner />}
        </div>
    )
}

export default CategoryListItem
