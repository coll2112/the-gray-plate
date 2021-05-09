import React, { FunctionComponent } from 'react'

import styles from './slidingText.module.scss'

interface Props {
  text: string
  words: Array<string>
}

const SlidingText: FunctionComponent<Props> = ({ text, words }) => {
  const wordsArr = words.map((word) => <span key={word}>{word}</span>)

  return (
    <h2 className={styles.container}>
      {text} <div className={styles.wordArr}>{wordsArr}</div>
    </h2>
  )
}

export default SlidingText
