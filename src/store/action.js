

export const ActionType = {
  LOAD_FILM_LIST: `LOAD_FILM_LIST`,
  REQUIRED_AUTHORIZATION: `<h2> Необходима авторизация</h2>`,
  AUTHORIZATION_CHANGED: `Hz`,
  REDIRECT_TO_ROUTE: `/`,
};


export const ActionCreator = {
  loadFilmList: (payload) => ({type: ActionType.LOAD_FILM_LIST, payload}),
  requireAuthorization: (payload) => ({type: ActionType.REQUIRED_AUTHORIZATION, payload}),
  authorizationChanged: (payload) => ({type: ActionType.AUTHORIZATION_CHANGED, payload}),
  redirectToRoute: (url) => ({type: ActionType.REDIRECT_TO_ROUTE, payload: url}),
};
