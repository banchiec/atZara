import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchPodcastList = createAsyncThunk('podcast/fechtPodcastList', () => {
	return axios.get()('Acions')
})
