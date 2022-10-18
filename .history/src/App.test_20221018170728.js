import { BrowserRouter as Router, Routes } from 'react-router-dom'
import { render as rtlRender } from '@testing-library/react'
import { createMemoryHistory } from '@remix-run/router'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import HomeScreen from './pages/HomeScreen/HomeScreen'

const render = (component) => rtlRender(<Provider store={store}>{component}</Provider>)

test('renders route HomeScreen', () => {
	const history = createMemoryHistory('/')
	history.push('/')
	render(
		<Router history={history}>
			<HomeScreen />
		</Router>
	)
})