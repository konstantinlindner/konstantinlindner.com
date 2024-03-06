import { MouseEvent, MutableRefObject, useState } from 'react'

import Link from 'next/link'

import { useLockBody } from '@/hooks/use-lock-body'

import { cn } from '@/lib/utils'

import { useClickAway } from '@uidotdev/usehooks'

import { Menu, X } from 'lucide-react'

import { NavbarProps } from '@/components/navbar'
import ThemeToggle from '@/components/theme-toggle'

export default function NavbarMobile({ items, currentPage }: NavbarProps) {
	const [menuOpen, setMenuOpen] = useState<boolean>(false)
	useLockBody(menuOpen)

	const ref = useClickAway(() => {
		setMenuOpen(false)
	}) as MutableRefObject<HTMLDivElement | null>

	const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.stopPropagation()
		setMenuOpen(!menuOpen)
	}

	const handleLinkClick = () => {
		setMenuOpen(false)
	}

	return (
		<header className="relative flex h-24 items-center justify-between px-10">
			<button
				onClick={handleMenuClick}
				aria-label="Toggle menu"
				aria-pressed={menuOpen}
				className="relative z-10"
			>
				{menuOpen ?
					<X className="size-8" />
				:	<Menu className="size-8" />}
			</button>

			<ThemeToggle isMobile />

			{menuOpen && (
				<nav className="fixed inset-0 top-24 z-30 grid grid-flow-row auto-rows-max overflow-auto shadow-lg animate-in slide-in-from-top-3">
					<div
						ref={ref}
						className="grid justify-center gap-10 bg-background px-20 pb-20 pt-5 text-center shadow-md"
					>
						{items.map((item, index) => (
							<Link
								key={index}
								href={item.href}
								className={cn(
									'text-lg',
									currentPage === item.activeRoute &&
										'font-bold',
								)}
								onClick={handleLinkClick}
							>
								{item.title}
							</Link>
						))}
					</div>
				</nav>
			)}
		</header>
	)
}
