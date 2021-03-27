import React from "react";
import { useParams } from "react-router-dom";
import { Image } from "react-bootstrap";
import { useGetMovie } from "./hooks";

type Props = {};

const MoviePage: React.FC<Props> = () => {
  const { movieId } = useParams<{ movieId: string }>();

  const { data, isLoading } = useGetMovie(movieId);
  if (isLoading) return <>loading...</>;
  if (!data) throw Error("Failed to fetch movie data");

  return (
    <div>
      <h1>{data.Title}</h1>
      <Image src={data.Poster} fluid />
      <summary>{data.Plot}</summary>
    </div>
  );
};

export default MoviePage;
