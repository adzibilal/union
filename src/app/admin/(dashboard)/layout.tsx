import Navbar from '@/components/organism/admin/Navbar'
import SideBar from '@/components/organism/admin/SideBar'
import { getSession } from '@/lib'
import { redirect } from 'next/navigation'
import React from 'react'

export default async function DashboardLayout({
    children
}: Readonly<{
    children: React.ReactNode
}>) {
   
    return (
        <div className='grid grid-cols-[250px_1fr] h-screen bg-zinc-50'>
            {/* sidebar */}
            <SideBar />

            <div className=''>
                {/* navbar */}
                <Navbar />
                {children}
            </div>
        </div>
    )
}
