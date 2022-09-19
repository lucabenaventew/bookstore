import React from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

export default function Addbook() {
  const dispatch = useDispatch();
  return (
    <div>
      <form
        className="Addbook"
        onSubmit={(e) => {
          e.preventDefault();
          const form = document.forms[0];
          dispatch(addBook(form[0].value, form[1].value, form[2].value));
        }}
      >
        <ul>
          <li>
            <label htmlFor="addgenre">
              Genre
              <input type="text" name="name" id="addgenre" required />
            </label>
          </li>
          <li>
            <label htmlFor="addbook">
              Title
              <input type="text" name="name" id="addbook" required />
            </label>
          </li>
          <li>
            <label htmlFor="addauthor">
              Author
              <input type="text" name="name" id="addauthor" required />
            </label>
          </li>
          <li>
            <input type="submit" />
          </li>
        </ul>
      </form>
    </div>
  );
}
