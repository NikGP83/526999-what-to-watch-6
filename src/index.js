import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import App from './components/app/app';
import {getFilmById} from './mocks/films.js';
import comments from './mocks/review';
import {reducer} from './store/reducer';


const filmById = getFilmById;
const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
      <App filmById = {filmById} comments = {comments}/>, </Provider>,
    document.querySelector(`#root`)
);
