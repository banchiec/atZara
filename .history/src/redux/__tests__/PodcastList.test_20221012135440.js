import { getPodcastList } from '../reducers/PodcastListReducer'
import createMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import mockAxios from 'axios'

const mockStore = createMockStore([thunk])

describe('thunk test', () => {
	it('should handle fetch podcast list success', async () => {
		mockAxios.get.mockImplementationOnce(() => {
			Promise.resolve({ data: [{ id: 1, name: 'test' }] })
		})
		const store = mockStore()
		console.log(store.dispatch())
		// store.dispatch(getPodcastList())
		// const actions = store.getActions()
		// console.log(actions)
	})
})