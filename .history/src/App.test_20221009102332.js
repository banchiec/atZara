import { BrowserRouter as Router } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import { createMemoryHistory } from '@remix-run/router'
import HomeScreen from './pages/HomeScreen'

test('renders learn react link', () => {
	const history = createMemoryHistory('/')
	history.push('/')
	render(
		<Router history={history}>
			<HomeScreen />
		</Router>
	)
	// const linkElement = screen.getByText(/learn react/i);
	// expect(linkElement).toBeInTheDocument();
})
