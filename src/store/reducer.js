import {ActionType} from "./action";

const initialState = {
  films: [],
  authInfo: {},
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_FILM_LIST:
      return {
        ...state,
        films: action.payload,
      };
    case ActionType.AUTHORIZATION_CHANGED:
      return {
        ...state, authInfo: action.payload,
      };


    default:
      return state;
  }
};
