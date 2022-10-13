import { render as rtlRender } from '@testing-library/react'
import { Provider } from 'react-redux'
const render = (component) => rtlRender(<Provider>{component}</Provider>)
test('should fecht podcast', () => {})
