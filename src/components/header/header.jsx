import React from 'react';
import {Link, useLocation, useParams} from 'react-router-dom';
import {useCurrentUser} from './use-current-user';
import Breadcrumbs from '../breadcrumbs/breadcrumbs';
import Logo from '../logo/logo';

const Header = () => {
  const userProfile = useCurrentUser();
  const {email} = userProfile;
  const location = useLocation();

  return (
    <header className="page-header movie-card__head">
      <Logo />

      {/* {location === `films` ? <Breadcrumbs /> : null} */}

      <div className="user-block">
        {userProfile !== `undefined` ?
          <div className="user-block__avatar">
            <Link to='/my-list'>
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
            </Link>
          </div>
          : <div className="user-block">
            <Link to='/login' className="user-block__link">Sign in</Link>
          </div>
        }
      </div>
    </header>
  );
};

export default Header;
