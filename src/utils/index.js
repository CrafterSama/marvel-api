import { getData } from '../services/FechData';
import {
  BASE_URL,
  API_KEY,
  TIMESTAMP,
  HASH,
} from '../constants';
import { SET_CHARACTERS, SET_CHARACTERS_DETAILS, SET_COMICS, SET_COMIC } from '../context/types'


export const buildApiCall = (endpoint, withParams = true) => {

  let apiCall;
  const API_AUTH = `ts=${TIMESTAMP}&apikey=${API_KEY}&hash=${HASH}`;

  if (withParams) {
    apiCall = `${BASE_URL}${endpoint}&${API_AUTH}`;
  } else {
    apiCall = `${BASE_URL}${endpoint}?${API_AUTH}`;
  }

  return apiCall;
}

export const fetchFunction = async (searchParams) => {
  try {
    const responses = await getData(searchParams);
    return responses;
  } catch (error) {
    return error;
  }
}

export const resetStore = (dispatch) => {
  let comic = "";
  let comics = "";
  let characters = "";
  let characterDetails = "";
  dispatch({
    type: SET_COMICS,
    comics: comics,
  });
  dispatch({
    type: SET_COMIC,
    comic: comic,
  });
  dispatch({
    type: SET_CHARACTERS_DETAILS,
    characterDetails: characterDetails,
  });
  dispatch({
    type: SET_CHARACTERS,
    characters: characters,
  });
}
