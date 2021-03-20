import React, { useContext, useState } from 'react';
import { Alert, Modal } from 'react-bootstrap';
import ReactStars from 'react-stars';
import UserContext from '../../../utils/UserContext';
import { Movie } from '../../../utils/MovieApiProvider';
import styled from 'styled-components';
import { createReview } from '../../../utils/firebase';
import { NoMovieSelected } from '../../ReviewModal';

type Props = {
    movie?: Movie;
    onClose: () => void;
    onAfterClose: () => void;
    isOpen: boolean;
};

const StarContainer = styled.div`
    display: flex;
    justify-content: space-around;
`;

const QuickReviewForm: React.FC<{ movie: Movie, onClose: () => void }> = ({ movie, onClose }) => {
    const { user, } = useContext(UserContext);
    const [error, setError] = useState<string>();
    
    const { imdbID, Title } = movie;

    const handleReview = async (rating: number) => {
        setError(undefined);

        try {
            if (!user) throw Error('User is not defined');
            await createReview(rating, 'QuickReview', Title, imdbID, user);
            onClose();
        } catch (e) {
            console.error('Review Error', e);
            setError(e.message);
        }
    };

    if (!user?.displayName){
        throw new Error(`Cannot quick-add review for movie: ${imdbID} with no user set`);
    }

    return (
        <>
            {error && <Alert variant='danger'>{error}</Alert>}
            <Modal.Body>
                <StarContainer>
                    <ReactStars count={5} half={false} onChange={handleReview} size={54} />
                </StarContainer>
            </Modal.Body>
        </>
    );
};

const QuickReviewModal: React.FC<Props> = ({ movie, onClose, isOpen, onAfterClose }) => {
    return (
        <Modal show={isOpen} onHide={onClose} onExited={onAfterClose} centered>
            {movie ? <QuickReviewForm movie={movie} onClose={onClose} /> : <NoMovieSelected />}
        </Modal>
    );
};

export default QuickReviewModal;
