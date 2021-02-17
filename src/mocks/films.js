const getRandom = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const mocDataFilms = [];

for (let i = 0; i < 8; i++) {
  mocDataFilms.push({
    id: i,
    filmName: `The Grand Budapest Hotel Номер ${i}`,
    posterImage: `img/the-grand-budapest-hotel-poster.jpg`,
    previewImage: `img/the-grand-budapest-hotel-poster.jpg`,
    backgrounImage: `img/the-grand-budapest-hotel-bg.jpg`,
    backgroundColor: `#ffffff`,
    videoLink: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    previewVideoLink: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
    rating: getRandom(0, 10),
    scoresCount: getRandom(0, 300),
    director: `Wes Andreson`,
    starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`],
    runTime: 99,
    genre: `Comedy`,
    released: 2014,
    isFavorite: false
  });
}

export const getFilmIds = () => {
  return mocDataFilms.map((el) => el.id);
};

export const getFilmById = (id) => {
  return mocDataFilms.find((el) => el.id === id);
};

