import React from 'react';
import Book from './book';
import Addbook from './addbook';

export default function Books() {
  const temp = [
    {
      id: 1,
      genre: 'Action',
      title: 'Hunger Games',
      author: 'Suzanne Collins',
    },
    {
      id: 2,
      genre: 'Novel',
      title: 'After',
      author: 'Anna Todd',
    },
  ];
  return (
    <section>
      <div className="Books-wrapper">
        <ul className="Books">
          {temp.map((book) => (
            <Book key={book.id} book={book} />
          ))}
        </ul>
      </div>
      <Addbook />
    </section>
  );
}
