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
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Name:
          <input
            name="name"
            type="text"
            value={inputValues.name}
            onChange={handleOnChange}
          />
        </label>
        <label htmlFor="email">
          Email:
          <input
            name="email"
            type="text"
            value={inputValues.email}
            onChange={handleOnChange}
          />
        </label>
        <label htmlFor="message">
          What Would You Like To Say?:
          <input
            name="message"
            type="textInput"
            value={inputValues.message}
            onChange={handleOnChange}
          />
        </label>
        <button type="submit">Submit</button>
        <button type="button" onClick={handleReset}>
          Reset
        </button>
      </form>
    </div>
  )
}

export default Form
