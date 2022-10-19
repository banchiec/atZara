import { createMemoryHistory } from '@remix-run/router'
import { render as rtlRender } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import configureMockStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import HomeScreen from './HomeScreen'
import thunk from 'redux-thunk'

const middleware = [thunk]
const mockStore = configureMockStore(middleware)
const store = mockStore()
const initialState = {
	loadingPodcastList: false,
	successPodcastList: false,
	errorPodcastList: false,
	error: 'error network',
	podcastList: [],
}
console.log(store.getActions())

const render = (component) => rtlRender(<Provider store={store}>{component}</Provider>)

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
