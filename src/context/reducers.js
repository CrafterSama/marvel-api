export const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_CHARACTERS':
      return {
        ...state,
        state: action
      };
    case 'SET_FAVORITES':
      return {
        ...state,
        favorites: action
      };
    default: return state;
  }
};
