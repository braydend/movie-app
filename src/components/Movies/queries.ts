import { gql } from 'apollo-boost';

export const GET_ALL_MOVIES = gql`
    query findAllMovies {
        findAllMovies{
            data{
                title
                _id
                reviews {
                    _id
                    rating
                }
            }
        }
    }
`;


export const GET_TEST_MOVIE = gql`
 query GetTestMovie{
  movie: findMovieByID(id: 266902410276897288){
    title
    _id
    reviews{
      _id
      rating
    }
  }
}`;