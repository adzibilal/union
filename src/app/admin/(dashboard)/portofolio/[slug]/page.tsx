'use client'
import Breadcrumb from '@/components/molecules/admin/Breadcrumb'
import FormPortofolio from '@/components/organism/admin/portofolio/FormPortofolio'
import { getSession } from '@/lib'
import { PortofolioTableType } from '@/types/admin/portofolio/type'
import { redirect, useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const EditPortofolioPage = () => {
    const { slug } = useParams<{ slug: string }>()
    const [portofolio, setPortofolio] = useState<PortofolioTableType | null>(null)

    const getPortofolio = async () => {
        try {
            const response = await fetch(`/api/cms/portofolio/${slug}`)
            const data = await response.json()
            setPortofolio(data)
        } catch (error) {
            console.error('[GET PORTOFOLIO BY ID]', error)
        }
    }

    useEffect(() => {
        getPortofolio()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const items = [
        { href: '/admin/dashboard', children: 'Dashboard' },
        { href: '/admin/portofolio', children: 'Portofolios' },
        { children: 'Edit Portofolio' }
    ]
    return (
        <div className='p-5 w-full bg-zinc-50'>
            <div className='mb-5'>
                <Breadcrumb items={items} />
            </div>

            <div className='bg-white shadow-sm border rounded-md w-full p-6 max-w-screen-md mx-auto'>
                <div className='text-zinc-900 text-3xl font-semibold'>
                    Edit Portofolio
                </div>
                {portofolio && <FormPortofolio portofolio={portofolio} />}
            </div>
        </div>
    )
}

export default EditPortofolioPage
