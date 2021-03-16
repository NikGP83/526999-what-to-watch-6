import React from 'react';
import {useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import PropTypes from 'prop-types';

const Player = () => {
  const {id} = useParams();
  // const {videoLink, posterImage} = getFilmById(Number(id));
  const iid = Number(id);
  const searchResult = (useSelector((state) => state.films.find((el) => el.id === iid)));
  const {videoLink, posterImage} = searchResult;
  return (
    <div className="player">
      <video src={videoLink} className="player__video" poster={posterImage}></video>

      <button type="button" className="player__exit">Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value="30" max="100"></progress>
            <div className="player__toggler" style={{left: `30%`}}>Toggler</div>
          </div>
          <div className="player__time-value">1:30:29</div>
        </div>

        <div className="player__controls-row">
          <button type="button" className="player__play">
            <svg viewBox="0 0 19 19" width="19" height="19">
              <use xlinkHref="#play-s"></use>
            </svg>
            <span>Play</span>
          </button>
          <div className="player__name">Transpotting</div>

          <button type="button" className="player__full-screen">
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
};

Player.propTypes = {
  filmById: PropTypes.func,
  videoLink: PropTypes.string,
  posterImage: PropTypes.string
};


export default Player;
