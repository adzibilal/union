
import { getSession } from '@/lib'
import { redirect } from 'next/navigation'

const DashboardPage = async () => {
    const session = await getSession()

    if (!session) {
        redirect('/admin/sign-in')
    }

    return (
        <div>
            <h1 className='text-2xl font-bold'>Welcome to the Admin Dashboard</h1>
            <p className='mt-4'>Hello, {session.user.name}</p>

            {/* tampikan expire */}
            <p>Session expires on: {session.expires.toString()}</p>
        </div>
    )
}

export default DashboardPage
