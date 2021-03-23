import React, {useEffect} from 'react';
import MainPage from '../main-page/main-page';
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter as BrowserRouter, Redirect} from 'react-router-dom';
import SignIn from '../header/sign-in';
import MyList from '../my-list/my-list';
import AddReview from '../add-review/add-review';
import Player from '../player/player';
import MoviePage from '../movie-page/movie-page';
import {useDispatch} from 'react-redux';
import {loadFilms} from '../../api/load-films';
import {ActionCreator} from '../../store/action';
import {PRELOADER} from '../../const';
import {useFilmLoaded} from '../../store/use-film-loaded';
import SingIn from '../sign-in/sign-in';
import browserHistory from '../../browser-history';
// import {checkAuth} from '../../api/api-actions';
// import {useAuthorize} from '../../store/use-authorize';

const App = () => {
  // const [filmListRequested, setFilmListRequested] = useState(false);
  // const [autoRizeRequested, setAutoRizeRequested] = useState(false);
  const hasFilm = useFilmLoaded();
  // const currentStatus = useAuthorize();
  const dispatch = useDispatch();
  useEffect(() => {
    if (hasFilm) {
      return;
    }

    loadFilms().then((films) => {
      if (typeof films === `undefined`) {
        return;
      }
      dispatch(ActionCreator.loadFilmList(films));
    });
  }, [hasFilm]);

  // useEffect(() => {
  //   if (autoRizeRequested || currentStatus !== AuthorizationStatus.UNKNOWN) {
  //     return;
  //   }
  //   setAutoRizeRequested(true);
  //   dispatch(checkAuth());
  // });

  if (hasFilm) {
    return (
      <BrowserRouter history={browserHistory}>
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
          <Route exact path="/login">
            <SingIn/>
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
  return <img src={PRELOADER} />;

};
App.propTypes = {
  filmIds: PropTypes.array,
  filmById: PropTypes.func
};
export default App;
