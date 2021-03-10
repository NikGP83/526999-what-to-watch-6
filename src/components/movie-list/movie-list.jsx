import React, {useState} from 'react';
import PropTypes from 'prop-types';
import FilmItem from '../film-item/film-item';
import {MAX_MOVIE_LIST_FILM_STEP} from '../../const';


const MovieList = (props) => {
  const {filmIds, initialCount} = props;
  const [activeMovieId, setActiveMovieId] = useState(undefined);
  const [filmCount, setFilmCount] = useState(initialCount);

  let previewVideoTimer = null;
  const buttonShowMoreClick = () => {
    setFilmCount((currentFilmCount) => currentFilmCount + MAX_MOVIE_LIST_FILM_STEP);
  };

  const eventEnterHandler = (id) => {
    previewVideoTimer = setTimeout(() => setActiveMovieId(id), 4000);
  };


  const eventLeaveHandler = () => {
    clearTimeout(previewVideoTimer);
    setActiveMovieId(undefined);
  };

  return (
    <>
      <div className="catalog__movies-list">
        {filmIds.slice(0, filmCount).map((id) => {
          return <FilmItem to={`/films/${id}`} key={id} id={id} activeMovieId={id === activeMovieId} eventEnterHandler={() => eventEnterHandler(id)} eventLeaveHandler={eventLeaveHandler}/>;
        })
        }
      </div>

      { filmIds.length > filmCount ? (<div className="catalog__more">
        <button onClick={buttonShowMoreClick} className="catalog__button" type="button">Show more</button>
      </div>) : null}
    </>
  );
};

MovieList.propTypes = {
  filmIds: PropTypes.array,
  id: PropTypes.string,
  initialCount: PropTypes.number,
};

export default MovieList;
