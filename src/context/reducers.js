import {
  SET_CHARACTERS,
  SET_FAVORITES,
  SET_DARK_MODE,
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
    case SET_DARK_MODE:
      return {
        ...state,
        darkMode: action.darkMode
      }
    case ON_LOADING:
      return {
        ...state,
        loading: action.loading
      }
    default: return state;
  }
};
