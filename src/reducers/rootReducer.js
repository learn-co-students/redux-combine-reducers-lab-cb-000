import booksReducer from './booksReducer';
import recommendedBooksReducer from './recommendedBooksReducer';
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  books: booksReducer,
  recommendedBooks: recommendedBooksReducer
})

export default rootReducer
