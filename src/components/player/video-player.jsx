import React from 'react';
import PropTypes from 'prop-types';

const VideoPlayer = ({videoLink, posterImage}) => {
  return (
    <>
      <video src={videoLink} poster={posterImage}></video>
    </>
  );
};

VideoPlayer.propTypes = {
  videoLink: PropTypes.string,
  posterImage: PropTypes.string
};

export default VideoPlayer;
