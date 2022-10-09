import { createMemoryHistory } from '@remix-run/router'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BrowserRouter as Router } from 'react-router-dom'
import Header from './Header'

describe('Testing header', () => {
	test('Rendering header component', () => {
		const history = createMemoryHistory('/')
		render(
			<Router history={history}>
				<Header />
			</Router>
		)
		userEvent.click(scree.getByText('Podcaster'))
	})
})
