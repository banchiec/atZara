import { configureStore, createStore } from '@reduxjs/toolkit'
import podcastReducer from '../feature/Podcast/PodcastSlice'

export const store = createStore({
	reducer: {
		podcast: podcastReducer,
	},
})
