import React from 'react';
import {Link} from 'react-router-dom';
import {FilmItemProps} from './film-item-props';
import VideoPlayer from '../player/video-player';
import {useSelector} from 'react-redux';

const FilmItem = (props) => {
  const {id, to, eventEnterHandler, eventLeaveHandler, activeMovieId} = props;

  const filmByIdResult = (useSelector((state) => state.films.find((el) => el.id === Number(id))));
  if (typeof filmByIdResult === `undefined`) {
    window.location.reload();
  }
  const {filmName, videoLink, previewImage} = filmByIdResult;


  return (
    <article onMouseEnter={eventEnterHandler} onMouseLeave={eventLeaveHandler} className="small-movie-card catalog__movies-card">
      <div className="small-movie-card__image">
        <Link to={to} >
          <VideoPlayer videoLink={videoLink} posterImage={previewImage} activeMovieId={activeMovieId}/>
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
