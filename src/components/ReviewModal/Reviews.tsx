import React from 'react';
import { useFindReviewsByMovieIdQuery, Review } from '../../graphqlTypes';

type Props = {
    id: string,
};

const Reviews: React.FC<Props> = ({ id }) => {
    const { data, loading, error } = useFindReviewsByMovieIdQuery({
        variables: {
            id: id,
        },
    });

    if (loading) return <h1>Loading</h1>;
    if (error) return <h1>Error</h1>;

    const reviews: Review[] = data?.findReviewsByImdbId.data as Review[];

    return (
        <div>
            <h3>Reviewed By:</h3>
            <ul>
                {reviews.map(({ reviewer, rating }) => <li key={`${reviewer}-${rating}`}>{reviewer} - {rating}/5</li>)}
            </ul>
        </div>
    );
};

export default Reviews;