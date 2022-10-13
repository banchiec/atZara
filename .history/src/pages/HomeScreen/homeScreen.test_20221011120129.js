import { render as rtlRender } from '@testing-library/react'
import { Provider } from 'react-redux'
import HomeScreen from './HomeScreen'
const render = (component) => rtlRender(<Provider>{component}</Provider>)
test('should fecht podcast', () => {
	render(<HomeScreen />)
})
