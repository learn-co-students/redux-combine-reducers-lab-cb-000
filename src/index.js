import { combineReducers } from 'redux';
import { books } from './reducers';
import { recommendedBooks } from './reducers';

const rootReducer = combineReducer({
  books: books,
  recommendedBooks: recommendedBooks
});
