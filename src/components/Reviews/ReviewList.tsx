import React from "react";
import { Review } from "./hooks";

type Props = {
  reviews: Review[];
  showMovieName?: boolean;
};

const ReviewList: React.FC<Props> = ({ reviews, showMovieName = false }) => (
  <ul>
    {reviews.map((review) => (
      <li key={`review-${review.movie.imdbID}-${review.created}`}>
        {showMovieName && `${review.movie.Title}: `}
        {review.score}/5.0 {review.message}
      </li>
    ))}
  </ul>
);

export default ReviewList;
