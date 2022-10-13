import { combineReducers } from '@reduxjs/toolkit'
import podcastReducer from '../feature/Podcast/PodcastSlice'

export const store = combineReducers(reducer)
