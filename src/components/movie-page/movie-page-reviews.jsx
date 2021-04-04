import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router';
import {getComments} from '../../api/api-actions';


const MoviePageReviews = () => {
  const dispatch = useDispatch();
  dispatch(getComments());
  // const {id} = useParams();


  const userComments = useSelector((state) => state.comments);
  console.log(userComments)
  // const {comment, rating, date, user} = comments;
  return (

    <div className="movie-card__reviews movie-card__row">
      <div className="movie-card__reviews-col">
        <div className="review">
          <blockquote className="review__quote">
            <p className="review__text"></p>

            <footer className="review__details">
              <cite className="review__author"></cite>
              <time className="review__date" ></time>
            </footer>
          </blockquote>

          <div className="review__rating"></div>
        </div>
      </div>
    </div>
  );
};

export default MoviePageReviews;
