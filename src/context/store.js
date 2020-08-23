
let darkMode = '';

let darkModeOn = localStorage.getItem('darkmode');

if (darkModeOn === 'on') {
  darkMode = darkModeOn;
}

export const initialState = {
    characters: '',
    characterDetails: [],
    comics: '',
    comic: '',
    favorites: '',
    loading: false,
    loadingModal: false,
    darkMode,
}
