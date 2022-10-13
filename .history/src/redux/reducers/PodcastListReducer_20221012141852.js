import { string } from 'prop-types'
import { normalizeData } from '../../utils/normalize'
import {
	PODCAST_LIST_ERROR,
	PODCAST_LIST_LOADING,
	PODCAST_LIST_SUCCESS,
} from '../constants/PodcastConstants'
import {
	getLoadingPodcastList,
	getPodcastListError,
	getPodcastlistSuccess,
} from '../actions/podcastListActions'
import axios from 'axios'

const initialState = {
	loadingPodcastList: false,
	successPodcastList: false,
	errorPodcastList: false,
	error: string,
	postcastList: [],
}
const url = 'https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json'

export const podcastListReducer = (state = initialState, action = {}) => {
	switch (action.type) {
		case PODCAST_LIST_LOADING:
			return {
				...state,
				loadingPodcastList: true,
			}
		case PODCAST_LIST_SUCCESS:
			return {
				...state,
				loadingPodcastList: false,
				successPodcastList: true,
				podcastList: normalizeData(action.payload),
			}
		case PODCAST_LIST_ERROR:
			return {
				...state,
				error: action.error,
				loadingPodcastList: false,
				successPodcastList: false,
				errorPodcastList: false,
				podcastList: [],
			}
		default:
			return state
	}
}

//thunk

export const getPodcastList = () => (dispatch) => {
	dispatch(getLoadingPodcastList())
	return axios
		.get(url)
		.resolve((response) => {
			dispatch(getPodcastlistSuccess(response.data.feed.entry))
		})
		.reject((response) => {
			dispatch(getPodcastListError(response.data.feed.entry))
		})
}
