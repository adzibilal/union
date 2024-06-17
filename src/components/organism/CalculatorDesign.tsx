'use client'
import React from 'react'
import StepOne from '../molecules/calculator/StepOne'
import StepTwo from '../molecules/calculator/StepTwo'
import StepThree from '../molecules/calculator/StepThree'
import StepFour from '../molecules/calculator/StepFour'
import Result from '../molecules/calculator/Result'

interface payloadCalculator {
    roomType: string
    roomToDesign: {
        ruangTamu: number
        livingRoom: number
        kitchen: number
        bedroom: number
        bathroom: number
        diningRoom: number
        otherBedroom: number
    }
    budget: string
    contactInfo: {
        name: string
        email: string
        location: string
    }
}

const CalculatorDesign = () => {
    const [currentStep, setCurrentStep] = React.useState(0)
    const [payload, setPayload] = React.useState<payloadCalculator>({
        roomType: '',
        roomToDesign: {
            ruangTamu: 1,
            livingRoom: 1,
            kitchen: 1,
            bedroom: 1,
            bathroom: 1,
            diningRoom: 0,
            otherBedroom: 1
        },
        budget: '',
        contactInfo: {
            name: '',
            email: '',
            location: ''
        }
    })

    const submit = () => {
        const roomToDesignMessage = Object.entries(payload.roomToDesign)
            .map(([room, count]) => `${room}: ${count}`)
            .join('%0A')

        const waMessage =
            `Nama: ${payload.contactInfo.name}%0A` +
            `Email: ${payload.contactInfo.email}%0A` +
            `Lokasi: ${payload.contactInfo.location}%0A` +
            `Room Type: ${payload.roomType}%0A` +
            `Room To Design:%0A${roomToDesignMessage}%0A` +
            `Budget: ${payload.budget}`

        const waLink = `https://wa.me/6285156510302?text=${waMessage}`

        window.open(waLink, '_blank')
        setCurrentStep(4)
    }

    const handleFinish = () => {
        setPayload({
            roomType: '',
            roomToDesign: {
                ruangTamu: 1,
                livingRoom: 1,
                kitchen: 1,
                bedroom: 1,
                bathroom: 1,
                diningRoom: 0,
                otherBedroom: 1
            },
            budget: '',
            contactInfo: {
                name: '',
                email: '',
                location: ''
            }
        })
        setCurrentStep(0)
    }
    return (
        <div>
            {currentStep === 0 ? (
                <StepOne
                    onNext={() => {
                        setCurrentStep(1)
                    }}
                    onPrev={() => {}}
                    selected={payload.roomType}
                    onSelect={(selected: string) => {
                        setPayload({ ...payload, roomType: selected })
                    }}
                />
            ) : currentStep === 1 ? (
                <StepTwo
                    onNext={() => {
                        setCurrentStep(2)
                    }}
                    onPrev={() => {
                        setCurrentStep(0)
                    }}
                    data={payload.roomToDesign}
                    onChange={data => {
                        setPayload({ ...payload, roomToDesign: data })
                    }}
                />
            ) : currentStep === 2 ? (
                <StepThree
                    onNext={() => {
                        setCurrentStep(3)
                    }}
                    onPrev={() => {
                        setCurrentStep(1)
                    }}
                    selected={payload.budget}
                    onSelect={(selected: string) => {
                        setPayload({ ...payload, budget: selected })
                    }}
                />
            ) : currentStep === 3 ? (
                <StepFour
                    onNext={() => {
                        setCurrentStep(4)
                    }}
                    onPrev={() => {
                        setCurrentStep(2)
                    }}
                    data={payload.contactInfo}
                    onChange={data => {
                        setPayload({ ...payload, contactInfo: data })
                    }}
                    handleSubmit={() => {
                        submit()
                    }}
                />
            ) : (
                <Result onFinish={handleFinish} />
            )}
        </div>
    )
}

export default CalculatorDesign
