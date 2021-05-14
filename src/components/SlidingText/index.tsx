import React, { FunctionComponent } from 'react'

import styles from './slidingText.module.scss'

interface Props {
  words: Array<string>
}

const SlidingText: FunctionComponent<Props> = ({ words }) => {
  const wordsArr = words.map((word) => <span key={word}>{word}</span>)

  return (
    <div className={styles.container}>
      <div className={styles.wordArr}>{wordsArr}</div>
    </div>
  )
}

export default SlidingText
