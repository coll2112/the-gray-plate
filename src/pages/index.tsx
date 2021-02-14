import Button from '~/components/Button'
import Hero from '~/components/Hero'

export default function Home() {
	return (
		<Hero
			title='Front end web developer'
			subtitle='Welcome to my portfolio site, built from Next.js and Typescript. Click the button below to checkout some of my projects.'
			href='/about'
			btnText='View My Projects'
		/>
	)
}
