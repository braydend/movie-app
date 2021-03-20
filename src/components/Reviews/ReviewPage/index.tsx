import React from "react";
import { useGetReviewsByUser } from "../hooks";
import ReviewList from "../ReviewList";

type Props = {
  userId: string;
};

const ReviewPage: React.FC<Props> = ({ userId }) => {
  const { data, isLoading } = useGetReviewsByUser(userId);

  if (isLoading) return <>loading...</>;
  if (!data) throw Error("Error fetching reviews for user");

  return (
    <div>
      <h1>Your reviews:</h1>
      <ReviewList reviews={data} showMovieName />
    </div>
  );
};

export default ReviewPage;
