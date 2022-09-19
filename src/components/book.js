import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeBook } from '../redux/books/books';

export default function Book() {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.book);
  let index = -1;

  return (
    <div className="Books-wrapper">
      <ul className="Books">
        {books.map((book) => {
          index += 1;
          return (
            <li key={index} className="Book">
              <h4>{book.ganre}</h4>
              <h2>{book.title}</h2>
              <p>{book.author}</p>
              <ul className="Book-nav">
                <li className="Book-nav-item">
                  <button type="button">Comments</button>
                </li>
                <li className="Book-nav-item middle">
                  <button
                    onClick={() => {
                      dispatch(removeBook(index));
                    }}
                    type="button"
                  >
                    Remove
                  </button>
                </li>
                <li className="Book-nav-item">
                  <button type="button">Edit</button>
                </li>
              </ul>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
