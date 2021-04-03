import React from 'react';
import {Link} from 'react-router-dom';

const Breadcrumbs = () => {

  return (
    <nav className="breadcrumbs">
      <ul className="breadcrumbs__list">
        <li className="breadcrumbs__item">
          <a href="movie-page.html" className="breadcrumbs__link"></a>
        </li>
        <li className="breadcrumbs__item">
          <Link className="breadcrumbs__link">Add review</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Breadcrumbs;
