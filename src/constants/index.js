import md5 from 'md5';

// Related with the Demo App
export const BASE_URL = 'https://gateway.marvel.com/v1/public/';

export const API_KEY = '7c7184285d23bc0b84e736075db7b34e';

export const PRIVATE_KEY = 'b909b1938747caab9217d7bf073c280ad48fa371';

export const TIMESTAMP = 1;

export const HASH = md5(`${TIMESTAMP}${PRIVATE_KEY}${API_KEY}`);

export const AUTH_HEADERS = {
	method: 'GET',
	headers: {
	  'content-type': 'application/json',
  }
};

export const CHARACTERS_PARAMS = 'characters?nameStartsWith=';
export const COMICS_PARAMS = 'comics?title=';


export const CHARACTER_ARRAY = [
	'Hulk',
	'Spider-man',
	'Thor',
	'Captain America',
	'Iron Man',
	'Black Widow',
	'Thanos',
	'Hawkeye',
	'Black Cat',
	'Galactus',
	'Captain Marvel',
	'Doctor Strange',
]

export const NO_DESCRIPTION = 'No Description';
