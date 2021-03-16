import {ActionType} from "./action";
import {AuthorizationStatus} from '../const';


const initialState = {
  films: [],
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  isDataLoaded: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_FILM_LIST:
      return {
        ...state,
        films: action.payload,
        isDataLoaded: true,
      };
    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state, authorizationStatus: action.payload,
      };

    default:
      return state;
  }
};
