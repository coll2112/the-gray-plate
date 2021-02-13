import Button from '~/components/Button'

export default function Home() {
	return (
		<div>
			<h1>Home Page</h1>
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'space-around',
					alignItems: 'center',
					minHeight: '200px',
				}}
			>
				<Button type='primary' href='/about' text='Click Me' />
				<Button type='secondary' href='/about' text='Click Me' />
				<Button type='link' href='/about' text='Click Me' />
			</div>
		</div>
	)
}
