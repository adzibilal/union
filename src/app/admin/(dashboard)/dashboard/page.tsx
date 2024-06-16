import StatisticDashboard from '@/components/organism/admin/dashboard/StatisticDashboard'
import { getSession } from '@/lib'
import { redirect } from 'next/navigation'

const DashboardPage = async () => {
    const session = await getSession()

    if (!session) {
        redirect('/admin/sign-in')
    }

    return (
        <div className='p-6'>
            <p className='mt-4'>Hello, {session.user.name}</p>
            <h1 className='text-2xl font-bold mb-4'>
                Welcome to the Admin Dashboard
            </h1>

           <StatisticDashboard />
        </div>
    )
}

export default DashboardPage
