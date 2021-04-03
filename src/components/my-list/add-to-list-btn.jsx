import React from 'react';
import {Redirect} from 'react-router-dom';
import {AppRoute} from '../../const';
import {useCurrentUser} from '../header/use-current-user';

const AddToMyListButton = () => {
  const userAuth = useCurrentUser();
  const buttonMyListHandler = () => {
    if (userAuth.id === `undefined`) {
      <Redirect to={AppRoute.LOGIN} />;
    }
  };

  return (
    <button onClick={buttonMyListHandler} className="btn btn--list movie-card__button" type="button">
      <svg viewBox="0 0 19 20" width="19" height="20">
        <use xlinkHref="#add"></use>
      </svg>
      <span>My list</span>
    </button>
  );
};

export default AddToMyListButton;
