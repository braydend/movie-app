import React, { useState, useContext } from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import { useCreateReviewMutation } from '../../graphqlTypes';
import ReactStars from 'react-stars';
import { UserContext } from '../../utils/UserContext';

type Props = {
    id: string;
    onAfterReview: () => void;
};

const ReviewForm: React.FC<Props> = ({ id, onAfterReview }) => {
    const { user, setUser } = useContext(UserContext);
    const [rating, setRating] = useState<number>(0);
    const [reviewer, setReviewer] = useState<string>(user?.name || '');
    const [addReviewForMovieMutation, { loading, error }] = useCreateReviewMutation({ refetchQueries: ['findReviewsByMovieId'] });

    const isReviewerEmpty = reviewer.length === 0;
    const isButtonDisabled = !rating || isReviewerEmpty;

    const handleReview = () => {
        addReviewForMovieMutation({ variables: { input: { imdbID: id, rating, reviewer } } });
        setUser({ name: reviewer });
        if (!loading){
            if (error) {
                console.error(error)
            } else {
                onAfterReview();
            }
        }
    };

    return (
        <>
            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                    <InputGroup.Text>            
                        <ReactStars count={5} half={false} onChange={setRating} value={rating} />
                    </InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl value={reviewer} onChange={e => setReviewer(e.target.value)} isInvalid={isReviewerEmpty} />
            </InputGroup>
            <Button onClick={handleReview} disabled={isButtonDisabled}>
                {isButtonDisabled ? 'Click a star rating to leave a review' : `Leave ${rating} star Review`}
            </Button>
        </>
    );
};

export default ReviewForm;