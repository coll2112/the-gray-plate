import React, { ChangeEvent, FormEvent, useCallback, useState } from 'react'
import { defaultFormValues } from '@consts/form'
import FormInput from '@components/Form/FormInput'
import Button from '@components/Button'

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

  const handleReset = () => {
    setInputValues(defaultFormValues)
    console.log('Fields Cleared')
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Submitted')
  }

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <FormInput
          fieldName="name"
          handleChange={handleOnChange}
          values={inputValues}
        />
        <FormInput
          fieldName="email"
          handleChange={handleOnChange}
          values={inputValues}
        />
        <FormInput
          fieldName="message"
          handleChange={handleOnChange}
          values={inputValues}
        />
        <div className={styles.buttons}>
          <Button btnType="primary" type="submit" onClick={handleSubmit}>
            Submit
          </Button>
          <Button btnType="primary" type="reset" onClick={handleReset}>
            Reset
          </Button>
        </div>
      </form>
    </div>
  )
}

export default Form
