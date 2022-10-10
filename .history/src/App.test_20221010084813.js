import { BrowserRouter as Router } from 'react-router-dom'
import { render } from '@testing-library/react'
import { createMemoryHistory } from '@remix-run/router'
import HomeScreen from './pages/HomeScreen/HomeScreen'
import { store } from './App/store'

test('renders route HomeScreen', () => {
	const history = createMemoryHistory('/')
	history.push('/')
	render(
		<Router history={history}>
			<HomeScreen />
		</Router>
	)
	it('should initially set games to an empty object', () => {
		const state = store.getState().podcast
		expect(state.podcast)
	})
})
