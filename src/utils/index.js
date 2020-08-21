import { getData } from '../services/FechData';
import {
  BASE_URL,
  API_KEY,
  TIMESTAMP,
  HASH,
} from '../constants';


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
