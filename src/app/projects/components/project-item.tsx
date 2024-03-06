'use client'

import { useState } from 'react'

import Image from 'next/image'

import { cn } from '@/lib/utils'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

type ProjectItemProps = {
	title: string
	description: string
	technology: string[]
	backText: string
	websiteUrl?: string
	githubUrl?: string
	image: string
}

export default function ProjectItem({
	title,
	description,
	technology,
	backText,
	websiteUrl,
	githubUrl,
	image,
}: ProjectItemProps) {
	const [isRotated, setIsRotated] = useState<boolean>(false)

	const handleRotation = () => {
		setIsRotated(!isRotated)
	}

	return (
		<div className="perspective-1000">
			<div
				className={cn(
					'relative h-[430px] w-80 rounded-2xl border-2 transition-all duration-500 transform-style-3d',
					isRotated && 'rotate-y-180',
				)}
			>
				{/* front */}

				<div className="absolute inset-0 flex size-full flex-col justify-between p-5 rotate-y-0 backface-hidden">
					<div className="flex flex-col gap-4">
						<header className="flex flex-col gap-2">
							<Image
								src={image}
								alt={title}
								width={276}
								height={155}
								className="rounded-2xl"
							/>
							<div className="-space-y-1">
								<h2 className="text-lg font-bold">{title}</h2>
								<h3 className="text-sm">{description}</h3>
							</div>
						</header>

						<div className="flex flex-wrap gap-1">
							{technology.map((item, index) => (
								<Badge key={index} variant="outline">
									{item}
								</Badge>
							))}
						</div>
						{/* <p>{shortContent}</p> */}
					</div>

					<div className="flex justify-between">
						<Button variant="outline" onClick={handleRotation}>
							Read more
						</Button>

						<CardButtons
							websiteUrl={websiteUrl}
							githubUrl={githubUrl}
						/>
					</div>
				</div>

				{/* back */}

				<div className="absolute inset-0 flex size-full flex-col justify-between p-5 rotate-y-180 backface-hidden">
					<div className="flex flex-col gap-2">
						<header className="-space-y-1">
							<h2 className="text-lg font-bold">{title}</h2>
							<h3 className="text-sm">{description}</h3>
						</header>

						<p>{backText}</p>
					</div>

					<div className="flex justify-between">
						<Button variant="outline" onClick={handleRotation}>
							Back
						</Button>

						<CardButtons
							websiteUrl={websiteUrl}
							githubUrl={githubUrl}
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

type CardButtonsProps = {
	websiteUrl?: string
	githubUrl?: string
}

function CardButtons({ websiteUrl, githubUrl }: CardButtonsProps) {
	return (
		<div className="flex">
			{websiteUrl && (
				<Button asChild variant="link" size="sm">
					<a href={websiteUrl}>Website</a>
				</Button>
			)}
			{githubUrl && (
				<Button asChild variant="link" size="sm">
					<a href={githubUrl}>Github</a>
				</Button>
			)}
		</div>
	)
}
