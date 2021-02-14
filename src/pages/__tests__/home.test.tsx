import React from 'react'
import { render, screen } from '@testing-library/react'
import Home from '~/pages'

describe('Home Page', () => {
	it('should render correctly', () => {
		render(<Home />)
		expect(
			screen.getByRole('heading', { name: /Front End Web Developer/i })
		).toBeInTheDocument()
	})
})
