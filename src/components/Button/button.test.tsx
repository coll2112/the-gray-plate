import React from 'react'
import { render } from '@testing-library/react'
import Button from '@components/Button'

describe('Button', () => {
  it('should render correctly', () => {
    const { container } = render(
      <Button href="/" type="primary">
        Test
      </Button>
    )
    expect(container.querySelector('.primary')).toBeInTheDocument()
  })
})
