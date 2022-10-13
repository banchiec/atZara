import { getPodcastList } from '../reducers/PodcastListReducer'
import createMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import axios  from 'axios'

const mockStore = createMockStore([thunk])

describe('thunk test', () => {
	it('should handle fetch podcast list success', async () => {
		axios.get.mockImplementationOnce(() => {
				Promise.resolve({ data: [{ "id": {
					"attributes": {
					"im:id": "1534",
					"label": "Music",
					"scheme":"http://Localstore.com",
					"term"

					},
					"label": 'labelblabla'
				} , "title": 'test' }] })
		})
		const store = mockStore()
		store.dispatch(getPodcastList())
		// store.dispatch(getPodcastList())
		const actions = store.getActions()
		console.log(actions)
	})
})
