

export const ActionType = {
  LOAD_FILM_LIST: `LOAD_FILM_LIST`,
  REQUIRED_AUTHORIZATION: `<h2> Необходима авторизация</h2>`,
};


export const ActionCreater = {
  loadFilmList: (payload) => ({type: ActionType.LOAD_FILM_LIST, payload}),
  requireAuthorization: (status) => ({type: ActionType.REQUIRED_AUTHORIZATION, payload: status}),
};
