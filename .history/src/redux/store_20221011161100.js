import { combineReducers } from '@reduxjs/toolkit'
import { composeWithDevTools } from '@reduxjs/toolkit/dist/devtoolsExtension'
import thunk from 'redux-thunk'
import { reducer } from './reducers'

export const store = combineReducers(reducer, composeWithDevTools(thunk))
