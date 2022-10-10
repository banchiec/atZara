import { createSlice } from '@reduxjs/toolkit'

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
		build.addCase(fetch)
	},
})

export default PodcastSlice.reducer
