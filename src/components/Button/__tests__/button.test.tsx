import React from 'react'
import { render, screen } from '@testing-library/react'
import Button from '@components/Button'

describe('Button', () => {
  it('should render correctly', () => {
    render(
      <Button href="/" type="primary">
        Test
      </Button>
    )
    expect(screen.getByText('Test')).toBeInTheDocument()
  })
})
