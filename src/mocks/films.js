const getRandom = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const filmsPoster = [`img/the-grand-budapest-hotel-poster.jpg`, `img/macbeth.jpg`, `img/aviator.jpg`];
const filmGenre = [`comedy`, `drama`, `action`, `fantasy`];
const ratingDescription = [`Bad`, `Normal`, `Good`, `Very` `good`, `Awesome`];

const mocDataFilms = [];


for (let i = 0; i < 8; i++) {
  mocDataFilms.push({
    id: i,
    filmName: `${i}The Grand ${i} Budapest Hotel Номер ${i}`,
    posterImage: `img/the-grand-budapest-hotel-poster.jpg`,
    previewImage: filmsPoster[getRandom(0, 2)],
    backgrounImage: `img/the-grand-budapest-hotel-bg.jpg`,
    backgroundColor: `#ffffff`,
    videoLink: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    previewVideoLink: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
    rating: getRandom(0, 10),
    ratingDescr: ratingDescription[getRandom(0, ratingDescription.length - 1)],
    scoresCount: getRandom(0, 300),
    director: `Wes Andreson`,
    starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`],
    runTime: 99,
    genre: filmGenre[getRandom(0, filmGenre.length - 1)],
    released: `2014`,
    isFavorite: false
  });
}

const commentsData = [{
  id: 1,
  user: {
    id: Math.random(),
    name: `Kate Muir`
  },
  rating: 8.9,
  comment: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
  date: `2019-05-08T14:13:56.569Z`
}];

export const getFilmIds = () => {
  return mocDataFilms.map((el) => el.id);
};

export const getFilmById = (id) => {
  return mocDataFilms.find((el) => el.id === id);
};
