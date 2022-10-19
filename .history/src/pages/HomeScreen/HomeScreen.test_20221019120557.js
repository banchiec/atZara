import { createMemoryHistory } from '@remix-run/router'
import { render as rtlRender } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import configureMockStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import HomeScreen from './HomeScreen'
import thunk from 'redux-thunk'

const middleware = [thunk]
const mockStore = configureMockStore(middleware)

console.log(object);
const render = (component) =>
	rtlRender(<Provider store={mockStore}>{component}</Provider>)

describe('whould render Home and recieved data', () => {
	it('render Home', () => {
		const history = createMemoryHistory('/')
		render(
			<Router history={history}>
				<HomeScreen />
			</Router>
		)
	})
})
