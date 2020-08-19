import axios from 'axios'
import {
  BASE_URL,
  API_KEY,
  TIMESTAMP,
  HASH,
  AUTH_HEADERS
 } from '../constants'
 import { getRandomId } from '../helpers'

export const buildEndpoint = (params = false) => {
  if (params) {
    return `${BASE_URL}${params}&ts=${TIMESTAMP}&apikey=${API_KEY}&hash=${HASH}`;
  } else {
    const randomId = getRandomId(1009500, 1009600)
    return `${BASE_URL}characters/${randomId}?ts=${TIMESTAMP}&apikey=${API_KEY}&hash=${HASH}`;
  }
}

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
