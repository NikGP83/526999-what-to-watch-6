import React from 'react';
import {Link} from 'react-router-dom';
import {userProfile} from '../../api/api-actions';

const Breadcrumbs = () => {
  const userAuth = userProfile();
  return (
    <nav className="breadcrumbs">
      <ul className="breadcrumbs__list">
        <li className="breadcrumbs__item">
          <a href="movie-page.html" className="breadcrumbs__link"></a>
        </li>
        <li className="breadcrumbs__item">
          {userAuth.id ? <Link to={`/add-review`} className="breadcrumbs__link">Add review</Link> : null}
        </li>
      </ul>
    </nav>
  );
};

export default Breadcrumbs;
