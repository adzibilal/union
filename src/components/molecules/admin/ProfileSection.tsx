'use client'
import LoadingSpinner from '@/components/atoms/LoadingSpinner'
import FormUser from '@/components/organism/admin/users/FormUser'
import { Session } from '@/lib'
import { UserTypeTable } from '@/types/admin/users/type'
import React, { useEffect, useState } from 'react'

interface ProfileSectionProps {
    session: Session
}

const ProfileSection: React.FC<ProfileSectionProps> = ({ session }) => {
    const [user, setUser] = useState<UserTypeTable | null>(null)
    const [isLoading, setIsLoading] = useState(false)

    const getUser = async () => {
        setIsLoading(true)
        try {
            const data = await fetch(`/api/cms/users/${session.user.id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            const response = await data.json()

            setUser(response)
        } catch (error) {
            console.error(error)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        getUser()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div>
            {user && <FormUser user={user} isMyProfile />}
            {isLoading && (
                <div>
                    Loading...
                    <LoadingSpinner />
                </div>
            )}
        </div>
    )
}

export default ProfileSection
