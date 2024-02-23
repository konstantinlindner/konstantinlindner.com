import ProjectItem from './components/project-item'

export const metadata = {
	title: 'Projects',
}

const professionalProjects = [
	{
		title: 'fit52',
		description: 'A fitness app from Carrie Underwood',
		image: '/images/projects/fit52.jpg',
		shortContent: 'Short content of project 1',
		longContent: 'Long content of project 1',
		websiteUrl: 'https://www.fit52.com/',
	},
	{
		title: 'Hanx101',
		description: 'Description of project 2',
		image: '/images/projects/hanx101.jpg',
		shortContent: 'Short content of project 2',
		longContent: 'Long content of project 2',
		websiteUrl: 'https://www.hanx101.com/',
	},
	{
		title: 'Tillse',
		description: 'Landing page for tillse.se',
		image: '/images/projects/tillse.png',
		shortContent: 'Short content of project 4',
		longContent: 'Long content of project 4',
		websiteUrl: 'https://tillse.se/',
	},
	{
		title: 'AI Projects',
		description: 'Description of project 3',
		image: '/images/projects/ai.png',
		shortContent: 'Short content of project 3',
		longContent: 'Long content of project 3',
	},
	{
		title: 'Email signature generator',
		description: 'A custom signature generator for a company group',
		image: '/images/projects/email-signature-generator.png',
		shortContent: 'Short content of project 4',
		longContent: 'Long content of project 4',
	},
	{
		title: 'Puppeteer scraper',
		description: 'Description of project 5',
		image: '/images/projects/scraper.png',
		shortContent: 'Short content of project 5',
		longContent: 'Long content of project 5',
	},
]

export default function Projects() {
	return (
		<main className="px-20">
			<h1>Projects</h1>

			<p>
				Throughout my carreer I&apos;ve worked on larger scale projects
				having hundreds of thousands of users to small personal hobby
				projects built for personal use. Here I will showcase some of
				them. I am available for hire and open to new projects. If you
				like my work and would like to work together, feel free to reach
				out to me.
			</p>

			<section className="flex flex-col">
				<h2>Professional projects</h2>

				<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
					{professionalProjects.map((project, index) => (
						<ProjectItem
							key={index}
							title={project.title}
							description={project.description}
							image={project.image}
							shortContent={project.shortContent}
							longContent={project.longContent}
							websiteUrl={project.websiteUrl}
						/>
					))}
				</div>
			</section>
		</main>
	)
}
