import { getPodcastList } from '../reducers/PodcastListReducer'
import createMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import mockAxios from 'axios'

const mockStore = createMockStore([thunk])

describe('thunk test', () => {
	it('should handle fetch podcast list success', async () => {
		mockAxios.get.mockImplementationOnce(() => {
			Promise.resolve({
				data: [
					{
						id: {
							attributes: {
								'im:id': '1534',
								label: 'Music',
								scheme: 'http://Localstore.com',
								term: 'Music History',
							},
							label: 'labelblabla',
						},
						title: 'test',
					},
				],
			})
		})
		const store = mockStore()
		// console.log(mockAxios);
		// await store.dispatch(getPodcastList())
		// const actions = store.getActions()
		// console.log(actions)
	})
})
