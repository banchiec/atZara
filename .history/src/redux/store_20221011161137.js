import { combineReducers } from '@reduxjs/toolkit'
import { composeWithDevTools } from 'redux-devtools'
import thunk from 'redux-thunk'
import { reducer } from './reducers'

export const store = combineReducers(reducer, composeWithDevTools(thunk))
