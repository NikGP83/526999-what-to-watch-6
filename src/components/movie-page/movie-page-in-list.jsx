import React from 'react';
import PropTypes from 'prop-types';

const MoviePageInList = (searchResult) => {
  const {rating, ratingDescr, scoresCount, description, director, starring} = searchResult;
  return (
    <>
      <div className="movie-rating">
        <div className="movie-rating__score">{rating}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">{ratingDescr}</span>
          <span className="movie-rating__count">{scoresCount} ratings</span>
        </p>
      </div>

      <div className="movie-card__text">
        <p>{description}</p>

        <p className="movie-card__director"><strong>Director: {director}</strong></p>

        <p className="movie-card__starring"><strong>Starring: {starring}</strong></p>
      </div>
    </>
  );
};

MoviePageInList.propTypes = {
  rating: PropTypes.number,
  ratingDescr: PropTypes.string,
  scoresCount: PropTypes.number,
  description: PropTypes.string,
  director: PropTypes.string,
  starring: PropTypes.array,

};

export default MoviePageInList;
