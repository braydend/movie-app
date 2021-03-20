export type Movie = {
    Poster: string;
    Title: string;
    Type: "movie" | "series" | "episode";
    Year: string;
    imdbID: string;
};

export const getApiEndpoint = (url: string = process.env.REACT_APP_MOVIE_API_URL as string, key: string = process.env.REACT_APP_MOVIE_API_KEY as string) => {
    return `${url}?apiKey=${key}`;
};

export const searchByTitle = async (query: string, onResolve: (movies: Movie[]) => void, onReject: (x: any) => void): Promise<any> => {
    await(await fetch(`${getApiEndpoint()}&s=${query}`)).json().then(data => onResolve(data.Search || [])).catch(onReject);
};

export const createUrlFromId = (id: string) => `${getApiEndpoint()}&i=${id}`; 

export const getMovieByImdbId = async (id: string, onResolve: (movie: Movie) => void, onReject: (x: any) => void) => {
    await(await fetch(createUrlFromId(id))).json().then(data => onResolve(data)).catch(onReject);
};
