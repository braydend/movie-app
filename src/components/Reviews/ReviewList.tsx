import React from "react";
import { Link } from "react-router-dom";
import { Review } from "../../types";

type Props = {
  reviews: Review[];
  showMovieName?: boolean;
};

const ReviewList: React.FC<Props> = ({ reviews, showMovieName = false }) => (
  <ul>
    {reviews.map((review) => (
      <li key={`review-${review.movie.imdbID}-${review.created}`}>
        {showMovieName && (
          <Link to={`movie/${review.movie.imdbID}`}>{review.movie.Title}:</Link>
        )}
        {review.score}/5.0 {review.message}
      </li>
    ))}
  </ul>
);

export default ReviewList;
