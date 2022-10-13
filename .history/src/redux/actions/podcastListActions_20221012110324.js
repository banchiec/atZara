import {
	PODCAST_LIST_ERROR,
	PODCAST_LIST_LOADING,
	PODCAST_LIST_SUCCESS,
} from '../constants/PodcastConstants'

export const loadingPodcastList = () => ({
	type: PODCAST_LIST_LOADING,
})

export const getPodcastlistSuccess = (payload) => ({
	type: PODCAST_LIST_SUCCESS,
	payload,
})

export const errorPodcastList = (error) => ({
	type: PODCAST_LIST_ERROR,
	error,
})
