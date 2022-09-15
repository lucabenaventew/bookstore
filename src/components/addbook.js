import React from 'react';

export default function Addbook() {
  return (
    <div>
      <form className="Addbook">
        <ul>
          <li>
            <label htmlFor="addbook">
              Title
              <input type="text" name="name" id="addbook" />
            </label>
          </li>
          <li>
            <label htmlFor="addauthor">
              Author
              <input type="text" name="name" id="addauthor" />
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
