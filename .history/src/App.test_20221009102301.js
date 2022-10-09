import { BrowserRouter as Router } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import App from './App'
import { createMemoryHistory } from '@remix-run/router'

test('renders learn react link', () => {
	const history = createMemoryHistory('/')
  
	render(<Router history={history}></Router>)
	// const linkElement = screen.getByText(/learn react/i);
	// expect(linkElement).toBeInTheDocument();
})