import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchPodcastList = createAsyncThunk('podcast/fechtPodcastList', () => {
	return axios
		.get('https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json')
		.then((response) => {response.data.feed.entry})
})
