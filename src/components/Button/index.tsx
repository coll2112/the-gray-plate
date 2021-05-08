import React, { FunctionComponent, createElement } from 'react'
import clsx from 'clsx'
import Link from 'next/Link'
import styles from './button.module.scss'

interface Props {
  children: string
  href: string
  type: 'primary' | 'secondary' | 'link'
  className?: string
  [rest: string]: unknown // ...rest property
}

const Button: FunctionComponent<Props> = ({
  href,
  type,
  className,
  children,
  ...rest
}) => {
  const btnType = {
    primary: 'button',
    secondary: 'button',
    link: 'a'
  }

  return (
    <Link href={href}>
      {createElement(
        btnType[type],
        { className: clsx(styles[type], className), ...rest },
        children
      )}
    </Link>
  )
}

export default Button
