import axios from 'axios'
import { AUTH_HEADERS } from '../constants'

export const getData = async (endPoint) => {
  try {
    const response = await axios.get(endPoint, { AUTH_HEADERS })
    return response
  } catch(err) {
    if (err.response) {
      return err.response
    } else if (err.request) {
      return err.request
    } else {
      console.error(err)
    }
  }
}
