import React, { ChangeEvent, FormEvent, useCallback, useState } from 'react'
import { defaultFormValues } from '@consts/form'
import FormInput from '@components/Form/FormInput'

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
        <FormInput
          fieldName="name"
          handleChange={handleOnChange}
          values={inputValues.name}
        />
        <FormInput
          fieldName="email"
          handleChange={handleOnChange}
          values={inputValues.email}
        />
        <FormInput
          fieldName="message"
          handleChange={handleOnChange}
          values={inputValues.message}
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
