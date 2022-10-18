import { composeWithDevTools } from 'redux-devtools-extension'
import { createStore } from 'redux'
import thunk from 'redux-thunk'
import { reducer } from './reducers'

export const store = createStore(
	reducer, 
	composeWithDevTools(
		applyMiddlewar(thunk)
	)
	)