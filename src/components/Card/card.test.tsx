import React from 'react'
import { render, screen } from '@testing-library/react'
import Card from '.'

describe('Card Component', () => {
  it('should render correctly', () => {
    render(<Card title="Card Title" />)
    expect(screen.getByText(/card title/i)).toBeInTheDocument()
  })
})
