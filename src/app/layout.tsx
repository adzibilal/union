import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import { NextIntlClientProvider } from 'next-intl'
import { getLocale, getMessages } from 'next-intl/server'
import NextTopLoader from 'nextjs-toploader'
import { Toaster } from 'react-hot-toast';

const poppins = Poppins({
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    style: 'normal',
    subsets: ['latin']
})

export const metadata: Metadata = {
    title: 'Union Creative Design',
    description:
        'Union Creative Design adalah perusahaan jasa desain interior dan konstruksi yang berkomitmen pada profesionalisme, good corporate governance, dan layanan prima untuk memenuhi kebutuhan desain dan kenyamanan Anda.'
}

export default async function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode
}>) {
    const locale = await getLocale()
    const messages = await getMessages()
    return (
        <html lang={locale}>
            <body className={poppins.className}>
                <NextIntlClientProvider messages={messages}>
                    {children}
                    <NextTopLoader showAtBottom color='#FE7C04' />
                    <Toaster/>
                </NextIntlClientProvider>
            </body>
        </html>
    )
}
