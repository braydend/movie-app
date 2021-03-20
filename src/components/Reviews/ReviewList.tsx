import React from "react";
import { useGetReviewsByUser } from "./hooks";

type Props = {
  userId: string;
};

const ReviewList: React.FC<Props> = ({ userId }) => {
  const { data, isLoading } = useGetReviewsByUser(userId);

  if (isLoading) return <>...loading</>;
  if (!data) throw Error("No data returned");

  const hasReviews = data.length > 0;

  return (
    <div>
      <h1>Your reviews:</h1>
      {hasReviews ? (
        <ul>
          {data.map((review) => (
            <li key={`review-${review.movie.imdbID}-${review.created}`}>
              {review.movie.Title}: {review.score}/5.0 {review.message}
            </li>
          ))}
        </ul>
      ) : (
        <h2>Leave some reviews!</h2>
      )}
    </div>
  );
};

export default ReviewList;
