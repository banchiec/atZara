import { mockAxios } from 'axios'
import thunk from 'redux-thunk'
import createMockStore from 'redux-mock-store'
import { getPodcastList } from '../PodcastListReducer'
import { getPodcastlistSuccess } from '../../actions/podcastListActions'

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
		const store = await mockStore()
		store.dispatch(lo())
		console.log(store)
		const actions = store.getActions()
		console.log(actions)
	})
})
