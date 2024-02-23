type EmailTemplateProps = {
	name: string
	email: string
	phone: string
	message: string
}

export default function EmailTemplate({
	name,
	email,
	phone,
	message,
}: EmailTemplateProps) {
	return (
		<div>
			<h1>New message from konstantinlindner.com</h1>
			<p>
				<strong>Name:</strong> {name}
				<br />
				<strong>Email:</strong> {email}
				<br />
				<strong>Phone:</strong> {phone}
				<br />
				<strong>Message:</strong> {message}
			</p>
		</div>
	)
}
