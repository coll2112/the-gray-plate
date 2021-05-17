import React, { ChangeEvent, FormEvent, useCallback, useState } from 'react'
import { defaultFormValues } from '@consts/form'

import styles from './form.module.scss'

const Form = () => {
  const [inputValues, setInputValues] = useState(defaultFormValues)

  const handleOnChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { value, name } = e.target
      setInputValues({ ...inputValues, [name]: value })
    },
    [setInputValues, inputValues]
  )

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Submitted')
  }

  const handleReset = () => {
    setInputValues(defaultFormValues)
    console.log('Fields Cleared')
  }

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.label} htmlFor="name">
          Name:
        </label>
        <input
          className={styles.input}
          name="name"
          type="text"
          value={inputValues.name}
          onChange={handleOnChange}
        />
        <label className={styles.label} htmlFor="email">
          Email:
        </label>
        <input
          className={styles.input}
          name="email"
          type="text"
          value={inputValues.email}
          onChange={handleOnChange}
        />
        <label className={styles.label} htmlFor="message">
          Message:
        </label>
        <input
          className={styles.input}
          name="message"
          type="textInput"
          value={inputValues.message}
          onChange={handleOnChange}
        />
        <div className={styles.buttons}>
          <button className={styles.button} type="submit">
            Submit
          </button>
          <button
            className={styles.button}
            type="button"
            onClick={handleReset}
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  )
}

export default Form
