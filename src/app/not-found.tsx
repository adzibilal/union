import Footer from '@/components/organism/Footer'
import Navbar from '@/components/organism/Navbar'
import Link from 'next/link'

function NotFoundPage() {
    return (
        <div className=''>
            <Navbar />
            <div className="flex justify-center items-center h-[70vh] bg-[url('/assets/images/sliders/2.jpg')] bg-cover -mb-36">
                <div className='w-full max-w-lg bg-zinc-900/40 flex items-center justify-center flex-col py-10 max-sm:mx-6'>
                    <h1 className='text-5xl font-bold text-white'>ERROR 404</h1>
                    <p className='text-white'>PAGE NOT FOUND, PLEASE GO BACK</p>

                    <Link
                        href='/'
                        className='mt-5 bg-u-orange-500 hover:bg-u-orange-300 cursor-pointer text-white px-5 py-2'>
                        GO BACK
                    </Link>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default NotFoundPage
