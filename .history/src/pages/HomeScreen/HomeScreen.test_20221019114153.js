import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import HomeScreen from './HomeScreen'

const render = (component) => rtlRender(<Provider store={store}></Provider>)
describe('whould render Home and recieved data', () => {
	it('render Home', () => {
		render(<HomeScreen />)
	})
})