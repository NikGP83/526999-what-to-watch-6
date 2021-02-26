import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {getFilmIds, getFilmById} from './mocks/films.js';
import comments from './mocks/review';

// const filmIds = getFilmIds();
const filmById = getFilmById;

ReactDOM.render(<App filmById = {filmById} comments = {comments}/>, document.querySelector(`#root`));
