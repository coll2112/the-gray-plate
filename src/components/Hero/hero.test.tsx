import React from 'react'
import { render, screen } from '@testing-library/react'
import Hero from '.'

describe('Hero Component', () => {
  it('should render correctly', () => {
    render(
      <Hero title="title" subtitle="subtitle" href="/" btnText="click me" />
    )
    expect(screen.getByText(/click me/i)).toBeInTheDocument()
  })
})
