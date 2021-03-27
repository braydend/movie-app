import React from "react";
import { useWatchlistQuery } from "../hooks";
import Watchlist from "./Watchlist";

type Props = {
  userId: string;
};

const WatchlistPage: React.FC<Props> = ({ userId }) => {
  const { data, isLoading } = useWatchlistQuery(userId);

  if (isLoading) return <>.loading...</>;
  if (!data) throw Error("Error fetching watchlist");

  const hasWatchlist = data.length > 0;

  return (
    <div>
      <h1>{userId}'s watchlist</h1>
      {hasWatchlist ? (
        <Watchlist watchlist={data} />
      ) : (
        <h2>Go add some movies to your watchlist!</h2>
      )}
    </div>
  );
};

export default WatchlistPage;
