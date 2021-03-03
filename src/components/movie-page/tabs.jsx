import React, {useState} from 'react';
import MoviePageReviews from './movie-page-reviews';

const Tabs = ({children}) => {
  const [activeTab, setTab] = useState(null);
  const movieNavListHandler = (evt, newValue) => {
    console.log(evt.className)
  }

  return (
    <nav className="movie-nav movie-card__nav">
      <ul className="movie-nav__list">
        <li onClick={movieNavListHandler}  className="movie-nav__item">
          <a href="#" className="movie-nav__link">Overview</a>
        </li>
        <li onClick={movieNavListHandler} className="movie-nav__item movie-nav__item--active">
          <a href="#" className="movie-nav__link">Details</a>
        </li>
        <li onClick={movieNavListHandler} className="movie-nav__item">
          <a href="#" className="movie-nav__link">Reviews</a>
        </li>
      </ul>
    </nav>
  );
};

export default Tabs;
