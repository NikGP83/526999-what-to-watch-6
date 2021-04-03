import React from 'react';
import {Link, Redirect, useParams} from 'react-router-dom';
import PropTypes from 'prop-types';
import Tabs from './tabs';
import {useSelector} from 'react-redux';
import Header from '../header/header';
import Logo from '../logo/logo';
import FilmItem from '../film-item/film-item';
import {tabSelector} from './tab-selector';
import AddToMyListButton from '../my-list/add-to-list-btn';
import {MAX_MORE_LIKE_FILMS_COUNT} from '../../const';

const MoviePage = () => {
  const {id, tab} = useParams();
  const iid = Number(id);
  const searchResult = (useSelector((state) => state.films.find((el) => el.id === iid)));
  const {posterImage, filmName, genre, released, backgrounImage} = searchResult;
  const searchGenreFilms = (useSelector((state) => state.films.filter((el) => el.genre === genre)));
  const sfg = searchGenreFilms.map((films) => films.id);
  if (typeof searchResult === `undefined`) {
    return <Redirect to="/not-found" />;
  }

  const Content = tabSelector(tab);

  return (
    <>
      <section className="movie-card movie-card--full">
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={backgrounImage} alt={filmName} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <Header/>

          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{filmName}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{genre}</span>
                <span className="movie-card__year">{released}</span>
              </p>

              <div className="movie-card__buttons">
                <button className="btn btn--play movie-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <AddToMyListButton />
                <Link to={`${id}/review`} className="btn movie-card__button">Add review</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src={posterImage} alt={filmName} width="218" height="327" />
            </div>

            <div className="movie-card__desc">
              <Tabs/>
              <Content {...searchResult}/>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <div className="catalog__movies-list">

            {sfg.slice(0, MAX_MORE_LIKE_FILMS_COUNT).map((moreLikeThisFilms) => {
              return <FilmItem to={`/films/${moreLikeThisFilms}`} key={moreLikeThisFilms} id={moreLikeThisFilms} />;
            })
            }

          </div>
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

MoviePage.propTypes = {
  filmById: PropTypes.func,
  posterImage: PropTypes.string,
  backgrounImage: PropTypes.string,
  filmName: PropTypes.string,
  genre: PropTypes.string,
};

export default MoviePage;
