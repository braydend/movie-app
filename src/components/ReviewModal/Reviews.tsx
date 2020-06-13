import React from 'react';
import { useFindReviewsByMovieIdQuery, Review } from '../../graphqlTypes';
import { Movie } from '../../utils/MovieApiProvider';

type Props = {
    movie: Movie,
};

const Reviews: React.FC<Props> = ({ movie: { imdbID, Title } }) => {
    const { data, loading, error } = useFindReviewsByMovieIdQuery({
        variables: {
            id: imdbID,
        },
    });

    if (loading) return <h1>Loading</h1>;
    if (error) return <h1>Error</h1>;

    const reviews: Review[] = data?.findReviewsByImdbId.data as Review[];

    const isReviewed = reviews.length > 0;

    return (
        <div>
            <h3>{isReviewed ? 'Reviewed By:' : `${Title} hasn't been rated yet, Be the first person!`}</h3>
            <ul>
                {reviews.map(({ reviewer, rating }) => <li key={`${reviewer}-${rating}`}>{reviewer} - {rating}/5</li>)}
            </ul>
        </div>
    );
};

export default Reviews;