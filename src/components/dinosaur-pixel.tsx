import type { SVGProps } from 'react'

export default function DinosaurPixel(props: SVGProps<SVGSVGElement>) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="1em"
			height="1em"
			viewBox="0 0 24 24"
			{...props}
		>
			<path
				fill="currentColor"
				d="M13 2v1h-1v6h-1v1H9v1H8v1H7v1H5v-1H4v-1H3V9H2v6h1v1h1v1h1v1h1v4h2v-1H7v-1h1v-1h1v-1h1v1h1v3h2v-1h-1v-4h1v-1h1v-1h1v-3h1v1h1v-2h-2V9h5V8h-3V7h5V3h-1V2m-7 1h1v1h-1Z"
			></path>
		</svg>
	)
}
