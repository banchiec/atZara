import { render as rtlRender } from '@testing-library/jest-dom'
import { Provider } from 'react-redux'

const render = (component) => rtlRender(<Provider>{component}</Provider>)
describe('Show component', () => {
	it('show', () => {
		render(<PodcastLis/>)
	})
})
