import React, { FunctionComponent } from 'react'
import Button from '~/components/Button'
import styles from './hero.module.scss'

interface Props {
  title: string
  subtitle?: string
  bgImg?: string
  href: string
  btnText: string
  [rest: string]: unknown // ...rest property
}

const Hero: FunctionComponent<Props> = ({
  title,
  subtitle,
  href,
  bgImg,
  btnText,
  ...rest
}) => {
  return (
    <div className={styles.container} {...rest}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.subtitle}>{subtitle}</p>
      <Button type="secondary" href={href}>
        {btnText}
      </Button>
    </div>
  )
}

export default Hero
