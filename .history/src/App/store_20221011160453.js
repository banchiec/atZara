import { createStore } from 'redux'
import podcastReducer from '../feature/Podcast/PodcastSlice'

export const store = createStore({
	reducer: {
		podcast: podcastReducer,
	},
	appl
})
