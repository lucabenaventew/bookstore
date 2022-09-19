const ADDED = 'app/reducer/ADDED';
const REMOVED = 'app/reducer/REMOVED';

const bookReducer = (state = [], action) => {
  switch (action.type) {
    case ADDED:
      return [
        ...state,
        {
          author: action.author,
        },
      ];
    case REMOVED:
      return state.splice(action.id, 1);
    default: return state;
  }
};

export function addBook() { return { type: ADDED }; }
export function removeBook() { return { type: REMOVED }; }
export default bookReducer;
