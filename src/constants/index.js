import md5 from 'md5';


// Related with the Demo App
export const BASE_URL = process.env.REACT_APP_BASE_URL;

export const API_KEY = process.env.REACT_APP_MARVEL_API_KEY;

export const PRIVATE_KEY = process.env.REACT_APP_MARVEL_PRIVATE_KEY;

export const TIMESTAMP = 1;

export const HASH = md5(`${TIMESTAMP}${PRIVATE_KEY}${API_KEY}`);

export const HEADERS = {
	method: 'GET',
	headers: {
	  'content-type': 'application/json',
  }
};
