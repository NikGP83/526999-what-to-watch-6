import {AuthorizationStatus} from "../const";
import {ActionType} from "./action";


const initialState = {
  films: [],
  authInfo: {},
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  currentUser: {},
  promoFilm: {},
  comments: {},
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

    case ActionType.LOAD_PROMO_FILM:
      return {

        ...state,
        films: ((films, promo) => films)(state.films, action.payload),
        promoFilm: action.payload,
      };
    case ActionType.LOAD_COMMENTS:
      const {id, comments} = action.payload;
      return {
        ...state, comments: {...state.comments, [id]: comments}
      };
    case ActionType.POST_MY_COMMENT:
      return {
        ...state, comments: action.payload,
      };


    default:
      return state;
  }
};
