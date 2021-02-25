import React from 'react';
import PropTypes from 'prop-types';

const VideoPlayer = ({videoLink, posterImage, isActive}) => {
  return (
    isActive ? <video src={videoLink} autoPlay /> : <img src={posterImage} />
  );
};

VideoPlayer.propTypes = {
  videoLink: PropTypes.string,
  posterImage: PropTypes.string,
  isActive: PropTypes.bool
};

export default VideoPlayer;
