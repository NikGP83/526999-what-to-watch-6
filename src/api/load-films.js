import {
  BASE_URL
} from './api-settings';
import axios from 'axios';

export const loadFilms = async () => {
  const promise = axios.get(`${BASE_URL}/films`);
  return promise.then((response) => {
    return response.data.map((el) => ({
      filmName: el.name,
      posterImage: el.poster_image,
      previewImage: el.preview_image,
      backgrounImage: el.background_image,
      backgroundColor: el.background_color,
      description: el.description,
      rating: el.rating,
      scoresCount: el.scores_count,
      director: el.director,
      starring: el.starring,
      runTime: el.run_time,
      genre: el.genre,
      released: el.released,
      id: el.id,
      isFavorite: el.is_favorite,
      videoLink: el.video_link,
      previewVideoLink: el.preview_video_link
    }));
  });
};
