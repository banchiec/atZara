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
		build.addCase(fetchPodcastList.pending, (state) => {
			state.loadingPodcastList = true
		})
		build.addCase(fetchPodcastList.fulfilled, (state, action) => {
			state.loadingPodcastList = false
			state.successPodcastList = true
			podcastList = action.payload
		})
	},
})

export default PodcastSlice.reducer
