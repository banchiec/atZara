import { configureStore } from '@reduxjs/toolkit'
import podcastReducer from '../features/Podcast/PodcastSlice'

export const store = configureStore({
	reducer: {
		podcast: podcastReducer,
	},
})
