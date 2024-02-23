import Link from 'next/link'

import DinosaurPixel from '@/components/assets/dinosaur-pixel'
import { Button } from '@/components/ui/button'

export const metadata = {
	title: '404',
}

export default function NotFound() {
	return (
		<main className="flex flex-1 flex-col items-center gap-10 pt-20 text-center">
			<div className="flex flex-col items-center gap-3">
				<DinosaurPixel className="size-48" />
				<h1 className="text-4xl font-semibold tracking-tighter">
					Not found - 404
				</h1>
				<h2 className="text-3xl">Sorry, this page does not exist.</h2>
			</div>

			<Button asChild>
				<Link href="/">Go back home</Link>
			</Button>
		</main>
	)
}
