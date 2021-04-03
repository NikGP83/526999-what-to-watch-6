import React, {useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Redirect} from 'react-router';
import {login} from '../../api/api-actions';
import {AuthorizationStatus, AppRoute} from '../../const';
import Logo from '../logo/logo';

const SingIn = () => {
  const dispatch = useDispatch();

  const loginRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (evt) => {
    evt.preventDefault();

    dispatch(login({
      email: loginRef.current.value,
      password: passwordRef.current.value,
    }));
  };

  const autorhize = useSelector((state) => state.authorizationStatus === AuthorizationStatus.AUTH);

  if (autorhize) {
    return <Redirect to={AppRoute.ROOT}/>;
  }

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />

        <h1 className="page-title user-page__title">Sign in</h1>
      </header>

      <div className="sign-in user-page__content">
        <form onSubmit={handleSubmit} className="sign-in__form">
          <div className="sign-in__fields">
            <div className="sign-in__field">
              <input ref={loginRef} className="sign-in__input" type="email" placeholder="Email address" name="user-email" id="user-email" required />
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            <div className="sign-in__field">
              <input ref={passwordRef} className="sign-in__input" type="password" placeholder="Password" name="user-password" id="user-password" required />
              <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit">Sign in</button>
          </div>
        </form>
      </div>

      <footer className="page-footer">
        <div className="logo">
          <Logo/>
        </div>

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
};

export default SingIn;
