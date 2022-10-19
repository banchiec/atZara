import { render as rtlRender } from '@testing-library/react'
import { Provider } from 'react-redux'
import store from '../../redux/store'
import HomeScreen from './HomeScreen'

const render = (component) => rtlRender(<Provider store={store}>{component}</Provider>)

describe('whould render Home and recieved data', () => {
	it('render Home', () => {
		const history = createMemoryHistor('/')
		render(<HomeScreen />)
	})
})
