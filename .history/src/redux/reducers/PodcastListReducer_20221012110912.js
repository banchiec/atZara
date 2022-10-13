import { string } from 'prop-types'
import { normalizeData } from '../../utils/normalize'
import {
	PODCAST_LIST_ERROR,
	PODCAST_LIST_LOADING,
	PODCAST_LIST_SUCCESS,
} from '../constants/PodcastConstants'
import { 
	getLoadingPodcastList, getPodcastlistSuccess,
} from '../actions/podcastListActions'

const initialState = {
	loadingPodcastList: false,
	successPodcastList: false,
	errorPodcastList: false,
	error: string,
	postcastList: [],
}

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
	.get('')
	.then((response) => {
		dispatch(getPodcastlistSuccess())
	})
}
