import { createMemoryHistory } from '@remix-run/router'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './Header'

describe('Testing header', () => {
	test('Rendering header component', () => {
		const history = createMemoryHistory('/')
		render(
			<Router history={history}>
				<Header />
			</Router>
		)
	})
	test('Check the click event', () => {
		const history = createMemoryHistory('/')
		render(
			<Route history={history}>
				<Header/>
			</Route>
		)
		userEvent.click(screen.getByText('Podcaster'))
		expect(history.location.pathname).toBe('/')
	})
})
