import {ActionCreator} from '../store/action';
import {AuthorizationStatus, APIRoute} from '../const';


export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
  .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
  .catch(() => {})
);

export const login = ({email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
  .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
);

export const userProfile = () => (dispatch, _getState, api) => {
  api.get(APIRoute.LOGIN)
  .then((data) => dispatch(ActionCreator.loadUserProfile(data)));
};

export const getPromoFilm = () => (dispatch, _getState, api) => {
  api.get(`/films/promo`)
.then((data) => dispatch(ActionCreator.loadPromoFilm(data)));
};

export const getComments = (id) => (dispatch, _getState, api) => {
  api.get(`/comments/${id}`)
  .then((response) => dispatch(ActionCreator.loadComments({id, comments: response.data})));
};

export const postComments = (comment, id) => (dispatch, _getState, api) => {
  api.post(`/comments/${id}`)
  .then(() => dispatch(ActionCreator.postMyComment({id, comment})));
};
