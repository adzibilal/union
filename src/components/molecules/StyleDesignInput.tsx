'use client'
import { StyleDesignType } from '@/types/admin/portofolio/type'
import React, { useEffect, useState } from 'react'

interface StyleDesignInputProps {
    onStyleDesignChange: (StyleDesigns: StyleDesignType[]) => void
    initialStyleDesigns?: StyleDesignType[]
}

const StyleDesignInput: React.FC<StyleDesignInputProps> = ({
    onStyleDesignChange,
    initialStyleDesigns
}) => {
    const [StyleDesigns, setStyleDesigs] = useState<StyleDesignType[]>([])
    const [selectedStyleDesigns, setSelectedStyleDesigs] = useState<
        StyleDesignType[]
    >(initialStyleDesigns || [])

    const getStyleDesigs = async () => {
        try {
            const response = await fetch('/api/cms/style-design')
            const data = await response.json()
            setStyleDesigs(data.styleDesigns)
        } catch (error) {
            console.error('Error fetching StyleDesigns:', error)
        }
    }

    useEffect(() => {
        getStyleDesigs()
    }, [])

    useEffect(() => {
        onStyleDesignChange(selectedStyleDesigns)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedStyleDesigns])

    const handleCheckboxChange = (StyleDesign: StyleDesignType) => {
        setSelectedStyleDesigs(prevState => {
            if (prevState.some(selected => selected.id === StyleDesign.id)) {
                return prevState.filter(selected => selected.id !== StyleDesign.id)
            } else {
                return [...prevState, StyleDesign]
            }
        })
    }

    return (
        <div className='border p-3 rounded-md'>
            <fieldset>
                <div className='flex gap-3 items-center flex-wrap'>
                    {StyleDesigns &&
                        StyleDesigns.map(StyleDesign => (
                            <label
                                key={StyleDesign.id}
                                htmlFor={StyleDesign.name}
                                className='flex cursor-pointer items-start gap-4 rounded-lg border border-gray-200 p-4 transition hover:bg-gray-50 has-[:checked]:bg-blue-50'>
                                <div className='flex items-center'>
                                    &#8203;
                                    <input
                                        type='checkbox'
                                        className='size-4 rounded border-gray-300'
                                        id={StyleDesign.name}
                                        checked={selectedStyleDesigns.some(
                                            selected =>
                                                selected.id === StyleDesign.id
                                        )}
                                        onChange={() =>
                                            handleCheckboxChange(StyleDesign)
                                        }
                                    />
                                </div>

                                <div>
                                    <strong className='font-medium text-gray-900'>
                                        {' '}
                                        {StyleDesign.name}{' '}
                                    </strong>
                                </div>
                            </label>
                        ))}
                </div>
            </fieldset>
        </div>
    )
}

export default StyleDesignInput
