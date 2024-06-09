'use client'
import { UserTypeTable } from '@/types/admin/users/type'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
import LoadingSpinner from '../../LoadingSpinner'
import toast from 'react-hot-toast'
import { StyleDesignType } from '@/types/admin/portofolio/type'

interface StyleDesignListItemProps {
    styleDesign: StyleDesignType
    onChange: () => void
    onEdit: (styleDesign: StyleDesignType) => void
}

const StyleDesignListItem: React.FC<StyleDesignListItemProps> = props => {
    const [isLoading, setIsLoading] = React.useState(false)
    const handleDeleteStyleDesign = async () => {
        setIsLoading(true)
        const conf = confirm('Apakah anda yakin ingin menghapus styleDesign ini?')
        if (!conf) return
        try {
            const response = await fetch(
                `/api/cms/categories/${props.styleDesign.id}`,
                {
                    method: 'DELETE'
                }
            )

            if (response.ok) {
                toast.success('StyleDesign berhasil dihapus')
            } else {
                toast.error(
                    'Gagal menghapus styleDesign, styleDesign masih digunakan pada artikel'
                )
            }
        } catch (error) {
            console.error('[DELETE USER]', error)
            toast.error('Gagal menghapus styleDesign')
        } finally {
            props.onChange()
        }
        setIsLoading(false)
    }

    return (
        <div
            className={`bg-zinc-50 px-3 py-2 rounded-md flex justify-between items-center group`}>
            <div className='flex items-center gap-2'>
                <p className='font-semibold'>{props.styleDesign.name}</p>
            </div>

            {/* actions item */}
            <div className='items-center gap-3 hidden group-hover:flex'>
                <div
                    onClick={() => props.onEdit(props.styleDesign)}
                    className='text-blue-500 font-semibold'>
                    <FaEdit />
                </div>
                <button
                    className='text-red-500 font-semibold'
                    onClick={() => handleDeleteStyleDesign()}>
                    <FaTrash />
                </button>
            </div>
            {isLoading && <LoadingSpinner />}
        </div>
    )
}

export default StyleDesignListItem
