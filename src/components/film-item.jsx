import React from 'react';

const filmItem = () => {
  return <article classList="small-movie-card catalog__movies-card">
    <div classList="small-movie-card__image">
      <img src="img/fantastic-beasts-the-crimes-of-grindelwald.jpg" alt="Fantastic Beasts: The Crimes of Grindelwald" width="280" height="175" />
    </div>
    <h3 classList="small-movie-card__title">
      <a classList="small-movie-card__link" href="movie-page.html">Fantastic Beasts: The Crimes of Grindelwald</a>
    </h3>
  </article>;
};

export default filmItem;
