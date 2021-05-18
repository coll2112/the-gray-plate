import React, { FunctionComponent, createElement } from 'react'
import clsx from 'clsx'
import Link from 'next/link'

import styles from './button.module.scss'

interface Props {
  btnType: 'primary' | 'secondary' | 'link'
  href?: string
  className?: string
  [rest: string]: unknown // ...rest property
}

const Button: FunctionComponent<Props> = ({
  href,
  btnType,
  className,
  ...rest
}) => {
  const elementType = {
    primary: 'button',
    secondary: 'button',
    link: 'a'
  }

  const button = createElement(elementType[btnType], {
    className: clsx(styles[btnType], className),
    ...rest
  })

  if (href) {
    return <Link href={href}>{button}</Link>
  }

  return button
}

export default Button
