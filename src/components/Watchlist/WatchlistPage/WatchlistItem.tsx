import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import { useGetMovie } from "../../Movies/hooks";
import { WatchlistItem as WatchlistItemType } from "../../../types";

type Props = {
  data: WatchlistItemType;
};

const WatchlistItem: React.FC<Props> = ({ data }) => {
  const { data: movie, isLoading } = useGetMovie(data.imdbID);

  if (!isLoading && !movie) throw Error("Failed to load movie data");

  return (
    <Card>
      <Card.Img src={movie?.Poster} alt="Movie poster" />
      <Card.Title>
        <Link to={`movie/${data.imdbID}`}>{movie?.Title}</Link>
      </Card.Title>
      <Card.Text>Added {new Date(data.created).toLocaleString()}</Card.Text>
    </Card>
  );
};

export default WatchlistItem;
