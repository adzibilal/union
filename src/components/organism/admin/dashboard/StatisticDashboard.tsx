'use client'
import React from 'react'
import { BiCategory } from 'react-icons/bi'
import { FaBuilding, FaNewspaper, FaUsers } from 'react-icons/fa'

interface StatisticType {
    totalUsers: number
    totalPortofolio: number
    totalArticle: number
    totalCategoryStyle: number
}

const StatisticDashboard = () => {
    const [statistic, setStatistic] = React.useState<StatisticType>({
        totalUsers: 0,
        totalPortofolio: 0,
        totalArticle: 0,
        totalCategoryStyle: 0
    })

    const fetchStatistic = async () => {
        const response = await fetch('/api/cms/dashboard')
        const data = await response.json()
        setStatistic(data)
        console.debug(data)
    }

    React.useEffect(() => {
        fetchStatistic()
    }, [])

    return (
        <div className='grid grid-cols-4 max-xl:grid-cols-2 max-md:grid-cols-1 gap-3'>
            <div className='bg-white shadow-sm p-3 border flex justify-between items-center '>
                <div className='bg-u-orange-500/20 text-u-orange-500 p-3 text-4xl w-max'>
                    <FaUsers />
                </div>
                <div className='flex flex-col items-end'>
                    <div className='text-2xl font-bold'>
                        {statistic.totalUsers}
                    </div>
                    <div className='text-xs text-right'>Total Users</div>
                </div>
            </div>
            <div className='bg-white shadow-sm p-3 border flex justify-between items-center '>
                <div className='bg-u-orange-500/20 text-u-orange-500 p-3 text-4xl w-max'>
                    <FaBuilding />
                </div>
                <div className='flex flex-col items-end'>
                    <div className='text-2xl font-bold'>
                        {statistic.totalPortofolio}
                    </div>
                    <div className='text-xs text-right'>Total Portofolio</div>
                </div>
            </div>
            <div className='bg-white shadow-sm p-3 border flex justify-between items-center '>
                <div className='bg-u-orange-500/20 text-u-orange-500 p-3 text-4xl w-max'>
                    <FaNewspaper />
                </div>
                <div className='flex flex-col items-end'>
                    <div className='text-2xl font-bold'>
                        {statistic.totalArticle}
                    </div>
                    <div className='text-xs text-right'>Total Article</div>
                </div>
            </div>
            <div className='bg-white shadow-sm p-3 border flex justify-between items-center '>
                <div className='bg-u-orange-500/20 text-u-orange-500 p-3 text-4xl w-max'>
                    <BiCategory />
                </div>
                <div className='flex flex-col items-end'>
                    <div className='text-2xl font-bold'>
                        {statistic.totalCategoryStyle}
                    </div>
                    <div className='text-xs text-right'>Total Category Style</div>
                </div>
            </div>
        </div>
    )
}

export default StatisticDashboard
