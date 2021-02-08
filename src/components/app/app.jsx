import React from 'react';
import MainPage from '../main-page';
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import SignIn from '../sign-in';
import MyList from '../my-list';
import AddReview from '../add-review';
import Player from '../player';
import MoviePage from '../movie-page';


const App = (filmIds) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainPage {...filmIds} />
        </Route>
        <Route exact path="/sign-in">
          <SignIn />
        </Route>
        <Route exact path="/movie">
          <MoviePage />
        </Route>
        <Route exact path="/my-list">
          <MyList />
        </Route>
        <Route exact path="/add-review">
          <AddReview />
        </Route>
        <Route exact path="/player">
          <Player />
        </Route>
        <Route>
          <h2>404 Not Found</h2>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
App.propTypes = {
  filmIds: PropTypes.array,
  anotherParam: PropTypes.string
};
export default App;
