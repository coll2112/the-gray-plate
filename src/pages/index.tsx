import Hero from '~/components/Hero'
import Card from '~/components/Card'

export default function Home() {
	let cardArr = [0, 1, 2].map((i) => (
		<Card
			key={i}
			img='https://raw.githubusercontent.com/coll2112/personal_project/master/landing.png'
			title='Project 1'
			text='Insert some text about project here...'
		/>
	))
	return (
		<div>
			<Hero
				title='Front end web developer'
				subtitle='Welcome to my portfolio site, built from Next.js and Typescript. Click the button below to checkout some of my projects.'
				href='/about'
				btnText='View My Projects'
			/>
			<div
				style={{
					display: 'flex',
					justifyContent: 'space-around',
					flexWrap: 'wrap',
					marginTop: '60px',
					marginBottom: '60px',
				}}
			>
				{cardArr}
			</div>
		</div>
	)
}
