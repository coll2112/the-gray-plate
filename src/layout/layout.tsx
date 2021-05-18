import React, { FunctionComponent } from 'react'
import Header from '~layout/Header'

import styles from './layout.module.scss'

const Layout: FunctionComponent = ({ children }) => (
  <>
    <Header />
    <div className={styles.container}>{children}</div>
  </>
)

export default Layout
