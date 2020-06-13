import { gql } from 'apollo-boost';

export const GET_REVIEWS_FOR_MOVIE = gql`
query findReviewsByMovieId ($id: String!) {
    findReviewByImdbId(imdbID: $id){
      rating
      reviewer
    }
  }
`;
