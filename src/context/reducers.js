export const reducer = (state, action) => {
  switch (action.type) {
    case 'GET_CHARACTERS':
      return {
        ...state,
        state: action.payload
      };
    default: return state;
  }
};
