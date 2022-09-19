import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

export default function Addbook() {
  const dispatch = useDispatch();

  const [category, setCategory] = useState();
  const [title, setTitle] = useState();
  const [author, setAuthor] = useState();

  const submit = (e) => {
    e.preventDefault();
    const book = {
      category,
      title,
      author,
      id: `${new Date().getSeconds().toString()}${new Date().getMilliseconds().toString()}`,
    };
    dispatch(addBook(book));
  };
  return (
    <div>
      <form className="Addbook" onSubmit={submit}>
        <ul>
          <li>
            <label htmlFor="addgenre">
              Genre
              <input type="text" name="category" id="addgenre" required onChange={(e) => setCategory(e.target.value)} />
            </label>
          </li>
          <li>
            <label htmlFor="addbook">
              Title
              <input type="text" name="title" id="addbook" required onChange={(e) => setTitle(e.target.value)} />
            </label>
          </li>
          <li>
            <label htmlFor="addauthor">
              Author
              <input type="text" name="author" id="addauthor" required onChange={(e) => setAuthor(e.target.value)} />
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
