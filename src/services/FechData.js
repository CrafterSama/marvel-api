import axios from 'axios'
import marvel from 'marvel-characters'
import {
  BASE_URL,
  API_KEY,
  TIMESTAMP,
  HASH,
  AUTH_HEADERS
 } from '../constants'

export const buildEndpoint = params => `${BASE_URL}${params}&ts=${TIMESTAMP}&apikey=${API_KEY}&hash=${HASH}`;

export const getData = async (endPoint) => {
  try {
    return await axios.get(`${endPoint}`, { AUTH_HEADERS });
  } catch (err) {
    if (err.response) {
      return err.response
    } else if (err.request) {
      return err.request
    } else {
      console.error(err)
    }
  }
}
