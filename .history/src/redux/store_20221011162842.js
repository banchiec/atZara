import { composeWithDevTools } from 'redux-devtools-extension'
import {}
import thunk from 'redux-thunk'
import { reducer } from './reducers'

export const store = createStore(reducer, composeWithDevTools(thunk))
