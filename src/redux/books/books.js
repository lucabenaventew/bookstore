const ADDED = 'app/reducer/ADDED';
const REMOVED = 'app/reducer/REMOVED';

const objdefault = [
  {
    id: 0,
    ganre: 'Action',
    title: 'Hunger Games',
    author: 'Suzanne Collins',
  },
  {
    id: 1,
    ganre: 'Novel',
    title: 'After',
    author: 'Anna Todd',
  },
];

const bookReducer = (state = objdefault, action) => {
  switch (action.type) {
    case ADDED:
      return [
        ...state,
        {
          author: action.author,
          ganre: action.genre,
          title: action.title,
          id: state.length,
        },
      ];
    case REMOVED:
      return [
        ...state.slice(0, action.id),
        ...state.slice(action.id + 1),
      ];
    default: return state;
  }
};

export function addBook(gen, tit, auth) {
  return {
    type: ADDED,
    author: auth,
    genre: gen,
    title: tit,
  };
}
export function removeBook(prop) {
  return {
    type: REMOVED,
    id: prop,
  };
}
export default bookReducer;
