import {ActionCreator} from '../store/action';
import {AuthorizationStatus, APIRoute, AppRoute} from '../const';


export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
  .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
  .catch(() => {})
);

export const login = () => ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
  .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
  .then(() => dispatch(ActionCreator.redirectToRoute(AppRoute.ROOT)))
);
