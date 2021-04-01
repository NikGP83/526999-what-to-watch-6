
export const makeUriSafeString = (genre) => encodeURI(genre.toLowerCase());

export const getGenres = (allFilms, maxGenresCount) => {
  return [...new Set(allFilms.map((film) => film.genre))].slice(0, maxGenresCount);
};
