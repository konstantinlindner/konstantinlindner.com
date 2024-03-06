import Image from 'next/image'

import SocialLinks from '@/components/social-links'

import ExperienceItem from './components/experience-item'

export const metadata = {
	title: 'About',
}

const workItems = [
	{
		header: 'Freelancing',
		description: 'Designer & Developer',
		date: 'Feb 2023 - Mar 2024',
		text: 'Built internal tools and digital dashboards for a major Swedish construction group. Projects included a data scraping tool and an advanced email signature generator for a group of companies.',
		text2: 'Designed and implemented a new landing page with NextJS, replacing the current Wordpress site for a SaaS company in the real estate industry. I used Figma to create mocks and built the website with React, NextJS 14 and Resend.',
	},
	{
		header: 'm56 Studios Inc.',
		description: 'Junior Software Engineer',
		date: 'Apr 2023 - present',
		text: 'Worked on fit52, a fitness app from Carrie Underwood. Contributing to both the React Native frontend and PHP Laravel backend. Frontend technologies used include React Native, Expo, MobX, Firebase, Leanplum/Clevertap and RevenueCat.',
		text2: 'Tasked to improve the content management tool for Hanx101 Trivia, rewriting the frontend from scratch using React and improving the backend already in place.',
		text3: 'Did R&D into AI and built tools such as an e-commerce chatbot and a browser extension for shopping. Stack for both consisted of React, Firebase, GPT-4 and Pinecone. I also wrote advanced data collection scripts using Puppeteer for these products.',
	},
	{
		header: 'm56 Studios Inc.',
		description: 'QA Engineer',
		date: 'Apr 2022 - Apr 2023',
		text: 'At m56 Studios, I contributed as a QA engineer to projects like fit52, a fitness app, the content management tool for Hanx101 Trivia, by Tom Hanks - an Apple Arcade exclusive trivia game, as well as AI tools for other projects built on GPT-4 and vector databases such as Pinecone.',
		text2: 'When working on fit52, I was responsible for reviewing and approving code changes for both front- and backend portions of the mobile application, through code review as well as utilizing manual and automated testing. Automated testing includes writing automated tests in tools like Detox and Maestro for testing on iOS and Android.',
		text3: 'Other responsibilities include bug and ticket triage, content changes, developing the QA process and testing schedules as well as process documentation.',
	},
	{
		header: 'Inet AB',
		description: 'Logistics Coordinator',
		date: 'Aug 2020 - Nov 2021',
		text: 'As Logistics Coordinator, I played a vital role in overseeing deliveries from manufacturers and distributors to our warehouse. I efficiently managed internal shipments and resolved any issues that arose with shipping agents.',
		text2: 'An exciting aspect of my role was collaborating closely with the in-house development team to enhance our internal programs and tools. This collaboration allowed us to optimize and streamline logistics processes, improving overall efficiency and effectiveness.',
	},
	{
		header: 'Inet AB',
		description: 'Technical Advisor',
		date: 'Jun 2018 - Aug 2020',
		text: 'As a Technical Advisor, I provided expert technical assistance to customers, offering pre-sale advice, troubleshooting support, and after-sale help.',
		text2: 'My dedication to providing excellent customer service was recognized when I was awarded the honorable Suverän Service commendation. This recognition came from a mystery shopper hired by Better Business Worldwide, and it highlighted my commitment to ensuring a positive and memorable customer experience.',
	},
]

const educationItems = [
	{
		header: 'Hermods',
		description: 'Biology',
		date: '2023',
		text: "During my time at Hermods, one of Sweden's oldest educational institutions, I had the opportunity to delve into the fascinating world of biology.",
		text2: 'The program provided a comprehensive and hands-on approach to understanding the complexities of life and the natural world. From the cellular level to ecological systems, the coursework covered a wide range of topics, equipping me with a solid foundation in biological principles.',
	},
	{
		header: 'Udemy',
		description: 'The Complete JavaScript Course',
		date: '2022',
		text: 'This course covered JavaScript fundamentals to advanced concepts like React and Node.js. Hands-on projects and a supportive team environment at m56 Studios accelerated my growth as a developer. This course was a pivotal step in my professional journey, empowering me with valuable skills for web development and sparking a passion for continuous learning in the tech industry.',
	},
	{
		header: 'Donnergymnasiet',
		description: 'Economics & Law',
		date: '2015-2018',
		text: 'Enrolled in the prestigious Economics and Law program at Donnergymnasiet, a top school in Gothenburg, from 2015 to 2018. Actively participated in various school clubs and organizations. Graduated in June 2018, this program provided an excellent educational foundation in the fields of economics and law, preparing me for future academic pursuits and professional endeavors.',
	},
]

