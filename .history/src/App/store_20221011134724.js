import { configureStore, createStore } from 'redu'
import podcastReducer from '../feature/Podcast/PodcastSlice'

export const store = createStore({
	reducer: {
		podcast: podcastReducer,
	},
})
