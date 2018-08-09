import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  recommendedBooks: recommendedBooks,
  books: books
});

export default rootReducer

function books(state = [], action) {
  let idx
  switch (action.type) {

    case "ADD_BOOK":
      return [...state.books, action.book];

    case "REMOVE_BOOK":
      idx = state.indexOf(action.id);
      return [
          ...state.books.slice(0, idx),
          ...state.books.slice(idx + 1)
        ];

      default:
        return state;
  }
}

function recommendedBooks(state = [], action) {
  let idx
  switch (action.type) {
    case "ADD_RECOMMENDED_BOOK":
        return [...state.authors, action.author];

    case "REMOVE_RECOMMENDED_BOOK":
      idx = state.indexOf(action.id);
      return [ ...state.authors.slice(0, idx),
          ...state.authors.slice(idx + 1)];

    default:
      return state;
    }
};
