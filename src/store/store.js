import { createStore } from 'redux'
import reducerFunc from './countReducer'



export const store  = createStore(reducerFunc)
