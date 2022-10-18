import { render as rtlRender } from '@testing-library/jest-dom'

const render = (component) => rtlRender(<Provide>{component}</Provider>)
describe('Show component', () => {
	it('show', () => {})
})
