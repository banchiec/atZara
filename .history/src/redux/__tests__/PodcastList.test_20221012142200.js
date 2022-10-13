import { getPodcastList } from '../reducers/PodcastListReducer'
import createMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
imort mockAxios from 'axios'


const mockStore = createMockStore([thunk])

describe('thunk test', () => {
	it('should handle fetch podcast list success', async () => {
		.get.mockImplementationOnce(() => {
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
		store.dispatch(getPodcastList())
		const actions = store.getActions()
		console.log(actions)
	})
})
