import { configureStore } from '@reduxjs/toolkit'
import podcastReducer from '../features/Podcast/'

export const store = configureStore({
	reducer: {
		podcast: podcastReducer,
	},
})
