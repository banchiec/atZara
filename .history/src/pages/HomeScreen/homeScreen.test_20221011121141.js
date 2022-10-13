import { render as rtlRender } from '@testing-library/react'
import { Provider } from 'react-redux'
import { store } from '../../../'
import HomeScreen from './HomeScreen'

const render = (component) => rtlRender(<Provider store={store}>{component}</Provider>)

test('should fecht podcast', () => {
	render(<HomeScreen />)
})
