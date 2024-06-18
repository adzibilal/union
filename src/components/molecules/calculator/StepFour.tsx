'use cient'
import { useTranslations } from 'next-intl'
import React from 'react'
import { FaEnvelope, FaMailBulk, FaUser } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'

interface dataContactInfo {
    name: string
    email: string
    location: string
}

interface StepFourProps {
    onNext: () => void
    onPrev: () => void
    data: dataContactInfo
    onChange: (data: dataContactInfo) => void
    handleSubmit: () => void
}

const StepFour: React.FC<StepFourProps> = ({
    onNext,
    onPrev,
    data,
    onChange,
    handleSubmit
}) => {
    const [dataContact, setDataContact] = React.useState<dataContactInfo>(data)

    React.useEffect(() => {
        onChange(dataContact)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dataContact])

    const t = useTranslations('CalculatorDesign.steps.stepFour')

    return (
        <div className='py-10'>
            <div className='text-3xl mb-8 text-center'>
                {t('title')}
            </div>

            <div className='grid grid-cols-1 gap-4'>
                <div>
                    <label
                        htmlFor='name'
                        className='text-gray-700 flex items-center gap-2 pl-3'>
                        <FaUser />
                        {t('fields.name')}
                    </label>
                    <input
                        type='text'
                        id='name'
                        className='w-full border border-gray-200 rounded-lg px-3 py-2 mt-1'
                        value={dataContact.name}
                        onChange={e =>
                            setDataContact({
                                ...dataContact,
                                name: e.target.value
                            })
                        }
                    />
                </div>

                <div>
                    <label
                        htmlFor='email'
                        className='text-gray-700 flex items-center gap-2 pl-3'>
                        <FaEnvelope />
                        {t('fields.email')}
                    </label>
                    <input
                        type='email'
                        id='email'
                        className='w-full border border-gray-200 rounded-lg px-3 py-2 mt-1'
                        value={dataContact.email}
                        onChange={e =>
                            setDataContact({
                                ...dataContact,
                                email: e.target.value
                            })
                        }
                    />
                </div>

                <div>
                    <label
                        htmlFor='location'
                        className='text-gray-700 flex items-center gap-2 pl-3'>
                        <FaLocationDot />
                        {t('fields.location')}
                    </label>
                    <input
                        type='text'
                        id='location'
                        className='w-full border border-gray-200 rounded-lg px-3 py-2 mt-1'
                        value={dataContact.location}
                        onChange={e =>
                            setDataContact({
                                ...dataContact,
                                location: e.target.value
                            })
                        }
                    />
                </div>
            </div>

            <div className='flex gap-3 mt-10 justify-center'>
                <button
                    disabled={
                        !dataContact.name ||
                        !dataContact.email ||
                        !dataContact.location
                    }
                    onClick={handleSubmit}
                    className='bg-u-orange-500 text-white px-6 py-3 uppercase mt-3 cursor-pointer hover:bg-u-orange-500/90 disabled:opacity-50 disabled:cursor-not-allowed'>
                    {t('submitButton')}
                </button>
            </div>
        </div>
    )
}

export default StepFour
