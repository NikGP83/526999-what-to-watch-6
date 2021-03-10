import React from 'react';
import {shallowEqual, useSelector} from 'react-redux';
import {Link, useParams} from 'react-router-dom';
import {saveGenre} from '../../api/utils';

const MAX_GENRES_COUNT = 8;


const getGenres = (allFilms) => {
  return [...new Set(allFilms.map((film) => film.genre))].slice(0, MAX_GENRES_COUNT);
};

const GenreList = () => {
  const {genre: currentGenre} = useParams();
  const genres = useSelector((state) => getGenres(state.films), shallowEqual);

  return (
    <ul className="catalog__genres-list">
      <li className={`catalog__genres-item ${!currentGenre ? `catalog__genres-item--active` : ``}`}>
        <Link to="/" className="catalog__genres-link">All genres</Link>
      </li>
      {genres.map((genre) => <li key={genre} className={`catalog__genres-item ${saveGenre(genre) === currentGenre ? `catalog__genres-item--active` : ``}`}>
        <Link to={`/catalog/${saveGenre(genre)}`} className="catalog__genres-link">{genre}</Link>
      </li>)}
    </ul>
  );
};

export default GenreList;
