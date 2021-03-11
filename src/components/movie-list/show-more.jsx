import React from 'react';
import PropTypes from 'prop-types';

const ShowMore = ({buttonShowMoreClick}) => {
  return (
    <div className="catalog__more">
      <button onClick={buttonShowMoreClick} className="catalog__button" type="button">Show more</button>
    </div>
  );
};
export default ShowMore;

ShowMore.propTypes = {
  buttonShowMoreClick: PropTypes.func,
};
