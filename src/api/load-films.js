import {baseUrl} from './api-settings';

export const loadFilms = async () => {
  const response = await fetch(`${baseUrl}/films`);
  if (response.ok) {
    const data = await response.json();
    if (Array.isArray(data)) {
      return data.map((el) => ({
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
    }
  }
  throw new Error(`Данные свервера не получены`);
};
