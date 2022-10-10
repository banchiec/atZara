import { createSlice } from '@reduxjs/toolkit'
import { fetchPodcastList } from './PodcastApi'

const initialState = {
	loadingPodcastList: false,
	successPodcastList: false,
	errorPodcastList: false,
	podcastList: [],
}

export const PodcastSlice = createSlice({
	name: 'podcast',
	initialState,
	reducer: {},
	extraReducers: (build) => {
		build.addCase(fetchPodcastList, (state) => {
			state
		})
	},
})

export default PodcastSlice.reducer