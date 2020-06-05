import React from 'react';
import Modal from 'react-modal';
import { Scalars } from '../../types';
import ReactStars from 'react-stars';

type Props = {
    isOpen: boolean;
    onClose: () => void;
    rating: number;
    movie_id: Scalars["ID"];
};

const NewReviewModal: React.FC<Props> = ({ isOpen, onClose, rating, movie_id }) => {
    return (
        <Modal isOpen={isOpen} onRequestClose={onClose}>
            <ReactStars value={rating} count={5} edit={false} />
        </Modal>
    );
};

export default NewReviewModal;
