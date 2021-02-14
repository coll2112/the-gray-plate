import React from 'react'
import { render, screen } from '@testing-library/react'
import About from '~/pages/about'

describe('About Page', () => {
	it('should render correctly', () => {
		render(<About />)
		expect(
			screen.getByRole('heading', { name: 'About Page' })
		).toBeInTheDocument()
	})
})
