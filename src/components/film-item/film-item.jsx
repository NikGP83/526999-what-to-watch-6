import React from 'react';
import {Link} from 'react-router-dom';
import {FilmItemProps} from './film-item-props';
import {getFilmById} from '../../mocks/films';
import VideoPlayer from '../player/video-player';

const FilmItem = (props) => {
  const {id, to, isActive, eventEnterHandler, eventLeaveHandler} = props;

  const filmByIdResult = getFilmById(id);
  if (typeof filmByIdResult === `undefined`) {
    window.location.reload();
  }
  const {filmName, posterImage, videoLink} = filmByIdResult;

  return (
    <article onMouseEnter={eventEnterHandler} onMouseLeave={eventLeaveHandler} className="small-movie-card catalog__movies-card">
      <div className="small-movie-card__image">
        <Link to={to} >
          <VideoPlayer videoLink={videoLink} posterImage={posterImage} isActive={isActive} />
        </Link>
      </div>
      <h3 className="small-movie-card__title">
        <Link className="small-movie-card__link" to={to}>{filmName}</Link>
      </h3>
    </article>

  );
};
FilmItem.propTypes = FilmItemProps;

export default FilmItem;
