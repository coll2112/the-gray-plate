import React from 'react'
import Button from 'components/Button'
import Header from 'components/Header'

export default function About() {
  return (
    <div>
      <Header />
      <h1>About Page</h1>
      <div>
        <Button href="/" type="secondary">
          Back to Home Page
        </Button>
      </div>
    </div>
  )
}
