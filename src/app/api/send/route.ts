import { ReactElement } from 'react'

import { NextRequest, NextResponse } from 'next/server'

import EmailTemplate from '@/app/contact/components/email-template'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
	const { name, email, phone, message } = await req.json()

	try {
		const { data, error } = await resend.emails.send({
			from: 'Portfolio <portfolio@konstantin.app>',
			to: ['hello@konstantinlindner.com'],
			subject: 'New message from konstantinlindner.com',
			react: EmailTemplate({
				name: name,
				email: email,
				phone: phone,
				message: message,
			}) as ReactElement,
		})

		if (error) {
			return NextResponse.json({ error })
		}

		return NextResponse.json({ data })
	} catch (error) {
		return NextResponse.json({ error })
	}
}
