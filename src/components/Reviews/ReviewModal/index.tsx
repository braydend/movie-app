import React from "react";
import { Modal, Image, Alert } from "react-bootstrap";
import Reviews from "./Reviews";
import ReviewForm from "./ReviewForm";
import { Movie } from "../../Movies/hooks";

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
  return (
    <>
      <Modal.Header>Review {Title}</Modal.Header>
      <Modal.Body>
        <ReviewForm id={imdbID} Title={Title} onAfterReview={onAfterReview} />
        <Reviews movie={movie} />
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
