import React, { FunctionComponent } from 'react'

import styles from './landing.module.scss'

const Landing: FunctionComponent = () => (
  <div className={styles.container}>
    <h1 className={styles.title}>Front End Web Developer</h1>
    <h2>
      I am a
      <div className={styles.words}>
        <span>Front End Web Developer</span>
        <span>Loving Husband</span>
        <span>Lover of Dogs</span>
        <span>Super Comic Book Geek</span>
      </div>
    </h2>
    <span className={styles.backgroundImg} />
    <span className={styles.backgroundColor} />
  </div>
)

export default Landing
