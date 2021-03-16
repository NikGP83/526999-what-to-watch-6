import React from 'react';


const MoviePageReviews = (searchResult) => {
  const [{comment, rating, date, user}] = searchResult;
  return (

    <div className="movie-card__reviews movie-card__row">
      <div className="movie-card__reviews-col">
        <div className="review">
          <blockquote className="review__quote">
            <p className="review__text">{comment}</p>

            <footer className="review__details">
              <cite className="review__author">{user.name}</cite>
              <time className="review__date" dateTime={date}>{date}</time>
            </footer>
          </blockquote>

          <div className="review__rating">{rating}</div>
        </div>
      </div>
    </div>
  );
};

export default MoviePageReviews;
