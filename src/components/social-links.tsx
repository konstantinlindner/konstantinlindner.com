import {
	Email,
	Github,
	Instagram,
	Linkedin,
	Spotify,
	X,
} from '@/components/assets/social-icons'
import { Button } from '@/components/ui/button'

const socialLinks = [
	{
		name: 'Email',
		icon: Email,
		url: 'mailto:hello@konstantinlindner.com',
	},
	{
		name: 'LinkedIn',
		icon: Linkedin,
		url: 'https://linkedin.com/in/konstantinlindner',
	},
	{
		name: 'Github',
		icon: Github,
		url: 'https://github.com/konstantinlindner',
	},
	{
		name: 'X',
		icon: X,
		url: 'https://twitter.com/konstantin_app',
	},
	{
		name: 'Instagram',
		icon: Instagram,
		url: 'https://instagram.com/konstantin.lindner',
	},
	{
		name: 'Spotify',
		icon: Spotify,
		url: 'https://open.spotify.com/user/el9iz0421ohco9v4ps97j2l8e?si=tbfl8hbFRyaycr4iPfxOsw',
	},
]

export default function SocialLinks() {
	return (
		<div className="flex justify-center gap-3 sm:justify-start">
			{socialLinks.map((item, index) => (
				<Button
					key={index}
					asChild
					variant="secondary"
					size="icon"
					className="size-9 rounded-full"
				>
					<a href={item.url} aria-label={item.name}>
						<item.icon className="size-5" />
					</a>
				</Button>
			))}
		</div>
	)
}
