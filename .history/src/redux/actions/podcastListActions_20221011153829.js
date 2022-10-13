import { PODCAST_LIST_LOADING } from '../constants/PodcastConstants'

export const loadingPodcastList = () => ({
	type: PODCAST_LIST_LOADING,
})
export const succcesPodcastlist = (payload) => ({
	type: PODCAST_LIST_SUCCESS,
	payload,
})
