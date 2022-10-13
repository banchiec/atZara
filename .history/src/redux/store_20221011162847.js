import { composeWithDevTools } from 'redux-devtools-extension'
import {creat}
import thunk from 'redux-thunk'
import { reducer } from './reducers'

export const store = createStore(reducer, composeWithDevTools(thunk))
