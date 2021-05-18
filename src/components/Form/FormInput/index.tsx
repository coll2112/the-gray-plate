import React, { ChangeEvent, FunctionComponent } from 'react'

import styles from './formInput.module.scss'

interface Props {
  fieldName: string
  type?: string
  values: any
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const FormInput: FunctionComponent<Props> = ({
  fieldName,
  type,
  values,
  handleChange
}) => (
  <>
    <label className={styles.label} htmlFor={fieldName}>
      {fieldName}:
    </label>
    <input
      className={styles.input}
      name={fieldName}
      type={type}
      value={values[fieldName]}
      onChange={handleChange}
    />
  </>
)

export default FormInput
