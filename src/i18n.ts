import { getRequestConfig } from 'next-intl/server'
import { cookies } from 'next/headers'

export default getRequestConfig(async () => {
    const localeCookie = cookies().get('locale')
    const locale = localeCookie?.value || 'id'

    return {
        locale,
        messages: (await import(`../messages/${locale}.json`)).default
    }
})
