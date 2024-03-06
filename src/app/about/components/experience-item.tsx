type ExperienceItemProps = {
	header: string
	description: string
	date: string
	text: string
	text2?: string
	text3?: string
}

export default function ExperienceItem({
	header,
	description,
	date,
	text,
	text2,
	text3,
}: ExperienceItemProps) {
	return (
		<div className="space-y-5 border-b pb-7">
			<div>
				<h3 className="text-lg font-bold">{header}</h3>
				<h4 className="text-lg italic">{description}</h4>
				<p className="text-sm">{date}</p>
			</div>

			<div className="space-y-4">
				<p>{text}</p>
				{text2 && <p>{text2}</p>}
				{text3 && <p>{text3}</p>}
			</div>
		</div>
	)
}
