import React from "react";
import { Modal, Image, Alert } from "react-bootstrap";
import ReviewForm from "./ReviewForm";
import { Movie } from "../../../types";
import ReviewList from "../ReviewList";
import { useGetReviewsForMovie } from "../hooks";

type Props = {
  movie?: Movie;
  onClose: () => void;
  onAfterClose: () => void;
  isOpen: boolean;
};

const MovieForm: React.FC<{ movie: Movie; onAfterReview: () => void }> = ({
  movie,
  onAfterReview,
}) => {
  const { imdbID, Title, Poster } = movie;
  const { data, isLoading } = useGetReviewsForMovie(imdbID);

  if (isLoading) return <>loading...</>;
  if (!data) throw Error("Error fetching reviews for movie");

  return (
    <>
      <Modal.Header>Review {Title}</Modal.Header>
      <Modal.Body>
        <ReviewForm id={imdbID} Title={Title} onAfterReview={onAfterReview} />
        <ReviewList reviews={data} />
        <Image src={Poster} alt={`${Title} Poster`} />
      </Modal.Body>
    </>
  );
};
export const NoMovieSelected: React.FC = () => (
  <Alert variant="danger">No movie selected</Alert>
);

const ReviewModal: React.FC<Props> = ({
  movie,
  onClose,
  isOpen,
  onAfterClose,
}) => {
  return (
    <Modal show={isOpen} onHide={onClose} onExited={onAfterClose}>
      {movie ? (
        <MovieForm movie={movie} onAfterReview={onClose} />
      ) : (
        <NoMovieSelected />
      )}
    </Modal>
  );
};

export default ReviewModal;
