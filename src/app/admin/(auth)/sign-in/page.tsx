'use client'
import LoadingSpinner from '@/components/atoms/LoadingSpinner'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import toast from 'react-hot-toast'

const SignPage = () => {
    const router = useRouter()
    const [isLoading, setIsLoading] = React.useState(false)

    const signIn = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsLoading(true)
        const formData = new FormData(e.currentTarget)
        const email = formData.get('email') as string
        const password = formData.get('password') as string

        const response = await fetch('/api/cms/sign-in', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        })

        if (response.ok) {
            router.replace('/admin/dashboard')
        } else {
            const message = await response.text()
            console.error(message)
            toast.error(message)
        }
        setIsLoading(false)
    }

    return (
        <div>
            <h2 className='mb-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>
                Sign in to your account
            </h2>
            <form
                className='space-y-6'
                onSubmit={e => {
                    signIn(e)
                }}
                method='POST'>
                <div>
                    <label
                        htmlFor='email'
                        className='block text-sm font-medium leading-6 text-gray-900'>
                        Email
                    </label>
                    <div className='mt-2'>
                        <input
                            id='email'
                            name='email'
                            type='email'
                            autoComplete='email'
                            required
                            className='block px-3 w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                        />
                    </div>
                </div>

                <div>
                    <div className='flex items-center justify-between'>
                        <label
                            htmlFor='password'
                            className='block text-sm font-medium leading-6 text-gray-900'>
                            Password
                        </label>
                    </div>
                    <div className='mt-2'>
                        <input
                            id='password'
                            name='password'
                            type='password'
                            autoComplete='current-password'
                            required
                            className='block px-3 w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                        />
                    </div>
                </div>

                <div>
                    <button
                        type='submit'
                        disabled={isLoading}
                        className='flex w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed rounded-md bg-u-orange-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
                        {isLoading ? 'Signing in...' : 'Sign in'}
                    </button>
                </div>
            </form>

            {isLoading && <LoadingSpinner />}
        </div>
    )
}

export default SignPage
