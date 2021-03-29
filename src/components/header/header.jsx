import React from 'react';
import {Link} from 'react-router-dom';
import {useCurrentUser} from './use-current-user';

const Header = () => {
  const userProfile = useCurrentUser();
  const {email} = userProfile;


  return (
    <header className="page-header movie-card__head">
      <div className="logo">
        <Link className="logo__link" to="/">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </Link>
      </div>

      <div className="user-block">
        <p>{email}</p>
        <div className="user-block__avatar">
          <Link to='/my-list'>
            <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
