

const mocData = [];

for (let i = 0; i < 8; i++) {
  mocData.push({
    id: i,
    filmName: `The Grand Budapest Hotel`,
    posterImage: `img/the-grand-budapest-hotel-poster.jpg`,
    previewImage: `img/the-grand-budapest-hotel-poster.jpg`,
    backgrounImage: `img/the-grand-budapest-hotel-bg.jpg`,
    backgroundColor: `#ffffff`,
    videoLink: `https://some-link`,
    previewVideoLink: `https://some-link`,
    description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
    rating: 8.9,
    scoresCount: 240,
    director: `Wes Andreson`,
    starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`],
    runTime: 99,
    genre: `Comedy`,
    released: 2014,
    isFavorite: false
  });
}

export const getFilmIds = () => {
  return mocData.map((el) => el.id);
};

export const getFilmById = (id) => {
  return mocData.find((el) => el.id === id);
};

