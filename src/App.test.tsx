import { render, waitForElementToBeRemoved, screen } from 'test-utils'

import { it } from 'vitest'

import App from './App'

it('should render component correctly', () => {
	render(<App />)
})

it('should render component correctly', async () => {
	render(<App />)

	const loader = screen.getByTestId('loader')
	await waitForElementToBeRemoved(loader)
})