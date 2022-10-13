import { combineReducers } from '@reduxjs/toolkit'
import podcastReducer from '../feature/Podcast/PodcastSlice'
import { reducer } from './reducers'

export const store = combineReducers(reducer,)
