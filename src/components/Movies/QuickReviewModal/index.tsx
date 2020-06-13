import React, { useContext } from 'react';
import { Modal } from 'react-bootstrap';
import ReactStars from 'react-stars';
import { useCreateReviewMutation } from '../../../graphqlTypes';
import { UserContext } from '../../../utils/UserContext';
import { Movie } from '../../../utils/MovieApiProvider';
import styled from 'styled-components';

type Props = {
    movie: Movie;
    onClose: () => void;
};

const StarContainer = styled.div`
    display: flex;
    justify-content: space-around;
`;

const QuickReviewModal: React.FC<Props> = ({ movie: { imdbID }, onClose }) => {
    const [addReviewForMovieMutation, { loading, error }] = useCreateReviewMutation({ refetchQueries: ['findReviewsByMovieId'] });
    const { user } = useContext(UserContext);

    if (user?.name === undefined){
        throw new Error(`Cannot quick-add review for movie: ${imdbID} with no user set`);
    }

    const handleSelection = (rating: number) => {
        addReviewForMovieMutation({ variables: { input: { imdbID, rating, reviewer: user.name } } });
        if (!loading){
            if (error) {
                console.error(error)
            } else {
                onClose();
            }
        }
    };

    return (
        <Modal show={true} onHide={onClose} centered>
        <Modal.Body>
            <StarContainer>
                <ReactStars count={5} half={false} onChange={handleSelection} size={54} />
            </StarContainer>
        </Modal.Body>
    </Modal>
    );
};

export default QuickReviewModal;
