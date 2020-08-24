import {
  SET_CHARACTERS,
  SET_CHARACTERS_DETAILS,
  SET_COMICS,
  SET_COMIC,
  SET_FAVORITES,
  CHANGE_THEME,
  ON_LOADING,
  ON_LOADING_MODAL
 } from './types';

export const reducer = (state, action) => {
  switch (action.type) {
    case SET_CHARACTERS:
      return {
        ...state,
        characters: action.characters
      };
    case SET_CHARACTERS_DETAILS:
      return {
        ...state,
        characterDetails: action.characterDetails
      };
    case SET_COMICS:
      return {
        ...state,
        comics: action.comics
      };
    case SET_COMIC:
      return {
        ...state,
        comic: action.comic
      };
    case SET_FAVORITES:
      return {
        ...state,
        favorites: action.favorites
      };
    case CHANGE_THEME:
      return {
        ...state,
        theme: action.theme
      }
    case ON_LOADING:
      return {
        ...state,
        loading: action.loading
      }
    case ON_LOADING_MODAL:
      return {
        ...state,
        loadingModal: action.loadingModal
      }
    default: return state;
  }
};
