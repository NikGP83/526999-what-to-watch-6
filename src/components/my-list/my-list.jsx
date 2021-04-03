import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import FilmItem from '../film-item/film-item';
import {getFilmIds, getFilmById} from '../mocks/mock';
import Logo from '../logo/logo';


const MyList = () => {
  // const filmIds = getFilmIds();
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <div className="logo">
          <Link className="logo__link" to="/">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </Link>
        </div>

        <h1 className="page-title user-page__title">My list</h1>

        <div className="user-block">
          <div className="user-block__avatar">
            <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
          </div>
        </div>
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <div className="catalog__movies-list">
          {/* {filmIds.map((id) => (<FilmItem to={`/films/${id}`} key={id} {...getFilmById(id)} />))} */}
        </div>
      </section>

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

MyList.propTypes = {
  filmIds: PropTypes.array,
  filmById: PropTypes.func
};

export default MyList;
