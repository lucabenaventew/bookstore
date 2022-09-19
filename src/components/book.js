import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeBook, tryBooksLoad } from '../redux/books/books';

export default function Book() {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.book);

  useEffect(() => {
    dispatch(tryBooksLoad);
  }, []);

  return (
    <div className="Books-wrapper">
      <ul className="Books">
        {books.map((book) => (
          <li key={book.id} id={book.id} className="Book">
            <h4>{book.category}</h4>
            <h2>{book.title}</h2>
            <p>{book.author}</p>
            <ul className="Book-nav">
              <li className="Book-nav-item">
                <button type="button">Comments</button>
              </li>
              <li className="Book-nav-item middle">
                <button onClick={() => dispatch(removeBook(book.id))} type="button">
                  Remove
                </button>
              </li>
              <li className="Book-nav-item">
                <button type="button">Edit</button>
              </li>
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}
