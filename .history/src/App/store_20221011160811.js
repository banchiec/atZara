import { composeWithDevTools } from 'redux-'
import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import { reducer } from '../redux/reducers'

export const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))
