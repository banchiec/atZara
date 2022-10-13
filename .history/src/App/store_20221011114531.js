import { configureStore } from '@reduxjs/toolkit'
import podcastRE

export const store = configureStore({
	reducer: {
		podcast: podcastReducer,
	},
})
