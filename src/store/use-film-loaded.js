import {useSelector} from "react-redux";

export const useFilmLoaded = () => {
  return useSelector((state) => state.films.length > 0);
};
