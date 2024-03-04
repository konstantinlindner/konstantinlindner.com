import ProjectItem from './components/project-item'

export const metadata = {
	title: 'Projects',
}

const professionalProjects = [
	{
		title: 'fit52',
		description: 'A fitness app from Carrie Underwood',
		image: '/images/projects/fit52.jpg',
		shortContent: 'Building the best fitness app to workout from home.',
		longContent:
			"As a QA Engineer on fit52, I've had the opportunity to play a significant role in the development of the app. Responsible for reviewing and approving all code changes of both front-end and back-end, utilizing manual testing as well as advanced tools such as Detox and Maestro for automated tests.",
		websiteUrl: 'https://www.fit52.com/',
	},
	{
		title: 'Hanx101',
		description: 'A trivia game by Tom Hanks',
		image: '/images/projects/hanx101.jpg',
		shortContent:
			'Created a content management system for trivia questions.',
		longContent:
			'Being tasked with rapidly creating a content management tool for the popular trivia game we decided on a stack of React with MUI for development speed. Although my role was QA, I actively contributed to the project by writing code as well.',
		websiteUrl: 'https://www.hanx101.com/',
	},
	{
		title: 'Tillse',
		description: 'A SaaS for the real estate industry',
		image: '/images/projects/tillse.png',
		shortContent: 'Designed and built a landing page for Tillse.',
		longContent:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
		websiteUrl: 'https://tillse.se/',
	},
	{
		title: 'AI Projects',
		description: 'R&D projects in the field of AI',
		image: '/images/projects/ai.png',
		shortContent:
			'A browser extension for shopping and a chatbot for ecommerce websites.',
		longContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
	},
	{
		title: 'Email signature generator',
		description: 'A custom tool for a company group',
		image: '/images/projects/email-signature-generator.png',
		shortContent: 'Short content of project 4',
		longContent: 'Long content of project 4',
	},
	{
		title: 'Puppeteer scraper',
		description:
			'Helping a company gather publically available data for sales',
		image: '/images/projects/scraper.png',
		shortContent: 'Short content of project 5',
		longContent: 'Long content of project 5',
	},
]

const personalProjects = [
	{
		title: 'Portfolio',
		description: 'The very website you are browsing',
		image: '/images/projects/portfolio.jpg',
		shortContent: 'Short content of project 1',
		longContent: 'Long content of project 1',
		githubUrl: 'https://github.com/konstantinlindner/konstantinlindner.com',
	},
	{
		title: 'konstantin.bio',
		description: 'A personal link in bio website',
		image: '/images/projects/konstantin-bio.jpg',
		shortContent: 'Short content of project 2',
		longContent: 'Long content of project 2',
		websiteUrl: 'https://konstantin.bio',
		githubUrl: 'https://github.com/konstantinlindner/konstantin.bio',
	},
	{
		title: 'Lifelytics',
		description:
			'A tool to track spending and control your personal finances',
		image: '/images/projects/lifelytics.png',
		shortContent:
			'A base for your productivity and well-being. Track and visualize your personal finances, health and life stats in one tool.',
		longContent: 'Long content of project 4',
		websiteUrl: 'https://life.konstantin.app/',
		githubUrl: 'https://github.com/konstantinlindner/lifelytics',
	},
	{
		title: 'PickyEater',
		description: 'A recipe app for picky eaters',
		image: '/images/projects/picky-eater.png',
		shortContent: 'Short content of project 3',
		longContent: 'Long content of project 3',
		githubUrl: 'https://github.com/konstantinlindner/picky-eater',
	},
]

export default function Projects() {
	return (
		<main className="space-y-10 px-5 pt-10 lg:px-20 2xl:px-40">
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
							image={project.image}
							shortContent={project.shortContent}
							longContent={project.longContent}
							websiteUrl={project.websiteUrl}
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
							image={project.image}
							shortContent={project.shortContent}
							longContent={project.longContent}
							websiteUrl={project.websiteUrl}
							githubUrl={project.githubUrl}
						/>
					))}
				</div>
			</section>
		</main>
	)
}
