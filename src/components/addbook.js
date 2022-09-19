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
        <h2>ADD NEW BOOK</h2>
        <input type="text" name="title" id="addbook" required onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
        <input type="text" name="author" id="addauthor" required onChange={(e) => setAuthor(e.target.value)} placeholder="Author" />
        <input type="submit" className="submit blue-btn " />
        <div className="Menu">
          <select name="Menu" className="Select" onChange={(e) => { setCategory(e.target.value); }}>
            <option>Philosophy</option>
            <option>Romance</option>
            <option>Novel</option>
            <option>An epic work</option>
            <option>Detective</option>
            <option>Horror</option>
            <option>Adventure</option>
          </select>
        </div>
      </form>
    </div>
  );
}
