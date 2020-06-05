import React, { useState } from 'react';
import Modal from 'react-modal';
import ReactStars from 'react-stars';
import { Scalars } from '../../types';
import Button from '../../styled-components/Button';

type Props = {
    isOpen?: boolean;
    onClose: () => void;
    rating: number;
    movie_id: Scalars["ID"];
};

const NewReviewModal: React.FC<Props> = ({ isOpen = false, onClose, rating, movie_id }) => {
    const [reviewer, setReviewer] = useState<string>();

    const style: Modal.Styles = {
        content: {
            height: '50%',
            width: '30%',
            margin: '0 auto',
        },
    };

    return (
        <Modal isOpen={isOpen} onRequestClose={onClose} style={style}>
            <ReactStars value={rating} count={5} edit={false} />
            <input type="text" value={reviewer} onChange={({ target: { value } }) => setReviewer(value)} />
            <Button onClick={onClose}>Save review</Button>
        </Modal>
    );
};

export default NewReviewModal;
