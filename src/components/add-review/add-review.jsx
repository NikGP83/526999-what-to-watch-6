import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useParams, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../header/header';
import { postComments } from '../../api/api-actions';
import { toCamelCase } from '../../utils';

const INITIAL_RATING = 0;

const AddReview = () => {

  const { id } = useParams();
  const iid = Number(id);
  const searchResult = (useSelector((state) => state.films.find((el) => el.id === iid)));
  if (typeof searchResult === `undefined`) {
    return <Redirect to="/not-found" />;
  }
  const { previewImage, filmName } = searchResult;

  const [rating, setRating] = useState(INITIAL_RATING);
  const [comments, setComments] = useState(``);


  const dispatch = useDispatch();





  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(rating, comments)
    const formData = new FormData(evt.target);
    const formDataResult = [...formData.entries()].reduce((acc, b) => {acc[toCamelCase(b[0])] = b[1]; return acc;}, {});

    dispatch(postComments(id, {
      rating: formDataResult.rating,
      comment: formDataResult.reviewText,
    }));
  };

  return (
    <section className="movie-card movie-card--full">
      <div className="movie-card__header">
        <div className="movie-card__bg">
          <img src={previewImage} alt={filmName} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header />

        <div className="movie-card__poster movie-card__poster--small">
          <img src={previewImage} alt={filmName} width="218" height="327" />
        </div>
      </div>

      <div className="add-review">
        <form onSubmit={handleSubmit} action="#" className="add-review__form">
          <div className="rating">
            <div onChange={(evt) => setRating(evt.target.value)} className="rating__stars">
              <input className="rating__input" id="star-1" type="radio" name="rating" value="1" />
              <label className="rating__label" htmlFor="star-1">Rating 1</label>

              <input className="rating__input" id="star-2" type="radio" name="rating" value="2" />
              <label className="rating__label" htmlFor="star-2">Rating 2</label>

              <input className="rating__input" id="star-3" type="radio" name="rating" value="3" defaultChecked />
              <label className="rating__label" htmlFor="star-3">Rating 3</label>

              <input className="rating__input" id="star-4" type="radio" name="rating" value="4" />
              <label className="rating__label" htmlFor="star-4">Rating 4</label>

              <input className="rating__input" id="star-5" type="radio" name="rating" value="5" />
              <label className="rating__label" htmlFor="star-5">Rating 5</label>

              <input className="rating__input" id="star-6" type="radio" name="rating" value="6" />
              <label className="rating__label" htmlFor="star-6">Rating 6</label>

              <input className="rating__input" id="star-7" type="radio" name="rating" value="7" />
              <label className="rating__label" htmlFor="star-7">Rating 7</label>

              <input className="rating__input" id="star-8" type="radio" name="rating" value="8" defaultChecked />
              <label className="rating__label" htmlFor="star-8">Rating 8</label>

              <input className="rating__input" id="star-9" type="radio" name="rating" value="9" />
              <label className="rating__label" htmlFor="star-9">Rating 9</label>

              <input className="rating__input" id="star-10" type="radio" name="rating" value="10" />
              <label className="rating__label" htmlFor="star-10">Rating 10</label>
            </div>
          </div>

          <div className="add-review__text">
            <textarea onChange={(evt) => setComments(evt.target.value)} className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text"></textarea>
            <div className="add-review__submit">
              <button className="add-review__btn" type="submit">Post</button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

AddReview.propTypes = {
  filmById: PropTypes.func,
  previewImage: PropTypes.string,
  filmName: PropTypes.string
};

export default AddReview;
