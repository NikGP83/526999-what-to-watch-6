import {
  array
} from 'prop-types';
import {
  baseUrl
} from './api-settings';

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
};


const example = {
  "name": "Johnny English",
  "poster_image": "https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/Johnny_English.jpg",
  "preview_image": "https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/johnny-english.jpg",
  "background_image": "https://assets.htmlacademy.ru/intensives/javascript-3/film/background/Johnny_English.jpg",
  "background_color": "#F0DBA2",
  "description": "After a sudden attack on the MI5, Johnny English, Britain's most confident yet unintelligent spy, becomes Britain's only spy.",
  "rating": 10,
  "scores_count": 136843,
  "director": "Peter Howitt",
  "starring": ["Rowan Atkinson", "John Malkovich", "Natalie Imbruglia"],
  "run_time": 88,
  "genre": "Comedy",
  "released": 2003,
  "id": 1,
  "is_favorite": false,
  "video_link": "http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4",
  "preview_video_link": "https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm"
}
