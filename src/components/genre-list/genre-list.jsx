import React from 'react';
import {shallowEqual, useSelector} from 'react-redux';
import {Link, useParams} from 'react-router-dom';

import {makeUriSafeString} from '../../utils';
import {getGenres} from '../../utils';

const GenreList = () => {
  const {genre: currentGenre} = useParams();
  const genres = useSelector((state) => getGenres(state.films), shallowEqual);

  return (
    <ul className="catalog__genres-list">
      <li className={`catalog__genres-item ${!currentGenre ? `catalog__genres-item--active` : ``}`}>
        <Link to="/" className="catalog__genres-link">All genres</Link>
      </li>
      {genres.map((genre) => <li key={genre} className={`catalog__genres-item ${makeUriSafeString(genre) === currentGenre ? `catalog__genres-item--active` : ``}`}>
        <Link to={`/catalog/${makeUriSafeString(genre)}`} className="catalog__genres-link">{genre}</Link>
      </li>)}
    </ul>
  );
};

export default GenreList;
