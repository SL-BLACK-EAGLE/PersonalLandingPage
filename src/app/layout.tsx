import './globals.css'
import type {Metadata} from 'next'
import {Sora} from 'next/font/google'

const sora = Sora({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'Chathuranga Lakmal - Landing Page',
    description: 'My Personal Landing Page',
    icons: "/images/chathuranga.jpg",
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className={sora.className}>
        <div className="max-w-xl mx-auto">{children}</div>
        </body>
        </html>
    )
}
