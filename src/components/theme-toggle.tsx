'use client'

import { useTheme } from 'next-themes'

import { cn } from '@/lib/utils'

import { Moon, SunMedium } from 'lucide-react'

import { Button } from '@/components/ui/button'

type ThemeToggleProps = {
	isMobile?: boolean
}

export default function ThemeToggle({ isMobile }: ThemeToggleProps) {
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
			<SunMedium
				className={cn(
					'absolute size-5 transition-all scale-0 dark:scale-100',
					isMobile && 'size-7',
				)}
			/>
			<Moon
				className={cn(
					'absolute size-5 transition-all scale-100 dark:scale-0',
					isMobile && 'size-7',
				)}
			/>

			<span className="sr-only">Toggle theme</span>
		</Button>
	)
}
