import { useQuery } from "react-query";
import { Movie } from "../../types";

const createUrlFromId = (id: string) => `${getApiEndpoint()}&i=${id}`;

const getApiEndpoint = (
  url: string = process.env.REACT_APP_MOVIE_API_URL as string,
  key: string = process.env.REACT_APP_MOVIE_API_KEY as string
) => {
  return `${url}?apiKey=${key}`;
};

export const useGetMovie = (id: string) => {
  return useQuery<Movie>(
    `movie-${id}`,
    (): Promise<Movie> => fetch(createUrlFromId(id)).then((resp) => resp.json())
  );
};

export const useSearchMoviesByName = (query: string) =>
  useQuery(`movie-search: ${query}`, () =>
    fetch(`${getApiEndpoint()}&s=${query}`).then((resp) => resp.json())
  );
