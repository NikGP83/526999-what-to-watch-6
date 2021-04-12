import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router';
import {getComments} from '../../api/api-actions';


const MoviePageReviews = () => {
  const {id} = useParams();

  const dispatch = useDispatch();


  const userComments = useSelector((state) => state.comments[id]);
  useEffect(() => {
    if (Array.isArray(userComments) && userComments.length > 0) {
      return;
    }
    dispatch(getComments(id));
  }, [id]);


  if (Array.isArray(userComments)) {
    if (userComments.length > 0) {
      return <>{userComments.map(({id: commentId, comment, user, date, rating}) => (

        <div key={commentId} className="movie-card__reviews movie-card__row">
          <div className="movie-card__reviews-col">
            <div className="review">
              <blockquote className="review__quote">
                <p className="review__text">{comment}</p>

                <footer className="review__details">
                  <cite className="review__author">{user.name}</cite>
                  <time className="review__date" >{date}</time>
                </footer>
              </blockquote>

              <div className="review__rating">{rating}</div>
            </div>
          </div>
        </div>

      ))}</>;
    } else {
      return <h2>Нет комментариев</h2>;
    }

  }
  return <p>Загружаем</p>;
};

export default MoviePageReviews;
