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
    { name: 'Projects', href: '/projects' }
  ]

  useMemo(() => {
    setLinkPathName(route)
  }, [route])

  console.log(linkPathName)

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Web Development</h3>
      <div className={styles.links}>
        {links.map(({ href, name }) => {
          const activeLink = linkPathName === href && styles.active
          return (
            <Link key={name} href={href}>
              <a className={clsx(styles.link, activeLink)}>
                <span className={clsx(styles.btnSides, activeLink)} />
                {/* TODO: Fix the buttons jumpiness */}
                <p className={styles['link-text']}>{name}</p>
              </a>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default Header
