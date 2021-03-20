import firebase from "../../firebase";
import { getMovieByImdbId, Movie } from "../../MovieApiProvider";

export const getMoviesWithReviews = async (): Promise<Movie[]> => {
  const reviews = await firebase.db.collectionGroup("reviews").get();

  const movieIds: string[] = reviews.docs.map((_) => {
    const data = _.data();

    return data.IMDBId;
  });

  const [...movies] = await Promise.all(movieIds.map(getMovieByImdbId));

  return movieFetchPromises;
};
