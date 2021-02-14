import React, { FunctionComponent } from 'react'
import Button from '~/components/Button'

import styles from './card.module.scss'

interface Props {
	img?: string
	title: string
	text?: string
	projectLink?: string
	repoLink?: string
}

const Card: FunctionComponent<Props> = ({
	img,
	title,
	text,
	projectLink,
	repoLink,
}) => {
	return (
		<div className={styles.card}>
			<img src={img} />
			<div className={styles.body}>
				<h3 className={styles.title}>{title}</h3>
				<p className={styles.text}>{text}</p>
				<div className={styles.buttons}>
					<Button type='secondary' href='/'>
						Live Site
					</Button>
					<Button type='secondary' href='/'>
						Github
					</Button>
				</div>
			</div>
		</div>
	)
}

export default Card
