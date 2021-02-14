import clsx from 'clsx'
import React, { FunctionComponent } from 'react'
import Button from '~/components/Button'

import styles from './card.module.scss'

interface Props {
	img?: string
	title: string
	text?: string
	projectLink?: string
	repoLink?: string
	className?: string
	[rest: string]: unknown // ...rest property
}

// TODO remove default links before adding real ones

const Card: FunctionComponent<Props> = ({
	img,
	title,
	text,
	projectLink = '/',
	repoLink = '/',
	className,
	...rest
}) => {
	return (
		<div className={clsx(styles.card, className)} {...rest}>
			<div className={styles.imgContainer}>
				<a href={projectLink}>
					<img className={styles.img} src={img} width='100%' />
				</a>
			</div>
			<div className={styles.body}>
				<h3 className={styles.title}>{title}</h3>
				<p className={styles.text}>{text}</p>
				<div className={styles.buttons}>
					<Button className={styles.projectLink} type='secondary' href={projectLink}>
						Live Site
					</Button>
					<Button className={styles.repoLink} type='secondary' href={repoLink}>
						Github
					</Button>
				</div>
			</div>
		</div>
	)
}

export default Card
