const CHECKED = 'app/reducer/CHECKED';

const checkReducer = (state = [], action) => {
  switch (action.type) {
    case CHECKED:
      return 'Under construction';
    default: return state;
  }
};

export function checkStatus() { return { type: CHECKED }; }
export default checkReducer;
