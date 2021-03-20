import React from "react";
import { Movie } from "../Movies/hooks";
import { useGetReviewsForMovie } from "./hooks";

type Props = {
  movie: Movie;
};

const Reviews: React.FC<Props> = ({ movie: { imdbID, Title } }) => {
  const { data: reviews, isLoading } = useGetReviewsForMovie(imdbID);

  if (isLoading) return <h1>Loading</h1>;

  const hasReviews = reviews && reviews.length > 0;

  return (
    <div>
      <h3>
        {hasReviews
          ? "Reviewed By:"
          : `${Title} hasn't been rated yet, Be the first person!`}
      </h3>
      <ul>
        {reviews &&
          reviews.map(({ score, postedBy: { name }, message, created }) => (
            <li key={`${name}-${score}`}>
              {new Date(created).toLocaleDateString()} | {name} - {score}/5.{" "}
              {message}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Reviews;
