import React from 'react';
import ReactDOM from 'react-dom';

const IndexView = () => {
  return (
<section classList="movie-card">
  <div classList="movie-card__bg">
    <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
  </div>

  <h1 classList="visually-hidden">WTW</h1>

  <header classList="page-header movie-card__head">
    <div classList="logo">
      <a classList="logo__link">
        <span classList="logo__letter logo__letter--1">W</span>
        <span classList="logo__letter logo__letter--2">T</span>
        <span classList="logo__letter logo__letter--3">W</span>
      </a>
    </div>

    <div classList="user-block">
      <div classList="user-block__avatar">
        <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
      </div>
    </div>
  </header>

  <div classList="movie-card__wrap">
    <div classList="movie-card__info">
      <div classList="movie-card__poster">
        <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327" />
      </div>

      <div classList="movie-card__desc">
        <h2 classList="movie-card__title">The Grand Budapest Hotel</h2>
        <p classList="movie-card__meta">
          <span classList="movie-card__genre">Drama</span>
          <span classList="movie-card__year">2014</span>
        </p>

        <div classList="movie-card__buttons">
         <button classList="btn btn--play movie-card__button" type="button">
            <svg viewBox="0 0 19 19" width="19" height="19">
              <use xlink:href="#play-s"></use>
            </svg>
            <span>Play</span>
          </button>
          <button classList="btn btn--list movie-card__button" type="button">
            <svg viewBox="0 0 19 20" width="19" height="20">
              <use xlink:href="#add"></use>
            </svg>
            <span>My list</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</section>

<div classList="page-content">
  <section classList="catalog">
    <h2 classList="catalog__title visually-hidden">Catalog</h2>

    <ul classList="catalog__genres-list">
      <li classList="catalog__genres-item catalog__genres-item--active">
        <a href="#" classList="catalog__genres-link">All genres</a>
      </li>
      <li classList="catalog__genres-item">
        <a href="#" classList="catalog__genres-link">Comedies</a>
      </li>
      <li classList="catalog__genres-item">
        <a href="#" classList="catalog__genres-link">Crime</a>
      </li>
      <li classList="catalog__genres-item">
        <a href="#" classList="catalog__genres-link">Documentary</a>
      </li>
      <li classList="catalog__genres-item">
        <a href="#" classList="catalog__genres-link">Dramas</a>
      </li>
      <li classList="catalog__genres-item">
        <a href="#" classList="catalog__genres-link">Horror</a>
      </li>
      <li classList="catalog__genres-item">
        <a href="#" classList="catalog__genres-link">Kids & Family</a>
      </li>
      <li classList="catalog__genres-item">
        <a href="#" classList="catalog__genres-link">Romance</a>
      </li>
      <li classList="catalog__genres-item">
        <a href="#" classList="catalog__genres-link">Sci-Fi</a>
      </li>
      <li classList="catalog__genres-item">
        <a href="#" classList="catalog__genres-link">Thrillers</a>
      </li>
    </ul>

    <div classList="catalog__movies-list">
      <article classList="small-movie-card catalog__movies-card">
        <div classList="small-movie-card__image">
          <img src="img/fantastic-beasts-the-crimes-of-grindelwald.jpg" alt="Fantastic Beasts: The Crimes of Grindelwald" width="280" height="175" />
        </div>
        <h3 classList="small-movie-card__title">
          <a classList="small-movie-card__link" href="movie-page.html">Fantastic Beasts: The Crimes of Grindelwald</a>
        </h3>
      </article>

      <article classList="small-movie-card catalog__movies-card">
        <div classList="small-movie-card__image">
          <img src="img/bohemian-rhapsody.jpg" alt="Bohemian Rhapsody" width="280" height="175" />
        </div>
        <h3 classList="small-movie-card__title">
          <a classList="small-movie-card__link" href="movie-page.html">Bohemian Rhapsody</a>
        </h3>
      </article>

      <article classList="small-movie-card catalog__movies-card">
        <div classList="small-movie-card__image">
          <img src="img/macbeth.jpg" alt="Macbeth" width="280" height="175" />
        </div>
        <h3 classList="small-movie-card__title">
          <a classList="small-movie-card__link" href="movie-page.html">Macbeth</a>
        </h3>
      </article>

      <article classList="small-movie-card catalog__movies-card">
        <div classList="small-movie-card__image">
          <img src="img/aviator.jpg" alt="Aviator" width="280" height="175" />
        </div>
        <h3 classList="small-movie-card__title">
          <a classList="small-movie-card__link" href="movie-page.html">Aviator</a>
        </h3>
      </article>


      <article classList="small-movie-card catalog__movies-card">
        <div classList="small-movie-card__image">
          <img src="img/we-need-to-talk-about-kevin.jpg" alt="We need to talk about Kevin" width="280" height="175" />
        </div>
        <h3 classList="small-movie-card__title">
          <a classList="small-movie-card__link" href="movie-page.html">We need to talk about Kevin</a>
        </h3>
      </article>

      <article classList="small-movie-card catalog__movies-card">
        <div classList="small-movie-card__image">
          <img src="img/what-we-do-in-the-shadows.jpg" alt="What We Do in the Shadows" width="280" height="175" />
        </div>
        <h3 classList="small-movie-card__title">
          <a classList="small-movie-card__link" href="movie-page.html">What We Do in the Shadows</a>
        </h3>
      </article>

      <article classList="small-movie-card catalog__movies-card">
        <div classList="small-movie-card__image">
          <img src="img/revenant.jpg" alt="Revenant" width="280" height="175" />
        </div>
        <h3 classList="small-movie-card__title">
          <a classList="small-movie-card__link" href="movie-page.html">Revenant</a>
        </h3>
      </article>

      <article classList="small-movie-card catalog__movies-card">
        <div classList="small-movie-card__image">
          <img src="img/johnny-english.jpg" alt="Johnny English" width="280" height="175" />
        </div>
        <h3 classList="small-movie-card__title">
          <a classList="small-movie-card__link" href="movie-page.html">Johnny English</a>
        </h3>
      </article>


      <article classList="small-movie-card catalog__movies-card">
        <div classList="small-movie-card__image">
          <img src="img/shutter-island.jpg" alt="Shutter Island" width="280" height="175" />
        </div>
        <h3 classList="small-movie-card__title">
          <a classList="small-movie-card__link" href="movie-page.html">Shutter Island</a>
        </h3>
      </article>

      <article classList="small-movie-card catalog__movies-card">
        <div classList="small-movie-card__image">
          <img src="img/pulp-fiction.jpg" alt="Pulp Fiction" width="280" height="175" />
        </div>
        <h3 classList="small-movie-card__title">
          <a classList="small-movie-card__link" href="movie-page.html">Pulp Fiction</a>
        </h3>
      </article>

      <article classList="small-movie-card catalog__movies-card">
        <div classList="small-movie-card__image">
          <img src="img/no-country-for-old-men.jpg" alt="No Country for Old Men" width="280" height="175" />
        </div>
        <h3 classList="small-movie-card__title">
          <a classList="small-movie-card__link" href="movie-page.html">No Country for Old Men</a>
        </h3>
      </article>

      <article classList="small-movie-card catalog__movies-card">
        <div classList="small-movie-card__image">
          <img src="img/snatch.jpg" alt="Snatch" width="280" height="175" />
        </div>
        <h3 classList="small-movie-card__title">
          <a classList="small-movie-card__link" href="movie-page.html">Snatch</a>
        </h3>
      </article>


      <article classList="small-movie-card catalog__movies-card">
        <div classList="small-movie-card__image">
          <img src="img/moonrise-kingdom.jpg" alt="Moonrise Kingdom" width="280" height="175" />

        </div>
        <h3 classList="small-movie-card__title">
          <a classList="small-movie-card__link" href="movie-page.html">Moonrise Kingdom</a>
        </h3>
      </article>

      <article classList="small-movie-card catalog__movies-card">
        <div classList="small-movie-card__image">
          <img src="img/seven-years-in-tibet.jpg" alt="Seven Years in Tibet" width="280" height="175" />
        </div>
        <h3 classList="small-movie-card__title">
          <a classList="small-movie-card__link" href="movie-page.html">Seven Years in Tibet</a>
        </h3>
      </article>

      <article classList="small-movie-card catalog__movies-card">
        <div classList="small-movie-card__image">
          <img src="img/midnight-special.jpg" alt="Midnight Special" width="280" height="175" />
        </div>
        <h3 classList="small-movie-card__title">
          <a classList="small-movie-card__link" href="movie-page.html">Midnight Special</a>
        </h3>
      </article>

      <article classList="small-movie-card catalog__movies-card">
        <div classList="small-movie-card__image">
          <img src="img/war-of-the-worlds.jpg" alt="War of the Worlds" width="280" height="175" />
        </div>
        <h3 classList="small-movie-card__title">
          <a classList="small-movie-card__link" href="movie-page.html">War of the Worlds</a>
        </h3>
      </article>


      <article classList="small-movie-card catalog__movies-card">
        <div classList="small-movie-card__image">
          <img src="img/dardjeeling-limited.jpg" alt="Dardjeeling Limited" width="280" height="175" />
        </div>
        <h3 classList="small-movie-card__title">
          <a classList="small-movie-card__link" href="movie-page.html">Dardjeeling Limited</a>
        </h3>
      </article>

      <article classList="small-movie-card catalog__movies-card">
        <div classList="small-movie-card__image">
          <img src="img/orlando.jpg" alt="Orlando" width="280" height="175" />
        </div>
        <h3 classList="small-movie-card__title">
          <a classList="small-movie-card__link" href="movie-page.html">Orlando</a>
        </h3>
      </article>

      <article classList="small-movie-card catalog__movies-card">
        <div classList="small-movie-card__image">
          <img src="img/mindhunter.jpg" alt="Mindhunter" width="280" height="175" />
        </div>
        <h3 classList="small-movie-card__title">
          <a classList="small-movie-card__link" href="movie-page.html">Mindhunter</a>
        </h3>
      </article>

      <article classList="small-movie-card catalog__movies-card">
        <div classList="small-movie-card__image">
          <img src="img/midnight-special.jpg" alt="Midnight Special" width="280" height="175" />
        </div>
        <h3 classList="small-movie-card__title">
          <a classList="small-movie-card__link" href="movie-page.html">Midnight Special</a>
        </h3>
      </article>
    </div>

    <div classList="catalog__more">
      <button classList="catalog__button" type="button">Show more</button>
    </div>
  </section>

  <footer classList="page-footer">
    <div classList="logo">
      <a classList="logo__link logo__link--light">
        <span classList="logo__letter logo__letter--1">W</span>
        <span classList="logo__letter logo__letter--2">T</span>
        <span classList="logo__letter logo__letter--3">W</span>
      </a>
    </div>

    <div classList="copyright">
      <p>© 2019 What to watch Ltd.</p>
    </div>
  </footer>
</div>
  )
  }
