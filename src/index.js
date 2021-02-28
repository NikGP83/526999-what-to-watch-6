import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {getFilmById} from './mocks/films.js';
import comments from './mocks/review';


const filmById = getFilmById;

ReactDOM.render(<App filmById = {filmById} comments = {comments}/>, document.querySelector(`#root`));
