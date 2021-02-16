import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {FilmItemProps} from './film-item-props';

const FilmItem = (props) => {
  const {filmName, previewImage, to} = props;

  return <article className="small-movie-card catalog__movies-card">
    <div className="small-movie-card__image">
      <Link to = {to} >
        <img onClick = {onclick} src={previewImage} alt={filmName} width="280" height="175" />
      </Link>
    </div>
    <h3 className="small-movie-card__title">
      <Link className="small-movie-card__link" to={to}>{filmName}</Link>
    </h3>
  </article>;
};

FilmItem.propTypes = FilmItemProps;

export default FilmItem;
