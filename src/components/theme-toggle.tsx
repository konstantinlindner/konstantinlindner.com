'use client'

import { useTheme } from 'next-themes'

import { Moon, SunMedium } from 'lucide-react'

import { Button } from '@/components/ui/button'

export default function ThemeToggle() {
	const { setTheme, resolvedTheme } = useTheme()

	return (
		<Button
			onClick={() =>
				setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
			}
			variant="ghost"
			size="icon"
			className="size-9 rounded-full"
		>
			<SunMedium className="absolute size-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
			<Moon className="absolute size-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />

			<span className="sr-only">Toggle theme</span>
		</Button>
	)
}
