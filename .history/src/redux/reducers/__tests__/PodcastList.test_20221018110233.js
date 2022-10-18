import { mockAxios } from 'axios'
import thunk from 'redux-thunk'
import moxios from 'moxios'
import configureMockStore from 'redux-mock-store'
import createMockStore from 'redux-mock-store'

const initialState = {
	loadingPodcastList: false,
	successPodcastList: false,
	errorPodcastList: false,
	error: 'error network',
	podcastList: [],
}
const middleware = [thunk]

const podcasts = [
	{
		attributes: {
			'im:id': '1452608225',
		},
		label:
			'https://podcasts.apple.com/us/podcast/evolution-of-a-snake-the-taylor-swift-podcast/id1452608225?uo=2',
	},
]

console.log(podcasts)

const mockStore = createMockStore([thunk])

describe('thunk test', () => {
	it('should handle fetch podcast list success', () => {
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
		// store.dispatch(gnetworketPodcastList())
		const actions = store.getActions()
		console.log(actions)
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
