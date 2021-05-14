import SlidingText from 'components/SlidingText'
import React, { FunctionComponent } from 'react'

import styles from './landing.module.scss'

const Landing: FunctionComponent = () => {
  const items = ['Developer', 'Husband', 'Dog Lover', 'Geek']

  return (
    <div className={styles.container}>
      <p className={styles.preTitle}>Lee Collins</p>
      <h1 className={styles.title}>Front End Web Developer</h1>
      <div className={styles.text}>
        <h4>Meet Lee! He's a...</h4>
        <SlidingText words={items} />
      </div>
      <span className={styles.backgroundImg} />
      <span className={styles.backgroundColor} />
    </div>
  )
}

export default Landing
