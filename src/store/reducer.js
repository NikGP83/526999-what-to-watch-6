import {LOAD_FILM_LIST} from "./action";


const initialState = {
  films: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_FILM_LIST:
      return {
        ...state, films: action.payload
      };


    default:
      return state;
  }
};
