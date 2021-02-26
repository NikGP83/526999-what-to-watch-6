import React from 'react';
import PropTypes from 'prop-types';
import FilmItem from '../film-item/film-item';
import {getFilmIds} from '../../mocks/films';

const MovieList = () => {
  const filmIds = getFilmIds();

  return (
    <>
      <div className="catalog__movies-list">
        {filmIds.map((id) => {
          return <FilmItem to={`/films/${id}`} key={id} id={id} />;
        })
        }
      </div>

      <div className="catalog__more">
        <button className="catalog__button" type="button">Show more</button>
      </div>
    </>
  );
};

MovieList.propTypes = {
  filmIds: PropTypes.func,
  id: PropTypes.string,
};

export default MovieList;
