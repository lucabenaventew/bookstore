const axios = require('axios');

const ADDED = 'ADDED';
const REMOVED = 'REMOVED';
const LOADED = 'LOADED';
const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/gM4DiKZlFOaRjYYQs32M/books';

const bookReducer = (state = [], { type, payload }) => {
  switch (type) {
    case ADDED:
      return [
        ...state,
        {
          author: payload.author,
          category: payload.category,
          title: payload.title,
          id: payload.item_id,
        },
      ];
    case REMOVED:
      return [
        ...state.filter((item) => item.id !== payload.item_id),
      ];
    case LOADED:
      return payload;
    default: return state;
  }
};

const addBook = (newBook) => async (dispatch) => {
  const book = {
    item_id: newBook.id,
    author: newBook.author,
    category: newBook.category,
    title: newBook.title,
  };
  axios.post(url, book);
  dispatch({
    type: ADDED,
    payload: book,
  });
};

const removeBook = (id) => async (dispatch) => {
  axios.delete(`${url}/${id}`, { item_id: id });
  dispatch({
    type: REMOVED,
    payload: {
      item_id: id,
    },
  });
};

const tryBooksLoad = async (dispatch) => {
  const data = await axios.get(url).then((res) => res.data);
  const books = Object.keys(data).map((key) => ({
    id: key,
    ...data[key][0],
  }));
  dispatch({
    type: LOADED,
    payload: books,
  });
};

export default bookReducer;
export { addBook, removeBook, tryBooksLoad };
