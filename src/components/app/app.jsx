import React from 'react';
import MainPage from '../main-page/main-page';
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter, Redirect} from 'react-router-dom';
import SignIn from '../sign-in';
import MyList from '../my-list/my-list';
import AddReview from '../add-review/add-review';
import Player from '../player/player';
import MoviePage from '../movie-page/movie-page';


const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainPage {...props} />
        </Route>
        <Route exact path="/login">
          <SignIn />
        </Route>
        <Route exact path="/films/">
          <MoviePage />
        </Route>
        <Route exact path="/films/:id?">
          <MoviePage {...props}/>
        </Route>
        <Route exact path="/my-list">
          <MyList {...props}/>
        </Route>
        <Route exact path="/films/:id?/review">
          <AddReview {...props}/>
        </Route>
        <Route exact path="/player/:id?">
          <Player {...props}/>
        </Route>
        <Route exact path="/not-found">
          <h2>404 Not Found</h2>
        </Route>
        <Route>
          <Redirect to="/not-found"/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
App.propTypes = {
  filmIds: PropTypes.array,
  filmById: PropTypes.func
};
export default App;
