import React from 'react';
import {Link, useParams} from 'react-router-dom';
import {useCurrentUser} from './use-current-user';
import Breadcrumbs from '../breadcrumbs/breadcrumbs';
import Logo from '../logo/logo';

const Header = () => {
  const userProfile = useCurrentUser();
  const {email} = userProfile;
  const {id} = useParams();

  console.log(id)

  return (
    <header className="page-header movie-card__head">
      <Logo/>

      {id === `undefined` ? <Breadcrumbs/> : null}

      <div className="user-block">
        {typeof userProfile !== `undefined` ?
          <>
            <p>{email}</p>
            <div className="user-block__avatar">
              <Link to='/my-list'>
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
              </Link>
            </div>
          </>
          : <div className="user-block">
            <Link to='/login' className="user-block__link">Sign in</Link>
          </div>
        }
      </div>
    </header>
  );
};

export default Header;
