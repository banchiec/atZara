import { createMemoryHistory } from '@remix-run/router'
import { BrowserRouter as Router } from 'react-router-dom'
import configureMockStore from 'redux-mock-store'
import { render as rtlRender } from '@testing-library/react'
import { Provider } from 'react-redux'
// import { store } from '../../redux/store'
import HomeScreen from './HomeScreen'
import thunk from 'redux-thunk'

const middleware = [thunk]
const mockStore = configureMockStore(middleware)

const render = (component) => rtlRender(<Provider store={mok}>{component}</Provider>)

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
