import React from 'react';
import MainPage from '../main-page';
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import SignIn from '../sign-in';
import MyList from '../my-list';
import AddReview from '../add-review';
import Player from '../player';
import MoviePage from '../movie-page';


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
          <MoviePage {...props}/>
        </Route>
        <Route exact path="/films/:id?">
          <MoviePage {...props}/>
        </Route>
        <Route exact path="/my-list">
          <MyList {...props}/>
        </Route>
        <Route exact path="/films/review/">
          <AddReview {...props}/>
        </Route>
        <Route exact path="/films/review/:id?">
          <AddReview />
        </Route>
        <Route exact path="/player/">
          <Player {...props}/>
        </Route>
        <Route exact path="/player/:id?">
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
  filmById: PropTypes.func
};
export default App;
