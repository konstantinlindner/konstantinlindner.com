'use client'

import { useSelectedLayoutSegment } from 'next/navigation'

import NavbarDesktop from '@/components/navbar-desktop'
import NavbarMobile from '@/components/navbar-mobile'

const navbarItems = [
	{
		title: 'Home',
		href: '/',
		activeRoute: '(home)',
	},
	{
		title: 'Projects',
		href: '/projects',
		activeRoute: 'projects',
	},
	{
		title: 'About',
		href: '/about',
		activeRoute: 'about',
	},
]

export type NavbarProps = {
	items: {
		title: string
		href: string
		activeRoute: string
	}[]
	currentPage: string | null
}

export default function Navbar() {
	const currentPage = useSelectedLayoutSegment()

	return (
		<>
			<div className="hidden sm:block">
				<NavbarDesktop items={navbarItems} currentPage={currentPage} />
			</div>
			<div className="block sm:hidden">
				<NavbarMobile items={navbarItems} currentPage={currentPage} />
			</div>
		</>
	)
}
