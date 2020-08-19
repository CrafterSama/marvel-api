import { buildEndpoint, getData } from '../services/FechData';
import marvel from 'marvel-characters';
import { PARAM_STARTS_WITH } from '../constants'
import { SET_CHARACTERS, ON_LOADING } from '../context/types'

const fetchFunction = async (searchParams, dispatch) => {
  try {
    const params = searchParams
      ? `${PARAM_STARTS_WITH}${searchParams}`
      : `${PARAM_STARTS_WITH}${marvel()}`;

    const response = await getData(buildEndpoint(params));
    const data = await response.data;

    if(data.code === 200) {
      return data;
    } else {
      return { ...data, data: { results: []} };
    }
  } catch (error) {
    return error;
  }
}

export const setGlobalState = async (searchParams, dispatch) => {
  dispatch({
    type: ON_LOADING,
    loading: true,
  });
  const marvelData = await fetchFunction(searchParams, dispatch)
  dispatch({
    type: SET_CHARACTERS,
    characters: marvelData.data.results
  })
  dispatch({
    type: ON_LOADING,
    loading: false,
  });
}
