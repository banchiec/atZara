import { createHashHistory } from '@remix-run/router'
import { render } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import Header from './Header'

describe('Testing header', () => {
	test('Rendering header component', () => {
		const history = createMemoryHistory('/')
		render(
			<Router>
				<Header />
			</Router>
		)
	})
})
