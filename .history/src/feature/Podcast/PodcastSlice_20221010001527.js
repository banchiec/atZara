import { createSlice } from '@reduxjs/toolkit'
import { setWithExpiryLocalStorage } from '../../utils/localStorage'
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
	// extraReducers: (build) => {
	// 	build.addCase(fetchPodcastList.pending, (state) => {
	// 		state.loadingPodcastList = true
	// 	})
	// 	build.addCase(fetchPodcastList.fulfilled, (state, action) => {
	// 		state.loadingPodcastList = false
	// 		state.successPodcastList = true
	// 		state.podcastList = action.payload
	// 		setWithExpiryLocalStorage('podcast', JSON.stringify(action.payload), 360000)
	// 	})
	},
})

export default PodcastSlice.reducer
