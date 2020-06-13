import React from 'react';
import { Movie } from '../../utils/MovieApiProvider';
import { Modal } from 'react-bootstrap';

type Props = {
    movie: Movie;
    onClose: () => void;
};

const ReviewModal: React.FC<Props> = ({ movie: { Title, Poster }, onClose }) => {
    
    return (
        <Modal show={true} onHide={onClose} >
            <Modal.Header>
                Review {Title}
            </Modal.Header>
            <Modal.Body>
                <img src={Poster} alt={`${Title} poster`} />
            </Modal.Body>
        </Modal>
    );
};

export default ReviewModal;