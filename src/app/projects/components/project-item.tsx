'use client'

import { useState } from 'react'

import Image from 'next/image'

import { cn } from '@/lib/utils'

import { motion } from 'framer-motion'

import { Button } from '@/components/ui/button'

type ProjectItemProps = {
	title: string
	description: string
	image: string
	shortContent: string
	longContent: string
	websiteUrl?: string
	githubUrl?: string
}

export default function ProjectItem({
	title,
	description,
	image,
	shortContent,
	longContent,
	websiteUrl,
	githubUrl,
}: ProjectItemProps) {
	const [isRotated, setIsRotated] = useState<boolean>(false)

	const handleRotation = () => {
		setIsRotated(!isRotated)
	}

	return (
		<div className="perspective-1000">
			<div
				className={cn(
					'relative h-96 w-80 rounded-2xl border-2 transition-all duration-500 transform-style-3d',
					isRotated && 'rotate-y-180',
				)}
			>
				{/* front */}

				<div className="absolute inset-0 flex size-full flex-col justify-between p-5 rotate-y-0 backface-hidden">
					<div className="flex flex-col gap-2">
						<header className="flex flex-col gap-2">
							<Image
								src={image}
								alt={title}
								width={400}
								height={200}
								className="rounded-2xl"
							/>
							<div className="-space-y-1">
								<h2 className="text-lg font-bold">{title}</h2>
								<h3 className="text-sm">{description}</h3>
							</div>
						</header>
						<p>{shortContent}</p>
					</div>

					<div className="flex justify-between">
						<Button onClick={handleRotation}>Project info</Button>

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

						<p>{longContent}</p>
					</div>

					<div className="flex justify-between">
						<Button onClick={handleRotation}>Back</Button>

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
