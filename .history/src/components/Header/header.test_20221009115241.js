import { createMemoryHistory } from '@remix-run/router'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BrowserRouter as Router} from 'react-router-dom'
import Header from './Header'

describe('Testing header', () => {
	test('Rendering header component', () => {
		const history = createMemoryHistory('/')
		// eslint-disable-next-line testing-library/render-result-naming-convention
		const component = render(
			<Router history={history}>
				<Header />
			</Router>
		)
		// eslint-disable-next-line jest/valid-expect, testing-library/no-debugging-utils
		expect(component.debug()).toBe('/')
	})
	test('Check the click event', () => {
		const history = createMemoryHistory('/')
		render(
			<Router history={history}>
				<Header />
			</Router>
		)
		userEvent.click(screen.getByText('Podcaster'))
		expect(history.location.pathname).toBe('/')
	})
})
