import React, {useEffect} from 'react';
import MainPage from '../main-page/main-page';
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter, Redirect} from 'react-router-dom';
import SignIn from '../header/sign-in';
import MyList from '../my-list/my-list';
import AddReview from '../add-review/add-review';
import Player from '../player/player';
import MoviePage from '../movie-page/movie-page';
import {useDispatch, useSelector} from 'react-redux';
import {loadFilms} from '../../api/load-films';
import {loadFilmList} from '../../store/action';

const App = () => {
  const hasFilm = useSelector((state) => state.films.length > 0);
  const dispatch = useDispatch();
  useEffect(() => {
    if (hasFilm) {
      return;
    }

    loadFilms().then((films) => {
      if (typeof films === `undefined`) {
        return;
      }
      dispatch(loadFilmList(films));
    });
  }, [hasFilm]);

  if (hasFilm) {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <MainPage />
          </Route>
          <Route exact path="/catalog/:genre">
            <MainPage />
          </Route>
          <Route exact path="/login">
            <SignIn />
          </Route>
          <Route exact path="/films/">
            <MoviePage />
          </Route>
          <Route exact path="/films/:id/:tab?">
            <MoviePage />
          </Route>
          <Route exact path="/my-list">
            <MyList />
          </Route>
          <Route exact path="/films/:id?/review">
            <AddReview />
          </Route>
          <Route exact path="/player/:id?">
            <Player />
          </Route>
          <Route exact path="/not-found">
            <h2>404 Not Found</h2>
          </Route>
          <Route>
            <Redirect to="/not-found" />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
  return <h2>Работаем</h2>;

};
App.propTypes = {
  filmIds: PropTypes.array,
  filmById: PropTypes.func
};
export default App;
