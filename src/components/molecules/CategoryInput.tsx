'use client'
import { CategoryType } from '@/types/admin/articles/type'
import React, { useEffect, useState } from 'react'

interface CategoryInputProps {
    onCategoryChange: (categories: CategoryType[]) => void
    initialCategories?: CategoryType[]
}

const CategoryInput: React.FC<CategoryInputProps> = ({
    onCategoryChange,
    initialCategories
}) => {
    const [categories, setCategories] = useState<CategoryType[]>([])
    const [selectedCategories, setSelectedCategories] = useState<
        CategoryType[]
    >(initialCategories || [])

    const getCategories = async () => {
        try {
            const response = await fetch('/api/cms/categories')
            const data = await response.json()
            setCategories(data.categories)
        } catch (error) {
            console.error('Error fetching categories:', error)
        }
    }

    useEffect(() => {
        getCategories()
    }, [])

    useEffect(() => {
        onCategoryChange(selectedCategories)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedCategories])

    const handleCheckboxChange = (category: CategoryType) => {
        setSelectedCategories(prevState => {
            if (prevState.some(selected => selected.id === category.id)) {
                return prevState.filter(selected => selected.id !== category.id)
            } else {
                return [...prevState, category]
            }
        })
    }

    return (
        <div className='border p-3 rounded-md'>
            <fieldset>
                <div className='flex gap-3 items-center flex-wrap'>
                    {categories &&
                        categories.map(category => (
                            <label
                                key={category.id}
                                htmlFor={category.name}
                                className='flex cursor-pointer items-start gap-4 rounded-lg border border-gray-200 p-4 transition hover:bg-gray-50 has-[:checked]:bg-blue-50'>
                                <div className='flex items-center'>
                                    &#8203;
                                    <input
                                        type='checkbox'
                                        className='size-4 rounded border-gray-300'
                                        id={category.name}
                                        checked={selectedCategories.some(
                                            selected =>
                                                selected.id === category.id
                                        )}
                                        onChange={() =>
                                            handleCheckboxChange(category)
                                        }
                                    />
                                </div>

                                <div>
                                    <strong className='font-medium text-gray-900'>
                                        {' '}
                                        {category.name}{' '}
                                    </strong>
                                </div>
                            </label>
                        ))}
                </div>
            </fieldset>
        </div>
    )
}

export default CategoryInput
