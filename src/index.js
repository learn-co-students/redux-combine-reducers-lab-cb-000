import { combineReducers } from 'redux'
import books from './reducers'
import recommendedBooks from './reducers'

const rootReducer = combineReducers({books, recommendedBooks})