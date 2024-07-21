'use client'
import { Session } from '@/lib'
import React, { useState } from 'react'
import toast from 'react-hot-toast'

interface FormChangePassProps {
    session: Session
}

const FormChangePass: React.FC<FormChangePassProps> = ({ session }) => {
    const [userId, setUserId] = useState(session.user.id)
    const [currentPassword, setCurrentPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const handleChangePassword = async () => {
        if (newPassword !== confirmPassword) {
            toast.error('Confirm Password not match')
            return
        }
        setIsLoading(true)
        try {
            await fetch('/api/change-password', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ userId, currentPassword, newPassword })
            })
            toast.success('Password changed successfully')
        } catch (error) {
            toast.error('Failed to change password')
            console.error('[CHANGE PASSWORD ERROR]', error)
        } finally {
            setIsLoading(false)
        }
    }
    return (
        <div className='bg-white shadow-sm border rounded-md w-full p-6 max-w-screen-sm mx-auto'>
            <div className='text-zinc-900 text-3xl font-semibold'>
                Change Password
            </div>
            <div className='mt-4 flex flex-col gap-4'>
                <div className='input-group'>
                    <label htmlFor='title'>Current Password</label>
                    <input
                        type='password'
                        placeholder='Current Password'
                        value={currentPassword}
                        onChange={e => setCurrentPassword(e.target.value)}
                        className='input-class'
                    />
                </div>

                <div className='input-group'>
                    <label htmlFor='title'>New Password</label>
                    <input
                        type='password'
                        placeholder='New Password'
                        value={newPassword}
                        onChange={e => setNewPassword(e.target.value)}
                        className='input-class'
                    />
                </div>

                <div className='input-group'>
                    <label htmlFor='title'>Confirm Password</label>
                    <input
                        type='password'
                        placeholder='Confirm Password'
                        value={confirmPassword}
                        onChange={e => setConfirmPassword(e.target.value)}
                        className='input-class'
                    />
                </div>

                <button
                    onClick={handleChangePassword}
                    disabled={isLoading}
                    className='bg-blue-500 hover:bg-blue-700 text-white font-semibold text-sm py-2 px-4 rounded disabled:opacity-60 disabled:cursor-not-allowed'>
                    {isLoading ? 'Changing...' : 'Change Password'}
                </button>
            </div>
        </div>
    )
}

export default FormChangePass
