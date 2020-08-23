import {
  SET_CHARACTERS,
  SET_CHARACTERS_DETAILS,
  SET_COMICS,
  SET_COMIC,
  ON_LOADING,
  ON_LOADING_MODAL,
  SET_DARK_MODE,
} from '../context/types';
import { buildApiCall, fetchFunction, resetStore } from '../utils';
import marvel from 'marvel-characters';
import { fixedEncodeURIComponent } from '../helpers';

export const getCharacters = async (searchParams, dispatch) => {
  dispatch({
    type: ON_LOADING,
    loading: true,
  });
  const endpoint = `characters?nameStartsWith=${fixedEncodeURIComponent(searchParams)}`

  resetStore(dispatch);

  let characters;
  const response = await fetchFunction(buildApiCall(endpoint));

  if (response.data.code === 200) {
    characters = response.data.data.results;
  } else {
    characters = [];
  }

  dispatch({
    type: SET_CHARACTERS,
    characters: characters,
  });
  dispatch({
    type: ON_LOADING,
    loading: false,
  });
}

export const getCharactersRandomly = async (dispatch) => {
  dispatch({
    type: ON_LOADING,
    loading: true,
  });
  const endpoint = `characters?nameStartsWith=${marvel()}`

  resetStore(dispatch);
  let characters;
  const response = await fetchFunction(buildApiCall(endpoint));

  if (response.data.code === 200) {
    characters = response.data.data.results;
  } else {
    characters = [];
  }
  dispatch({
    type: SET_CHARACTERS,
    characters: characters,
  });
  dispatch({
    type: ON_LOADING,
    loading: false,
  });
}

export const getCharactersComics = async (searchParams, state, dispatch) => {
  dispatch({
    type: ON_LOADING_MODAL,
    loadingModal: true,
  });
  let characterDetails;
  if ((!state.characterDetails || state.characterDetails.length < 1) || (state.characterDetails && state.characterDetails.length > 1)) {

    const endpoint = `characters/${searchParams}/comics`;

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
  }
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
  const endpoint = `comics?titleStartsWith=${fixedEncodeURIComponent(searchParams)}`;
  resetStore(dispatch);
  let comics;
  try {
    const response = await fetchFunction(buildApiCall(endpoint));
    console.log(response.data)
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
    loading: false,
  });
}

export const getComicByURL = async (searchParams, dispatch) => {
  dispatch({
    type: ON_LOADING,
    loading: true,
  });

  resetStore(dispatch)
  console.log(searchParams);

  let characters;
  const stepOne = `characters?name=${searchParams.character}`;
  const comicToFilter = searchParams.comic && `${searchParams.comic.toLowerCase()} ${searchParams.hash}`.trim();
  const char = await fetchFunction(buildApiCall(stepOne));

  characters = char.data.data.results;

  dispatch({
    type: SET_CHARACTERS,
    characters: characters,
  });

  const stepTwo = `characters/${characters[0].id}/comics?limit=100`;
  const stepTwoResponse = await fetchFunction(buildApiCall(stepTwo));

  let comics = stepTwoResponse.data.data.results
  let comic = comics.filter((o) => o.title.toLowerCase() === comicToFilter)

  let characterDetails;

  if (comic.length > 0) {
    const stepThree = `comics/${comic[0].id}`;
    const stepThreeResponse = await fetchFunction(buildApiCall(stepThree, false));


    if (stepThreeResponse.data.code === 200) {
      characterDetails = stepThreeResponse.data.data.results;
    } else {
      characterDetails = [];
    }
  } else {
    characterDetails = [];
    alert('Especificamente este Comic No fue encontrado, o el titulo esta mal escrito');
  }
  dispatch({
    type: SET_CHARACTERS_DETAILS,
    characterDetails: characterDetails,
  });
  dispatch({
    type: ON_LOADING,
    loading: false,
  });
};
export const getComicById = async (searchParams, dispatch) => {
  dispatch({
    type: ON_LOADING,
    loading: true,
  });
  const endpoint = `comics/${searchParams}`;
  resetStore(dispatch);
  let comic;
  try {
    const response = await fetchFunction(buildApiCall(endpoint, false));
    if (response.data.code === 200) {
      comic = response.data.data.results;
    } else {
      comic = [];
    }
  } catch (error) {
    console.error(error)
  }
  dispatch({
    type: SET_COMIC,
    comic: comic,
  });
  dispatch({
    type: ON_LOADING,
    loading: false,
  });
};

export const activeDarkMode = (active, dispatch) => {
  dispatch({
    type: SET_DARK_MODE,
    darkMode: active,
  });
};
