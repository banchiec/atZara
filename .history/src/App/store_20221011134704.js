import { configureStore } from '@reduxjs/toolkit'
import podcastReducer from '../feature/Podcast/PodcastSlice'

export const store = createStor({
	reducer: {
		podcast: podcastReducer,
	},
})
