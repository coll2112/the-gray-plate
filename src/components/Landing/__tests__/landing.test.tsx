import React from 'react'
import { render, screen } from '@testing-library/react'
import Landing from '@components/Landing'

describe('Landing Component', () => {
  it('should render correctly', () => {
    render(<Landing />)
    expect(screen.getByText('Front End Web Developer'))
  })
})
