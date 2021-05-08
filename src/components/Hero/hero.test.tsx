import React from 'react'
import { render, screen } from '@testing-library/react'
import Hero from '.'

describe('Hero Component', () => {
  it('should render correctly', () => {
    render(
      <Hero btnText="click me" href="/" subtitle="subtitle" title="title" />
    )
    expect(screen.getByText(/click me/i)).toBeInTheDocument()
  })
})
