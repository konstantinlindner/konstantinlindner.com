import Link from 'next/link'

import { cn } from '@/lib/utils'

import { NavbarProps } from '@/components/navbar'

import ThemeToggle from './theme-toggle'
import { Button } from './ui/button'

export default function NavbarDesktop({ items, currentPage }: NavbarProps) {
	return (
		<header className="flex h-20 w-[600px] items-center justify-between">
			<nav className="-ml-3 flex gap-1">
				{items.map((item, index) => (
					<Button
						key={index}
						asChild
						size="sm"
						variant="ghost"
						className={cn(
							'',
							currentPage === item.activeRoute && 'font-bold',
						)}
					>
						<Link href={item.href}>{item.title}</Link>
					</Button>
				))}
			</nav>
			<ThemeToggle />
		</header>
	)
}
