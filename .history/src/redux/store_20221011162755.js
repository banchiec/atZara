import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { reducer } from './reducers'

export const store = combineReducers(reducer, composeWithDevTools(thunk))
