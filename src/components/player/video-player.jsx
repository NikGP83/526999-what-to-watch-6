import React from 'react';
import PropTypes from 'prop-types';

const VideoPlayer = ({videoLink, posterImage, activeMovieId}) => {
  return (
    activeMovieId ? <video src={videoLink} style={{width: 280, height: 175}} autoPlay /> : <img src={posterImage} style={{width: 280, height: 175}}/>
  );
};

VideoPlayer.propTypes = {
  videoLink: PropTypes.string,
  posterImage: PropTypes.string,
  activeMovieId: PropTypes.bool,
};

export default VideoPlayer;
