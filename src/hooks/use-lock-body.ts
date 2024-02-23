import { useLayoutEffect } from 'react'

export function useLockBody(isLocked: boolean) {
	useLayoutEffect((): (() => void) => {
		const originalStyle: string = window.getComputedStyle(
			document.body,
		).overflow

		if (isLocked) {
			document.body.style.overflow = 'hidden'
		}

		return () => (document.body.style.overflow = originalStyle)
	}, [isLocked])
}
