

export const ActionType = {
  LOAD_FILM_LIST: `LOAD_FILM_LIST`,
  REQUIRED_AUTHORIZATION: `<h2> Необходима авторизация</h2>`,
  AUTHORIZATION_CHANGED: `Hz`,
  REDIRECT_TO_ROUTE: `/`,
  CURRENT_USER: `LOAD_USER_PROFILE`,
  LOAD_PROMO_FILM: `LOAD_PROMO_FILM`,
  LOAD_COMMENTS: `LOAD_COMMENTS`,
  POST_MY_COMMENT: `POST_MY_COMMENT`,
};


export const ActionCreator = {
  loadFilmList: (payload) => ({type: ActionType.LOAD_FILM_LIST, payload}),
  requireAuthorization: (payload) => ({type: ActionType.REQUIRED_AUTHORIZATION, payload}),
  authorizationChanged: (payload) => ({type: ActionType.AUTHORIZATION_CHANGED, payload}),
  redirectToRoute: (url) => ({type: ActionType.REDIRECT_TO_ROUTE, payload: url}),
  loadUserProfile: (payload) => ({type: ActionType.CURRENT_USER, payload}),
  loadPromoFilm: (payload) => ({type: ActionType.LOAD_PROMO_FILM, payload}),
  loadComments: (payload) => ({type: ActionType.LOAD_COMMENTS, payload}),
  postMyComment: (payload) => ({type: ActionType.POST_MY_COMMENT, payload}),
};

