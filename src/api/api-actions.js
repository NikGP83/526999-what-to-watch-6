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
