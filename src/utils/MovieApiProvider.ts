import { useQuery } from "react-query";

export type Movie = {
  poster: string;
  title: string;
  type: "movie" | "series" | "episode";
  year: string;
  imdbID: string;
};

export const getApiEndpoint = (
  url: string = process.env.REACT_APP_MOVIE_API_URL as string,
  key: string = process.env.REACT_APP_MOVIE_API_KEY as string
) => {
  return `${url}?apiKey=${key}`;
};

export const searchByTitle = async (
  query: string,
  onResolve: (movies: Movie[]) => void,
  onReject: (x: any) => void
): Promise<any> => {
  await (await fetch(`${getApiEndpoint()}&s=${query}`))
    .json()
    .then((data) => onResolve(data.Search || []))
    .catch(onReject);
};

export const createUrlFromId = (id: string) => `${getApiEndpoint()}&i=${id}`;

export const getMovieByImdbId: Promise<Movie> = async (id: string) => {

  return {
      poster: data.movie;
  };
};

const useMovie = (id: string) => {
    const { data, isLoading } = useQuery(`movie-${id}`, () => fetch(createUrlFromId(id)));

    
};

// const getJsonFromResponse = (resp: Response) => resp.json();
