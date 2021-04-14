import MoviePageDetails from "./movie-page-details";
import MoviePageInList from "./movie-page-in-list";
import MoviePageReviews from "./movie-page-reviews";


export const tabSelector = (tab) => {
  switch (tab) {
    case `details`:
      return MoviePageDetails;
    case `page-reviews`:
      return MoviePageReviews;
    default:
      return MoviePageInList;
  }
};
