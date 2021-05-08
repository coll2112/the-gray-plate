import React, { FunctionComponent } from 'react'
import Button from 'components/Button'
import styles from './hero.module.scss'

interface Props {
  title: string
  subtitle?: string
  href: string
  btnText: string
  [rest: string]: unknown // ...rest property
}

const Hero: FunctionComponent<Props> = ({
  title,
  subtitle,
  href,
  btnText,
  ...rest
}) => (
  <div className={styles.container} {...rest}>
    <h1 className={styles.title}>{title}</h1>
    <p className={styles.subtitle}>{subtitle}</p>
    <Button href={href} type="secondary">
      {btnText}
    </Button>
  </div>
)

export default Hero
