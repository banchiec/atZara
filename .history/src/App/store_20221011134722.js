import { configureStore, createStore } from ''
import podcastReducer from '../feature/Podcast/PodcastSlice'

export const store = createStore({
	reducer: {
		podcast: podcastReducer,
	},
})
