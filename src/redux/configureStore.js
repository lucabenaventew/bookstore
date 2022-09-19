import { legacy_createStore as createStore, combineReducers } from 'redux';
import bookReducer from './books/books';
import checkReducer from './categories/categories';

const rootReducer = combineReducers({
  book: bookReducer,
  check: checkReducer,
});

const store = createStore(rootReducer);
export default store;
