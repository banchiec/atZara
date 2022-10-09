import { render } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import Header from './Header'

describe('Testing header', () => {
	test('Rendering header component', () => {
		render(
			<Router>
				<Header />
			</Router>
		)
	})
})
