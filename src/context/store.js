import { THEME_LIGHT, LOCALSTORAGE_THEME } from "../constants";

let theme = THEME_LIGHT;

let themeLocal = localStorage.getItem(LOCALSTORAGE_THEME);

if (themeLocal) {
  theme = themeLocal;
}

export const initialState = {
    characters: '',
    characterDetails: [],
    comics: '',
    comic: '',
    favorites: '',
    loading: false,
    loadingModal: false,
    theme,
}
