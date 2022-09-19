import { createStore, combineReducers } from 'redux';
import * as books from './books/books';
import * as checher from './categories/categories';

const rootReducer = combineReducers({
  book: books.bookReducer,
  check: checher.checkReducer,
});

const store = createStore(rootReducer);

store.subscribe(() => console.log(store.getState()));

store.dispatch(books.removeBook);
store.dispatch(books.addBook);
