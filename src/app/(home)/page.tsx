import Image from 'next/image'

import SocialLinks from '@/components/social-links'

export default function Home() {
	return (
		<main className="max-w-[600px] space-y-5">
			<Image
				src="/images/profile.webp"
				height="150"
				width="150"
				alt="Konstantin Lindner"
				className="mx-auto rounded-full sm:float-right sm:mb-3 sm:ml-3"
			/>

			<div className="flex flex-col gap-1">
				<h1 className="text-4xl font-semibold tracking-tighter">
					Konstantin Lindner
				</h1>
				<h2>
					Software Engineer @{' '}
					<a
						href="https://m56studios.com/"
						target="_blank"
						rel="noopener noreferrer"
						className="font-semibold hover:underline"
					>
						m56 Studios
					</a>
				</h2>
			</div>

			<div className="space-y-4">
				<p>
					A full-stack developer with a passion for crafting
					exceptional digital experiences. My journey in the vast
					world of web development has led me to explore a diverse
					range of technologies and frameworks, shaping me into the
					developer I am today.
				</p>
				<p>
					I&apos;m deeply enamored with React and Typescript, and they
					form the backbone of my projects. NextJS and Express are my
					go-to tools for building powerful, scalable applications,
					while Prisma ensures smooth database interactions. But my
					interests don&apos;t end there—I&apos;ve also dabbled with
					Vue and Svelte, always hungry to expand my horizons and
					embrace new challenges. When it comes to styling, I&apos;ve
					worked with CSS frameworks like Chakra UI, Tailwind, and
					MUI, making sure that every pixel on the screen is
					pixel-perfect. Backend technologies I have used include
					Firebase, Supabase and Laravel.
				</p>
				<p>
					I approach life with curiosity, optimism, and an unyielding
					thirst for improvement. A perpetual optimist, you&apos;ll
					seldom hear me say no to any challenge that comes my way. I
					believe in setting high standards for myself and those
					around me, constantly striving to become better at my craft.
					My keen eye for detail helps me identify areas of
					improvement, no matter how small, and I enjoy brainstorming
					creative solutions to solve problems effectively.
				</p>
			</div>

			<SocialLinks />
		</main>
	)
}
