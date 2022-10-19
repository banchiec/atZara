import { render as rtlRender } from '@testing-library/react'
import { Provider } from 'react-redux'
import HomeScreen from './HomeScreen'

const render = (component) => rtlRender(<Provider store={store}>{compnent}</Provider>)
describe('whould render Home and recieved data', () => {
	it('render Home', () => {
		render(<HomeScreen />)
	})
})
