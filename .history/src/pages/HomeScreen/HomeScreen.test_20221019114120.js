import { render } from '@testing-library/react'
import HomeScreen from './HomeScreen'

const render = (component)
describe('whould render Home and recieved data', () => {
	it('render Home', () => {
		render(<HomeScreen />)
	})
})
