import { useState } from 'react'

import Image from 'next/image'
import Link from 'next/link'

import { useLockBody } from '@/hooks/use-lock-body'

import { cn } from '@/lib/utils'

import { Menu, X } from 'lucide-react'

import { NavbarProps } from '@/components/navbar'
import { Button } from '@/components/ui/button'

export default function NavbarMobile({ items, currentPage }: NavbarProps) {
	const [menuOpen, setMenuOpen] = useState<boolean>(false)
	useLockBody(menuOpen)

	// TODO handleOverlayClick
	const handleOverlayClick = () => {
		setMenuOpen(false)
	}

	const handleMenuClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.stopPropagation()
		setMenuOpen(!menuOpen)
	}

	const handleLinkClick = () => {
		setMenuOpen(false)
	}

	return (
		<header className="relative flex h-24 flex-row items-center justify-between bg-white px-10">
			<button
				onClick={handleMenuClick}
				type="button"
				className="relative z-10"
			>
				{menuOpen ?
					<X className="size-8 text-primary" strokeWidth={3} />
				:	<Menu className="size-8 text-primary" strokeWidth={3} />}
			</button>

			{menuOpen && (
				<>
					<div className="fixed inset-0 top-72 z-10 bg-secondary opacity-80"></div>
					<nav className="fixed inset-0 top-24 z-30 grid grid-flow-row auto-rows-max overflow-auto shadow-md animate-in slide-in-from-top-3">
						<div className="grid justify-center gap-10 bg-white p-20 text-center shadow-md">
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
							<Button>Logga in</Button>
						</div>
					</nav>
				</>
			)}
		</header>
	)
}
