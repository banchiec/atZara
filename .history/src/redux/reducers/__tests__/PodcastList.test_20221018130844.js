import { mockAxios } from 'axios'
import thunk from 'redux-thunk'
import moxios from 'moxios'
import configureMockStore from 'redux-mock-store'

const initialState = {
	loadingPodcastList: false,
	successPodcastList: false,
	errorPodcastList: false,
	error: 'error network',
	podcastList: [],
}
const middleware = [thunk]
const mockStore = configureMockStore(middleware)

const podcasts = [
	{
		id: {
			attributes: {
				'im:id': '1452608225',
			},
			label:
				'https://podcasts.apple.com/us/podcast/evolution-of-a-snake-the-taylor-swift-podcast/id1452608225?uo=2',
		},
		image: [
			{
				attributes: {
					height: '55',
				},
				label:
					'https://is2-ssl.mzstatic.com/image/thumb/Podcasts126/v4/0c/a2/bb/0ca2bba3-5c0d-1c1f-b6ce-2e6ab4320b47/mza_1819810769375974713.jpg/55x55bb.png',
			},
		],
	},
]

console.log(podcasts)

describe('thunk test', () => {
	let store
	beforeEach(() => {
		moxios.install()
		store = mockStore(initialState)
	})

	afterEach(() => {
		moxios.uninstall()
	})

	it('should handle fetch podcast list success', () => {
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
	})
})