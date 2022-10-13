import { PODCAST_LIST_LOADING, PODCAST_LIST_SUCCESS } from '../constants/PodcastConstants'

const initialState = {
	loadingPodcastList: false,
	successPodcastList: false,
	errorPodcastList: false,
	postcastList: [],
}
export const podcastListReducer = (state = initialState, action = {}) => {
	switch (action.type) {
		case PODCAST_LIST_LOADING:
			return { 
				...state, 
				loadingPodcastList: true }
		case PODCAST_LIST_SUCCESS: 
		return { 
			...state, 
			podcastList: action.payload, 
			loadingPodcastList: false,
			successPodcastList: true 
		}
		default:
			return state
	}
}
