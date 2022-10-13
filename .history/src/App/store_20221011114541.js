import { configureStore } from '@reduxjs/toolkit'
import podcastReducer from '../features/'

export const store = configureStore({
	reducer: {
		podcast: podcastReducer,
	},
})
