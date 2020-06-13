import React from 'react';
import { Movie } from '../../utils/MovieApiProvider';
import { Modal, Image } from 'react-bootstrap';
import Reviews from './Reviews';
import ReviewForm from './ReviewForm';

type Props = {
    movie: Movie;
    onClose: () => void;
};

const ReviewModal: React.FC<Props> = ({ movie, onClose }) => {
    const { imdbID, Title, Poster } = movie;

    return (
        <Modal show={true} onHide={onClose} >
            <Modal.Header>
                Review {Title}
            </Modal.Header>
            <Modal.Body>
                <ReviewForm id={imdbID} onAfterReview={onClose} />
                <Reviews movie={movie} />
                <Image src={Poster} alt={`${Title} poster`} />
            </Modal.Body>
        </Modal>
    );
};

export default ReviewModal;