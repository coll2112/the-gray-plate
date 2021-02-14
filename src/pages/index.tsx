import Hero from '~/components/Hero'
import Card from '~/components/Card'

export default function Home() {
	return (
		<div>
			<Hero
				title='Front end web developer'
				subtitle='Welcome to my portfolio site, built from Next.js and Typescript. Click the button below to checkout some of my projects.'
				href='/about'
				btnText='View My Projects'
			/>
			<Card title='Project 1' text='Insert some text about project here...' />
		</div>
	)
}