const certificationItems = [
	{
		header: 'Better Business',
		description: 'Exceptional Service',
		date: 'Dec 2020',
		text: 'I received the rare and prestigious "Suverän Service" commendation from Better Business World Wide, as a mystery shopper recognized my customer service skills.',
		text2: 'The motivation behind the commendation read: "Konstantin displayed remarkable kindness, trustworthiness, and attentiveness to my needs as a customer. His dedication in resolving my issue went above and beyond, making our interaction feel like a conversation with a friend. I was so impressed that I would have happily made a purchase solely based on the positive experience of speaking with this outstanding employee."',
	},
	{
		header: 'IELTS Official',
		description: '8.5 Overall Band Score',
		date: 'Jun 2023',
		text: 'In June 2023, I took the IELTS English and achieved an overall band score of 8.5 out of 9. This accomplishment reflects my strong English language proficiency in Listening, Reading, Writing, and Speaking. I am proud of this achievement as it opens up opportunities for academic and professional growth in diverse international settings.',
	},
]

const languageItems = [
	{
		language: 'English',
		level: 'Fluent (IELTS 8.5 out of 9)',
	},
	{
		language: 'Swedish',
		level: 'Native',
	},
	{
		language: 'German',
		level: 'Mother tounge',
	},
	{
		language: 'Spanish',
		level: 'Basic',
	},
	{
		language: 'French',
		level: 'Basic',
	},
]

export default function About() {
	return (
		<main className="mx-auto max-w-[600px] space-y-5 px-5 sm:px-0">
			<Image
				priority
				src="/images/about.webp"
				height="150"
				width="150"
				alt="Konstantin Lindner"
				className="mx-auto rounded-full sm:float-right sm:mb-3 sm:ml-3"
			/>

			<div className="flex flex-col gap-2">
				<h1 className="max-w-52 text-3xl font-semibold tracking-tighter sm:max-w-96">
					<div className="text-orange">Hi,</div>
					<span className="text-gray">My name is </span>
					<span className="text-nowrap">Konstantin Lindner</span>
				</h1>

				<SocialLinks />
			</div>

			<div className="space-y-10">
				<div className="space-y-7">
					<h2 className="text-3xl font-semibold tracking-tighter text-orange">
						I am
					</h2>
					<section className="space-y-4">
						<p>
							A full-stack developer with a passion for crafting
							exceptional digital experiences. My journey in the
							vast world of web development has led me to explore
							a diverse range of technologies and frameworks,
							shaping me into the developer I am today.
						</p>
						<p>
							I&apos;m deeply enamored with React and Typescript,
							and they form the backbone of my projects. NextJS
							and Express are my go-to tools for building
							powerful, scalable applications, while Prisma
							ensures smooth database interactions. But my
							interests don&apos;t end there—I&apos;ve also
							dabbled with Vue and Svelte, always hungry to expand
							my horizons and embrace new challenges. When it
							comes to styling, I&apos;ve worked with CSS
							frameworks like Chakra UI, Tailwind, and MUI, making
							sure that every pixel on the screen is
							pixel-perfect. Backend technologies I have used
							include Firebase, Supabase and Laravel.
						</p>
						<p>
							I approach life with curiosity, optimism, and an
							unyielding thirst for improvement. A perpetual
							optimist, you&apos;ll seldom hear me say no to any
							challenge that comes my way. I believe in setting
							high standards for myself and those around me,
							constantly striving to become better at my craft. My
							keen eye for detail helps me identify areas of
							improvement, no matter how small, and I enjoy
							brainstorming creative solutions to solve problems
							effectively.
						</p>
					</section>
				</div>

				<div className="space-y-5">
					<h2 className="text-3xl font-semibold tracking-tighter text-orange">
						Selected work experience
					</h2>
					<section className="space-y-7">
						{workItems.map((item, index) => (
							<ExperienceItem key={index} {...item} />
						))}
					</section>
				</div>

				<div className="space-y-5">
					<h2 className="text-3xl font-semibold tracking-tighter text-orange">
						Education
					</h2>
					<section className="space-y-7">
						{educationItems.map((item, index) => (
							<ExperienceItem key={index} {...item} />
						))}
					</section>
				</div>

				<div className="space-y-5">
					<h2 className="text-3xl font-semibold tracking-tighter text-orange">
						Certifications and awards
					</h2>
					<section className="space-y-7">
						{certificationItems.map((item, index) => (
							<ExperienceItem key={index} {...item} />
						))}
					</section>
				</div>

				<div className="space-y-5">
					<h2 className="text-3xl font-semibold tracking-tighter text-orange">
						Language skills
					</h2>
					<section className="flex flex-col gap-2">
						{languageItems.map((item, index) => (
							<div key={index} className="flex">
								<h3 className="w-24 font-bold">
									{item.language}
								</h3>
								<p>{item.level}</p>
							</div>
						))}
					</section>
				</div>
			</div>
		</main>
	)
}
