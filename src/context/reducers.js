import {
  SET_CHARACTERS,
  SET_FAVORITES,
  ON_LOADING
 } from './types';

export const reducer = (state, action) => {
  switch (action.type) {
    case SET_CHARACTERS:
      return {
        ...state,
        characters: action.characters
      };
    case SET_FAVORITES:
      return {
        ...state,
        favorites: action.favorites
      };
    case ON_LOADING:
      return {
        ...state,
        loading: action
      }
    default: return state;
  }
};
