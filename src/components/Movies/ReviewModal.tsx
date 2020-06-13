import React, { useState } from 'react';
import { Movie } from '../../utils/MovieApiProvider';
import { Modal, Image, Button, InputGroup, FormControl } from 'react-bootstrap';
import { useFindReviewsByMovieIdQuery, Review } from '../../graphqlTypes';
import ReactStars from 'react-stars';

type Props = {
    movie: Movie;
    onClose: () => void;
};

const ReviewModal: React.FC<Props> = ({ movie: { imdbID, Title, Poster }, onClose }) => {
    
    return (
        <Modal show={true} onHide={onClose} >
            <Modal.Header>
                Review {Title}
            </Modal.Header>
            <Modal.Body>
                <Reviews id={imdbID} />
                <Image src={Poster} alt={`${Title} poster`} />
            </Modal.Body>
        </Modal>
    );
};

const Reviews: React.FC<{id: string}> = ({ id }) => {
    const [rating, setRating] = useState<number>();
    const [reviewer, setReviewer] = useState<string>('');
    const { data, loading, error } = useFindReviewsByMovieIdQuery({
        variables: {
            id: id,
        },
    });

    if (loading) return <h1>Loading</h1>;
    if (error) return <h1>Error</h1>;

    const reviews: Review[] = data?.findReviewsByImdbId.data as Review[];

    const handleReview = () => {
        console.log(reviewer);
    };

    const isReviewerEmpty = reviewer.length === 0;
    const isButtonDisabled = !rating || isReviewerEmpty;

    return (
        <div>
            <h3>Reviewed By:</h3>
            <ul>
                {reviews.map(({ reviewer, rating }) => <li>{reviewer} - {rating}/5</li>)}
            </ul>
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
        </div>
    );
};

export default ReviewModal;