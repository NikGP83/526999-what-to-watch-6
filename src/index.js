import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {getFilmIds} from './components/app/utils/moc-data';

const filmIds = getFilmIds();

ReactDOM.render(<App filmIds = {filmIds}/>, document.querySelector(`#root`));
