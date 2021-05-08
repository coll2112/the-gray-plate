import React, { FunctionComponent } from 'react'
import Link from 'next/link'

import styles from './header.module.scss'

const Header: FunctionComponent = () => {
  const links = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' }
  ]

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Web Development</h3>
      <div className={styles.links}>
        {links.map(({ href, name }) => (
          <Link key={name} href={href}>
            <a className={styles.link}>
              <span className={styles.btnSides} />
              {/* TODO: Fix the buttons jumpiness */}
              <p className={styles['link-text']}>{name}</p>
            </a>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Header
