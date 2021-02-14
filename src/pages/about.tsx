import React from 'react'
import Button from '~/components/Button'
import { useRouter } from 'next/router'

export default function About() {
	return (
		<div>
			<h1>About Page</h1>
			<div>
				<Button type='secondary' href='/'>
					Back to Home Page
				</Button>
			</div>
		</div>
	)
}
