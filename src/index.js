import react from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { combineReducers } from 'redux';
import reducers from './reducers';

const rootReducer = combineReducers({ books, recommendedBooks })

const store = createStore(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.querySelector('container')
)
