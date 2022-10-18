import axios from 'axios'
import thunk from 'redux-thunk'
import {
	PODCAST_LIST_LOADING,
	PODCAST_LIST_SUCCESS,
} from '../../constants/PodcastConstants'
import createMockStore from 'redux-mock-store'
import { getPodcastList } from '../PodcastListReducer'
import { getLoadingPodcastList } from '../../actions/podcastListActions'

// jest.mock('axios', () => {
// 	return {
// 		get: jest.fn()
// 	}
// })

const mockStore = createMockStore([thunk])

describe('thunk test', () => {
	it('should handle fetch podcast list success', () => {

		const podcastLis = [{}]
		// mockAxios.get.mockImplementationOnce(() => {
		// 	Promise.resolve({
		// 		data: [
		// 			{
		// 				id: {
		// 					attributes: {
		// 						'im:id': '1534',
		// 						label: 'Music',
		// 						scheme: 'http://Localstore.com',
		// 						term: 'Music History',
		// 					},
		// 					label: 'labelblabla',
		// 				},
		// 				title: 'test',
		// 			},
		// 		],
		// 	})
		// })
		// const store = mockStore()
		// store.dispatch(getPodcastList())
		// const actions = store.getActions()
		// const expectedActions = [
		// 	{ type: PODCAST_LIST_LOADING },
		// 	{
		// 		type: PODCAST_LIST_SUCCESS,
		// 		payload: [
		// 			{
		// 				id: {
		// 					attributes: {
		// 						'im:id': '1534',
		// 						label: 'Music',
		// 						scheme: 'http://Localstore.com',
		// 						term: 'Music History',
		// 					},
		// 					label: 'labelblabla',
		// 				},
		// 				title: 'test',
		// 			},
		// 		],
		// 	},
		// ]
		// expect(actions).toEqual(expectedActions)
	})
})
