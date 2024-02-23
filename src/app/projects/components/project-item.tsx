import Image from 'next/image'

import { Button } from '@/components/ui/button'
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog'

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
	return (
		<Card>
			<CardHeader>
				<Image
					src={image}
					alt={title}
					width={400}
					height={200}
					className="rounded-2xl"
				/>
				<CardTitle>{title}</CardTitle>
				<CardDescription>{description}</CardDescription>
			</CardHeader>
			<CardContent>
				<p>{shortContent}</p>
			</CardContent>
			<CardFooter className="flex justify-between">
				<Dialog>
					<DialogTrigger asChild>
						<Button>Project info</Button>
					</DialogTrigger>
					<DialogContent>
						<DialogHeader>
							<DialogTitle>{title}</DialogTitle>
							<DialogDescription>{description}</DialogDescription>
						</DialogHeader>
						<p>{longContent}</p>
					</DialogContent>
				</Dialog>

				<div className="flex gap-3">
					{websiteUrl && (
						<Button asChild variant="link">
							<a href={websiteUrl}>Website</a>
						</Button>
					)}
					{githubUrl && (
						<Button asChild variant="link">
							<a href={githubUrl}>Github</a>
						</Button>
					)}
				</div>
			</CardFooter>
		</Card>
	)
}
