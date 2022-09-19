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
        {books.map((book) => {
          const rand = Math.floor(Math.random() * 100);
          const style = {
            strokeDashoffset: `calc(251 - (251 * ${rand}) / 100)`,
            stroke: '#227ded',
          };
          return (
            <li key={book.id} id={book.id} className="Book">
              <div className="Book-info">
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
              </div>
              <div className="Book-progress">
                <div className="Book-stat-1">
                  <svg className="Book-circle">
                    <circle cx="40" cy="40" r="40" />
                    <circle cx="40" cy="40" r="40" style={style} />
                  </svg>
                  <div className="Book-percent">
                    {rand}
                    %
                    <span>Completed</span>
                  </div>

                </div>
                <div className="Book-stat-2">
                  <p className="Book-stat-title">CURRENT CHAPTER</p>
                  <p className="Book-stat-chapter">Capter 17</p>
                  <button type="button" className="blue-btn ">UPDATE PROGRESS</button>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
