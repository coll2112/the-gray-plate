import SlidingText from 'components/SlidingText'
import React, { FunctionComponent } from 'react'

import styles from './landing.module.scss'

const Landing: FunctionComponent = () => (
  <div className={styles.container}>
    <h1 className={styles.title}>Front End Web Developer</h1>
    <div className={styles.text}>
      <SlidingText
        prependText="I am a"
        words={['Developer', 'Husband', 'Dog Lover', 'Geek']}
      />
    </div>
    <span className={styles.backgroundImg} />
    <span className={styles.backgroundColor} />
  </div>
)

export default Landing
