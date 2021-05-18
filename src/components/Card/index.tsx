import React, { FunctionComponent } from 'react'
import clsx from 'clsx'
// import Button from '~components/Button'

import styles from './card.module.scss'

interface Props {
  title: string
  img?: string
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
  // repoLink = '/',
  className,
  ...rest
}) => (
  <div className={clsx(styles.card, className)} {...rest}>
    <div className={styles.imgContainer}>
      <a href={projectLink}>
        <img
          alt="ADD_ALT_TEXT"
          className={styles.img}
          src={img}
          width="100%"
        />
      </a>
    </div>
    <div className={styles.body}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.text}>{text}</p>
      <div className={styles.buttons}>
        {/* <Button
          className={styles.projectLink}
          href={projectLink}
          type="secondary"
        >
          Live Site
        </Button>
        <Button className={styles.repoLink} href={repoLink} type="secondary">
          Github
        </Button> */}
      </div>
    </div>
  </div>
)

export default Card
