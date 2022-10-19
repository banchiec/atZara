import moxios from 'moxios'
import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store'
import { getPodcastList } from '../../redux/reducers/PodcastListReducer'
import {
	PODCAST_LIST_ERROR,
	PODCAST_LIST_LOADING,
	PODCAST_LIST_SUCCESS,
} from '../../redux/constants/PodcastConstants'
import { render } from '@testing-library/react'
import HomeScreen from './HomeScreen'

const middleware = [thunk]
const mockStore = configureMockStore(middleware)

const initialState = {
	loadingPodcastList: false,
	successPodcastList: false,
	errorPodcastList: false,
	error: 'error network',
	podcastList: [],
}

const store = mockStore(initialState)
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

const render = rtlRender(<Provider></Provider>)

describe('Test Podcast Actions', function () {
	it('Loads all post correctly', () => {
		// eslint-disable-next-line testing-library/await-async-utils
		moxios.wait(function () {
			let request = moxios.requests.mostRecent()
			request.respondWith({
				status: 200,
				response: [
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
				],
			})
			const expectedActions = [
				{
					type: PODCAST_LIST_SUCCESS,
					podcastList: podcasts,
				},
				{
					type: PODCAST_LIST_LOADING,
				},
			]
			return store.dispatch(getPodcastList()).then(() => {
				const actualAction = store.getActions()
				expect(actualAction).toEqual(expectedActions)
			})
		})
	})
	it('Returns error actions when no podcast found', () => {
		// eslint-disable-next-line testing-library/await-async-utils
		moxios.wait(function () {
			let request = moxios.requests.mostRecent()
			request.respondWith({
				status: 200,
				response: [],
			})
			const expectedActions = [
				{
					type: PODCAST_LIST_ERROR,
				},
			]
			return store.dispatch(getPodcastList()).then(() => {
				const actualAction = store.getActions()
				expect(actualAction).toEqual(expectedActions)
			})
		})
	})
	it('Render Home component', () => {
		render(<HomeScreen/>)
	})
})