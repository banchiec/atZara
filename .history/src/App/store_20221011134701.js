import { configureStore } from '@reduxjs/toolkit'
import podcastReducer from '../feature/Podcast/PodcastSlice'

export const store = createS({
	reducer: {
		podcast: podcastReducer,
	},
})
