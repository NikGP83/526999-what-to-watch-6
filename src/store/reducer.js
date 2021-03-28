import {AuthorizationStatus} from "../const";
import {ActionType} from "./action";

const initialState = {
  films: [],
  authInfo: {},
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  currentUser: {},
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_FILM_LIST:
      return {
        ...state,
        films: action.payload,
      };
    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state, authorizationStatus: action.payload,
      };

    case ActionType.CURRENT_USER:
      return {
        ...state, currentUser: action.payload,
      };


    default:
      return state;
  }
};
