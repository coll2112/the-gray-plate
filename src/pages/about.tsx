import React from 'react'
import Button from '~/components/Button'
import { useRouter } from 'next/router'

export default function About() {
	const { pathname } = useRouter()
	const path =
		pathname.replace('/', '').substring(0, 1).toUpperCase() +
		pathname.substring(2)
	return (
		<div>
			<h1>About Page</h1>
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'space-around',
					alignItems: 'center',
					minHeight: '200px',
				}}
			>
				<Button type='primary' href='/' text={path} />
				<Button type='secondary' href='/' text={path} />
				<Button type='link' href='/' text='Back to Home Page' />
			</div>
		</div>
	)
}
