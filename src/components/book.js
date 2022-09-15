import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class Book extends PureComponent {
  render() {
    const { book } = this.props;
    return (
      <li key={book.id} className="Book">
        <h4>{book.genre}</h4>
        <h2>{book.title}</h2>
        <p>{book.author}</p>
        <ul className="Book-nav">
          <li className="Book-nav-item">
            <button type="button">Comments</button>
          </li>
          <li className="Book-nav-item middle">
            <button type="button">Remove</button>
          </li>
          <li className="Book-nav-item">
            <button type="button">Edit</button>
          </li>
        </ul>
      </li>
    );
  }
}

Book.defaultProps = {
  book: {},
};

Book.propTypes = {
  book: PropTypes.shape(
    {
      title: PropTypes.string,
      author: PropTypes.string,
      id: PropTypes.number,
      genre: PropTypes.string,
    },
  ),
};
