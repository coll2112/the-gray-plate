import React, { FunctionComponent } from 'react'

import styles from './slidingText.module.scss'

interface Props {
  prependText?: string
  words: Array<string>
}

const SlidingText: FunctionComponent<Props> = ({ prependText, words }) => {
  const wordsArr = words.map((word) => <span key={word}>{word}</span>)

  return (
    <div className={styles.container}>
      <h2>
        {prependText} <div className={styles.wordArr}>{wordsArr}</div>
      </h2>
    </div>
  )
}

export default SlidingText
