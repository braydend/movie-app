export type Movie = {
  Poster: string;
  Title: string;
  Plot: string;
  type: "movie" | "series" | "episode";
  year: string;
  imdbID: string;
};

export type Review = {
  score: number;
  created: number;
  message: string;
  movie: Pick<Movie, "imdbID" | "Title">;
  postedBy: User;
};

export type WatchlistItem = { user: string; imdbID: string; created: string };
export type Watchlist = WatchlistItem[];

export type User = {
  id: string;
  name: string;
};
