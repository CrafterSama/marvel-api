import {
  SET_CHARACTERS,
  SET_CHARACTERS_DETAILS,
  SET_COMICS,
  ON_LOADING,
  ON_LOADING_MODAL,
  SET_DARK_MODE,
} from '../context/types';
import { buildApiCall, fetchFunction } from '../utils';
import marvel from 'marvel-characters';
import { fixedEncodeURIComponent } from '../helpers';

export const getCharacters = async (searchParams, dispatch) => {
  dispatch({
    type: ON_LOADING,
    loading: true,
  });
  const endpoint = searchParams
    ? `characters?nameStartsWith=${searchParams}`
    : `characters?nameStartsWith=${marvel()}`;

  let characters;
  const response = await fetchFunction(buildApiCall(endpoint));
  console.log(response)
  if (response.data.code === 200) {
    characters = response.data.data.results;
  } else {
    characters = [];
  }
  console.log(characters)
  dispatch({
    type: SET_CHARACTERS,
    characters: characters,
  });
  dispatch({
    type: ON_LOADING,
    loading: false,
  });
}

export const getCharactersComics = async (searchParams, dispatch) => {
  dispatch({
    type: ON_LOADING_MODAL,
    loadingModal: true,
  });
  const endpoint = `characters/${searchParams}/comics`;
  let characterDetails;
  const response = await fetchFunction(buildApiCall(endpoint, false));
  if (response.data.code === 200) {
    characterDetails = response.data.data.results;
  } else {
    characterDetails = [];
  }
  dispatch({
    type: SET_CHARACTERS_DETAILS,
    characterDetails: characterDetails,
  });
  dispatch({
    type: ON_LOADING_MODAL,
    loadingModal: false,
  });
}

export const getComics = async (searchParams, dispatch) => {
  dispatch({
    type: ON_LOADING,
    loading: true,
  });
  const endpoint = `comics?title=${fixedEncodeURIComponent(searchParams)}`;
  let comics;
  try {
    const response = await fetchFunction(buildApiCall(endpoint));
    if (response.data.code === 200) {
      comics = response.data.data.results;
    } else {
      comics = [];
    }
  } catch (error) {
    console.error(error)
  }
  dispatch({
    type: SET_COMICS,
    characters: comics,
  });
  dispatch({
    type: ON_LOADING,
    loading: false,
  });
}

export const getComicByURL = async (searchParams, dispatch) => {
  dispatch({
    type: ON_LOADING,
    loading: true,
  });
  const endpoint = `characters?name=${fixedEncodeURIComponent(searchParams.character)}&comics=${fixedEncodeURIComponent(searchParams.comic)}`;
  let comics;
  try {
    const response = await fetchFunction(buildApiCall(endpoint));
    if (response.data.code === 200) {
      comics = response.data.data.results;
    } else {
      comics = [];
    }
  } catch (error) {
    console.error(error)
  }
  dispatch({
    type: SET_COMICS,
    comics: comics,
  });
  dispatch({
    type: ON_LOADING,
    loading: true,
  });
};

export const activeDarkMode = (active, dispatch) => {
  dispatch({
    type: SET_DARK_MODE,
    darkMode: active,
  });
};
