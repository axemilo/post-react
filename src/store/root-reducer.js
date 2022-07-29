import { combineReducers } from 'redux'
import { authReducers, pageReducers, postsReducers } from './reducers'

export const rootReducer = combineReducers({
  posts: postsReducers,
  auth: authReducers,
  page: pageReducers,
})
