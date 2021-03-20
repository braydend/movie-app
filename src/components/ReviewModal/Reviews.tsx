import React, { useEffect, useState } from 'react';
import { getReviewsForMovie, Review } from '../../utils/firebase/services/reviewService';
import { Movie } from '../../utils/MovieApiProvider';

type Props = {
    movie: Movie,
};

const Reviews: React.FC<Props> = ({ movie: { imdbID, Title } }) => {
    const [reviews, setReviews] = useState<Review[]>();

    useEffect(() => {
        (async () => setReviews(await getReviewsForMovie(imdbID)))();
        return () => setReviews(undefined);
    }, [imdbID]);
    // const { data, loading, error } = useFindReviewsByMovieIdQuery({
    //     variables: {
    //         id: imdbID,
    //     },
    // });

    // if (loading) return <h1>Loading</h1>;
    // if (error) return <h1>Error</h1>;

    // const reviews: Review[] = data?.findReviewsByImdbId.data as Review[];

    const hasReviews = reviews && reviews.length > 0;

    return (
        <div>
            <h3>{hasReviews ? 'Reviewed By:' : `${Title} hasn't been rated yet, Be the first person!`}</h3>
            <ul>
                {reviews && reviews.map(({ score, postedBy: { name }, message, created }) => <li key={`${name}-${score}`}>{new Date(created).toLocaleDateString()} | {name} - {score}/5. {message}</li>)}
            </ul>
        </div>
    );
};

export default Reviews;