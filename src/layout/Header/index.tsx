import React, { FunctionComponent, useMemo, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import clsx from 'clsx'

import styles from './header.module.scss'

const Header: FunctionComponent = () => {
  const [linkPathName, setLinkPathName] = useState<string>()
  const { route } = useRouter()
  const links = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' }
  ]

  useMemo(() => {
    setLinkPathName(route)
  }, [route])

  const linkMap = links.map(({ href, name }) => {
    const activeLink = linkPathName === href && styles.active
    return (
      <Link key={name} href={href}>
        <a className={clsx(styles.link, activeLink)}>
          <span className={clsx(styles.btnSides, activeLink)} />
          <p className={styles['link-text']}>{name}</p>
        </a>
      </Link>
    )
  })

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Lee Collins</h3>
      <div className={styles.links}>{linkMap}</div>
    </div>
  )
}

export default Header
