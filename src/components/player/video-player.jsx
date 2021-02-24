import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const VideoPlayer = ({videoLink, posterImage}) => {
  const [isMouseOver, setMouseOver] = useState(false);

  const videoRef = useRef();

  const eventHandlerFocus = () => {

    videoRef.current.play();
    console.log(`i was there`)
  }
  return (
    <>
      <video ref={videoRef} onMouseOver={eventHandlerFocus} src={videoLink} poster={posterImage}></video>
    </>
  );
};

VideoPlayer.propTypes = {
  videoLink: PropTypes.string,
  posterImage: PropTypes.string
};

export default VideoPlayer;
