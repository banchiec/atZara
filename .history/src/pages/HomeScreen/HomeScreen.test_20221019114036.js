import { render } from '@testing-library/react'
import HomeScreen from './HomeScreen'

describe('whould render Home and recieved data', () => {
	it('render Home', () => {
		render(<HomeScreen />)
	})
})
