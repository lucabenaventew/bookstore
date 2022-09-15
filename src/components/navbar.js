import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Books',
    },
    {
      id: 2,
      path: '/categories',
      text: 'Categories',
    },
  ];
  return (
    <nav>
      <h1>Bookstore</h1>
      <ul className="navbar">
        {links.map((link) => (
          <li key={link.id}>
            <Link to={link.path}>{link.text}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
