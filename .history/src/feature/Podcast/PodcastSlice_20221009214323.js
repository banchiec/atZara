import { createSlice } from '@reduxjs/toolkit'
const initialState = {
	loadingPodcastList: false,
	successPodcastList: false,
	errorPodcastList: false,
	podcast: [],
}

export const PodcastSlice = createSlice({
	name: 'podcast',
	initialState,
	reducer: {},
	extraReducers
})
