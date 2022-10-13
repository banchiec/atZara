import mockAxios from 'axios'
import thunk from 'redux-thunk'
import createMockStore from 'redux-mock-store'
import { getPodcastList } from '../PodcastListReducer'

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
		await store.dispatch(getPodcastList)
		// const actions = store.getActions()
		// console.log(actions)
	})
})
