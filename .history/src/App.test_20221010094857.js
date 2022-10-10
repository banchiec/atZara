import { BrowserRouter as Router } from 'react-router-dom'
import { render } from '@testing-library/react'
import { createMemoryHistory } from '@remix-run/router'
import HomeScreen from './pages/HomeScreen/HomeScreen'

test('renders route HomeScreen', () => {
	const history = createMemoryHistory('/')
	history.push('/')
	const { debug } = render(
		<Router history={history}>
			<HomeScreen />
		</Router>
	)
	expect(debug())
})
