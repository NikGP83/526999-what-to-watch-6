import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import FilmItem from '../film-item/film-item';
import Logo from '../logo/logo';
import Header from '../header/header';


const MyList = () => {
  // const filmIds = getFilmIds();
  return (
    <div className="user-page">
      <Header />

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <div className="catalog__movies-list">
          {/* {filmIds.map((id) => (<FilmItem to={`/films/${id}`} key={id} {...getFilmById(id)} />))} */}
        </div>
      </section>

      <footer className="page-footer">
        <Logo/>
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
