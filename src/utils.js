import {MAX_GENRES_COUNT} from './const';

export const makeUriSafeString = (genre) => encodeURI(genre.toLowerCase());

export const getGenres = (allFilms) => {
  return [...new Set(allFilms.map((film) => film.genre))].slice(0, MAX_GENRES_COUNT);
};

export const toCamelCase = (value) => value.split(`-`).map((el, i) => i > 0 ? el[0].toUpperCase() + el.slice(1) : el).join(``);
