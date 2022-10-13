import { composeWithDevTools } from '@reduxjs/toolkit/dist/devtoolsExtension'
import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import podcastReducer from '../feature/Podcast/PodcastSlice'
import { reducer } from '../redux/reducers'

export const store = createStore(reducer,composeWithDevTools(
	applyMiddleware(thunk)
))
