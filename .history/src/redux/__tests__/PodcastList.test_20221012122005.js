import { getPodcastList } from '../reducers/PodcastListReducer'
import createMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import mockAxios from 'axios'

const mockStore = createMockStore([thunk])

describe('thunk test', () => {
	it('should handle fetch podcast list success', () => {})
		mockAxios.get.mockImple
		const store = mockStore()
		store.dispatch(getPodcastList)
})
