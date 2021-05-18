import React from 'react'
import { render, screen } from '@testing-library/react'
import Card from '~components/Card'

describe('Card Component', () => {
  it('should render correctly', () => {
    render(<Card title="Card Title" />)
    expect(screen.getByText(/card title/i)).toBeInTheDocument()
  })
})
