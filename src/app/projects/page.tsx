import ProjectItem from './components/project-item'

export const metadata = {
	title: 'Projects',
}

const professionalProjects = [
	{
		title: 'fit52',
		description: 'A fitness app from Carrie Underwood',
		technology: [
			'Typescript',
			'React Native',
			'Emotion/styled',
			'MobX',
			'Firebase',
			'PHP',
			'Laravel',
			'MySQL',
		],
		backText:
			"As both a Software and QA Engineer on fit52, I've had the opportunity to play a significant role in the development of the app. During my time as QA, I was responsible for reviewing and approving all code changes of both front-end and back-end, utilizing manual testing as well as advanced tools such as Detox and Maestro for automated tests.",
		websiteUrl: 'https://www.fit52.com/',
		image: '/images/projects/fit52.jpg',
	},
	{
		title: 'Hanx101',
		description: 'A trivia game by Tom Hanks',
		technology: ['Typescript', 'React', 'MUI', 'Firebase', 'MySQL'],
		backText:
			'Being tasked with rapidly creating a content management tool for the popular trivia game we decided on a stack of React with MUI for development speed. Although my role was QA, I actively contributed to the project by writing code as well.',
		websiteUrl: 'https://www.hanx101.com/',
		image: '/images/projects/hanx101.jpg',
	},
	{
		title: 'Tillse',
		description: 'Landing page for a SaaS in the real estate industry',
		technology: [
			'Typescript',
			'React',
			'Next.js',
			'Zod',
			'React Hook Form',
			'Resend',
			'Embla Carousel',
		],
		backText: 'Designed and built a landing page for tillse.se.',
		websiteUrl: 'https://tillse.se/',
		image: '/images/projects/tillse.png',
	},
	{
		title: 'AI Projects',
		description: 'R&D projects in the field of AI',
		technology: [
			'Typescript',
			'React',
			'GPT-4',
			'Pinecone',
			'Firebase',
			'Chrome Extension',
		],
		backText:
			'A browser extension for shopping and a chatbot for ecommerce websites.',
		image: '/images/projects/ai.jpg',
	},
	{
		title: 'Email signature generator',
		description: 'A custom tool for a company group',
		technology: ['Typescript', 'React', 'Chakra UI', 'Papaparse', 'Vite'],
		backText: 'Lets employees create and manage their email signature.',
		image: '/images/projects/email-signature-generator.png',
	},
	{
		title: 'Puppeteer scraper',
		description: 'Helping a company gather data',
		technology: ['Typescript', 'Puppeteer', 'Node.js'],
		backText: 'Custom web scraping script for the real estate industry.',
		image: '/images/projects/scraper.png',
	},
]

const personalProjects = [
	{
		title: 'Lifelytics',
		description:
			'A tool to track spending and control your personal finances',
		technology: [
			'Typescript',
			'React',
			'Next.js',
			'TailwindCSS',
			'shadcn/ui',
			'Zod',
			'AWS',
			'Framer Motion',
			'Supabase',
		],
		backText:
			'Track and visualize your personal finances, health and life stats.',
		websiteUrl: 'https://life.konstantin.app/',
		githubUrl: 'https://github.com/konstantinlindner/lifelytics',
		image: '/images/projects/lifelytics.png',
	},
	{
		title: 'Picky Eater',
		description: 'A recipe app for picky eaters',
		technology: [
			'Typescript',
			'React Native',
			'Expo',
			'Supabase',
			'Zod',
			'React Hook Form',
		],
		backText:
			'Custom recipes and inspiration for those with sensitive taste buds.',
		githubUrl: 'https://github.com/konstantinlindner/picky-eater',
		image: '/images/projects/picky-eater.png',
	},
	{
		title: 'konstantin.bio',
		description: 'A personal link in bio website',
		technology: ['Typescript', 'React', 'Chakra UI', 'Vite'],
		backText: 'So that I can say "Link in bio 👇".',
		websiteUrl: 'https://konstantin.bio',
		githubUrl: 'https://github.com/konstantinlindner/konstantin.bio',
		image: '/images/projects/konstantin-bio.png',
	},
	{
		title: 'Portfolio',
		description: 'The very website you are browsing',
		technology: [
			'Typescript',
			'React',
			'Next.js',
			'TailwindCSS',
			'shadcn/ui',
			'Lucide',
			'Vercel',
		],
		backText: 'A website to show off my completed projects.',
		githubUrl: 'https://github.com/konstantinlindner/konstantinlindner.com',
		image: '/images/projects/portfolio.png',
	},
]

export default function Projects() {
	return (
		<main className="space-y-10 px-5 pt-5 lg:px-20 2xl:px-40">
			<section className="flex flex-col gap-3">
				<h1 className="text-4xl font-bold">Project showcase</h1>

				<p>
					Throughout my carreer I&apos;ve worked on larger scale
					projects having hundreds of thousands of users to small
					personal hobby projects built for personal use. Here I will
					showcase some of them. I am available for hire and open to
					new projects. If you like my work and would like to
					collaborate, feel free to reach out to me.
				</p>
			</section>

			<section className="flex flex-col space-y-10">
				<h2 className="mx-auto text-3xl font-bold">
					Professional projects
				</h2>

				<div className="mx-auto grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
					{professionalProjects.map((project, index) => (
						<ProjectItem
							key={index}
							title={project.title}
							description={project.description}
							technology={project.technology}
							backText={project.backText}
							websiteUrl={project.websiteUrl}
							image={project.image}
						/>
					))}
				</div>
			</section>

			<section className="flex flex-col space-y-5">
				<h2 className="mx-auto text-3xl font-bold">
					Personal projects
				</h2>

				<div className="mx-auto grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
					{personalProjects.map((project, index) => (
						<ProjectItem
							key={index}
							title={project.title}
							description={project.description}
							technology={project.technology}
							backText={project.backText}
							websiteUrl={project.websiteUrl}
							githubUrl={project.githubUrl}
							image={project.image}
						/>
					))}
				</div>
			</section>
		</main>
	)
}
