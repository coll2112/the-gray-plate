import React from 'react'
import { render } from '@testing-library/react'
import Button from '.'

describe('Button', () => {
	it('should render correctly', () => {
		const { container } = render(
			<Button type='primary' href='/'>
				Test
			</Button>
		)
		expect(container.querySelector('.primary')).toBeInTheDocument()
	})
})
