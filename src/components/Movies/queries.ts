import { gql } from 'apollo-boost';

export const GET_REVIEWS_FOR_MOVIE = gql`
query findReviewsByMovieId ($id: String!) {
    findReviewByImdbId(imdbID: $id){
      rating
      reviewer
    }
  }
`;

export const CREATE_REVIEW = gql`
  mutation createReview ($input: ReviewInput!){
    createReview(data: $input){
      reviewer
    }
  }
`;
