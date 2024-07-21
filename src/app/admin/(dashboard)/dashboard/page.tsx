import StatisticDashboard from '@/components/organism/admin/dashboard/StatisticDashboard'
import { getSession } from '@/lib'
import Link from 'next/link'
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

            {!session.user.hasResetPassword && (
                <div
                    className='bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-5 '
                    role='alert'>
                    <div className=''>
                        <strong className='font-bold'>Warning! </strong>
                        <span className='block sm:inline'>
                            Reset your password to secure your account.
                        </span>
                    </div>
                    <Link
                        href='/admin/change-pass'
                        className='absolute right-0 top-0 bottom-0 px-4 py-3'>
                        <span className='text-blue-500 hover:text-blue-400'>Reset Now</span>
                    </Link>
                </div>
            )}

            <StatisticDashboard />
        </div>
    )
}

export default DashboardPage
