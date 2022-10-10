import { configureStore } from '@reduxjs/toolkit'
import { podcastReducer } from '../feature/Podcast/PodcastApi'

export const store = configureStore({
	reducer: {
		podcast: 
	},
})
