import { BrowserRouter as Router } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import App from './App'

test('renders learn react link', () => {
	render(
    <Router>

    </Router>
  <App />)
	// const linkElement = screen.getByText(/learn react/i);
	// expect(linkElement).toBeInTheDocument();
})
