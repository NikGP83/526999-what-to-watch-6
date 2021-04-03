import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {useParams} from 'react-router-dom';
import MovieList from '../movie-list/movie-list';
import GenreList from '../genre-list/genre-list';
import {shallowEqual, useDispatch, useSelector} from 'react-redux';
import {makeUriSafeString} from '../../utils';
import Header from '../header/header';
import {userProfile} from '../../api/api-actions';
import Logo from '../logo/logo';
import AddToMyListButton from '../my-list/add-to-list-btn';


const MainPage = () => {
  const {genre} = useParams();
  const filmIds = useSelector((state) => state.films.filter((film) => makeUriSafeString(film.genre) === genre || !genre).map((el) => el.id), shallowEqual);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userProfile());
  }, []);

  return (
    <>
      <section className="movie-card">
        <div className="movie-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header/>

        <div className="movie-card__wrap">
          <div className="movie-card__info">
            <div className="movie-card__poster">
              <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327" />
            </div>

            <div className="movie-card__desc">
              <h2 className="movie-card__title">The Grand Budapest Hotel</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">Drama</span>
                <span className="movie-card__year">2014</span>
              </p>

              <div className="movie-card__buttons">
                <button className="btn btn--play movie-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <AddToMyListButton />

              </div>
            </div>
          </div>
        </div >
      </section >

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenreList/>
          <MovieList initialCount={8} filmIds={filmIds}/>

        </section>

        <footer className="page-footer">
          <Logo/>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </>
  );
};

MainPage.propTypes = {
  filmIds: PropTypes.array,
};
export default MainPage;
