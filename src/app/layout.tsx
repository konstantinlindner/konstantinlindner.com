import { ReactNode } from 'react'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { cn } from '@/lib/utils'

import '@/styles/globals.css'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

import Navbar from '@/components/navbar'
import { ThemeProvider } from '@/components/theme-provider'

export const metadata: Metadata = {
	metadataBase: new URL('https://life.konstantin.app'),
	title: {
		default: 'Konstantin Lindner - Software Engineer',
		template: `%s | Konstantin Lindner`,
	},
	description: 'Portfolio of Konstantin Lindner, a software engineer.',
	keywords: [
		'Portfolio',
		'Software',
		'Development',
		'Developer',
		'Engineer',
		'Konstantin Lindner',
		'Konstantin',
		'Lindner',
	],
	authors: [
		{
			name: 'Konstantin Lindner',
			url: 'https://konstantinlindner.com',
		},
	],
	creator: 'Konstantin Lindner',
	openGraph: {
		type: 'website',
		locale: 'en_US',
		url: 'konstantinlindner.com',
		title: 'Konstantin Lindner',
		description: 'Portfolio of Konstantin Lindner, a software engineer.',
		siteName: 'Konstantin Lindner',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Konstantin Lindner',
		description: 'Portfolio of Konstantin Lindner, a software engineer.',
		images: '/og.png',
		creator: '@konstantin_app',
	},
	icons: {
		icon: '/favicon.ico',
		shortcut: '/favicon-16.png',
		apple: '/apple-touch-icon.png',
	},
}

const inter = Inter({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-sans',
})

export default function RootLayout({
	children,
}: Readonly<{
	children: ReactNode
}>) {
	return (
		<html lang="en">
			<body
				className={cn(
					'flex min-h-screen flex-col font-sans antialiased',
					inter.variable,
				)}
			>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<Navbar />
					<div className="flex flex-1 flex-col pb-10">
						{children}
						<Analytics />
						<SpeedInsights />
					</div>
				</ThemeProvider>
			</body>
		</html>
	)
}
