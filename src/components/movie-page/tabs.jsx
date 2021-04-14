import React from 'react';
import {useParams, Link} from 'react-router-dom';


const Tabs = () => {
  const {id, tab} = useParams();

  return (
    <>
      <nav className="movie-nav movie-card__nav">
        <ul className="movie-nav__list">
          <li className={typeof tab === `string` && tab.toLowerCase() === `overview` ? `movie-nav__item movie-nav__item--active` : `movie-nav__item`}>
            <Link to={`/films/${id}`} className="movie-nav__link">Overview</Link>
          </li>
          <li className={typeof tab === `string` && tab.toLowerCase() === `details` ? `movie-nav__item movie-nav__item--active` : `movie-nav__item`}>
            <Link to={`/films/${id}/details`} className="movie-nav__link">Details</Link>
          </li>
          <li className={typeof tab === `string` && tab.toLowerCase() === `page-reviews` ? `movie-nav__item movie-nav__item--active` : `movie-nav__item`}>
            <Link to={`/films/${id}/page-reviews`} className="movie-nav__link">Reviews</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Tabs;
