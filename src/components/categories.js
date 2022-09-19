import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

export default function Categories() {
  const dispatch = useDispatch();
  const check = useSelector((state) => state.check);
  return (
    <div>
      <h1>{check}</h1>
      <button type="button" onClick={() => dispatch(checkStatus())}>Check status</button>
    </div>
  );
}
