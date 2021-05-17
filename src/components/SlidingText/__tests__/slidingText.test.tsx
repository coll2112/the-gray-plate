import React from 'react'
import { render, screen } from '@testing-library/react'
import SlidingText from '@components/SlidingText'

const testWords = ['test1', 'test2', 'test3']

describe('SlidingText Component', () => {
  it('should render correctly', () => {
    render(<SlidingText words={testWords} />)
    expect(screen.getByText('test')).toBeInTheDocument()
  })
})
