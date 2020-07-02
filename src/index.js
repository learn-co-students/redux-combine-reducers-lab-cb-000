
import { combineReducers } from 'redux';
import { createStore } from "redux";
import books from "./reducers";
import recommendedBooks from "./reducers";


const rootReducer = combineReducers({books, recommendedBooks});

//export default rootReducer;

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);