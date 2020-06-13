import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  Long: any;
  Time: any;
};









export type Mutation = {
  __typename?: 'Mutation';
  createReview: Review;
  updateReview?: Maybe<Review>;
  deleteReview?: Maybe<Review>;
};


export type MutationCreateReviewArgs = {
  data: ReviewInput;
};


export type MutationUpdateReviewArgs = {
  id: Scalars['ID'];
  data: ReviewInput;
};


export type MutationDeleteReviewArgs = {
  id: Scalars['ID'];
};

export type Query = {
  __typename?: 'Query';
  findReviewByID?: Maybe<Review>;
  findAllReviews: ReviewPage;
  findReviewsByImdbId: ReviewPage;
};


export type QueryFindReviewByIdArgs = {
  id: Scalars['ID'];
};


export type QueryFindAllReviewsArgs = {
  _size?: Maybe<Scalars['Int']>;
  _cursor?: Maybe<Scalars['String']>;
};


export type QueryFindReviewsByImdbIdArgs = {
  _size?: Maybe<Scalars['Int']>;
  _cursor?: Maybe<Scalars['String']>;
  imdbID: Scalars['String'];
};

export type Review = {
  __typename?: 'Review';
  _id: Scalars['ID'];
  rating: Scalars['Int'];
  message?: Maybe<Scalars['String']>;
  reviewer: Scalars['String'];
  imdbID: Scalars['String'];
  _ts: Scalars['Long'];
};

export type ReviewInput = {
  imdbID: Scalars['String'];
  reviewer: Scalars['String'];
  rating: Scalars['Int'];
  message?: Maybe<Scalars['String']>;
};

export type ReviewPage = {
  __typename?: 'ReviewPage';
  data: Array<Maybe<Review>>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};


export type FindReviewsByMovieIdQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type FindReviewsByMovieIdQuery = (
  { __typename?: 'Query' }
  & { findReviewsByImdbId: (
    { __typename?: 'ReviewPage' }
    & { data: Array<Maybe<(
      { __typename?: 'Review' }
      & Pick<Review, 'rating' | 'reviewer'>
    )>> }
  ) }
);

export type CreateReviewMutationVariables = Exact<{
  input: ReviewInput;
}>;


export type CreateReviewMutation = (
  { __typename?: 'Mutation' }
  & { createReview: (
    { __typename?: 'Review' }
    & Pick<Review, 'reviewer'>
  ) }
);


export const FindReviewsByMovieIdDocument = gql`
    query findReviewsByMovieId($id: String!) {
  findReviewsByImdbId(imdbID: $id) {
    data {
      rating
      reviewer
    }
  }
}
    `;

/**
 * __useFindReviewsByMovieIdQuery__
 *
 * To run a query within a React component, call `useFindReviewsByMovieIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindReviewsByMovieIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindReviewsByMovieIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useFindReviewsByMovieIdQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<FindReviewsByMovieIdQuery, FindReviewsByMovieIdQueryVariables>) {
        return ApolloReactHooks.useQuery<FindReviewsByMovieIdQuery, FindReviewsByMovieIdQueryVariables>(FindReviewsByMovieIdDocument, baseOptions);
      }
export function useFindReviewsByMovieIdLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FindReviewsByMovieIdQuery, FindReviewsByMovieIdQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<FindReviewsByMovieIdQuery, FindReviewsByMovieIdQueryVariables>(FindReviewsByMovieIdDocument, baseOptions);
        }
export type FindReviewsByMovieIdQueryHookResult = ReturnType<typeof useFindReviewsByMovieIdQuery>;
export type FindReviewsByMovieIdLazyQueryHookResult = ReturnType<typeof useFindReviewsByMovieIdLazyQuery>;
export type FindReviewsByMovieIdQueryResult = ApolloReactCommon.QueryResult<FindReviewsByMovieIdQuery, FindReviewsByMovieIdQueryVariables>;
export const CreateReviewDocument = gql`
    mutation createReview($input: ReviewInput!) {
  createReview(data: $input) {
    reviewer
  }
}
    `;
export type CreateReviewMutationFn = ApolloReactCommon.MutationFunction<CreateReviewMutation, CreateReviewMutationVariables>;

/**
 * __useCreateReviewMutation__
 *
 * To run a mutation, you first call `useCreateReviewMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateReviewMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createReviewMutation, { data, loading, error }] = useCreateReviewMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateReviewMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateReviewMutation, CreateReviewMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateReviewMutation, CreateReviewMutationVariables>(CreateReviewDocument, baseOptions);
      }
export type CreateReviewMutationHookResult = ReturnType<typeof useCreateReviewMutation>;
export type CreateReviewMutationResult = ApolloReactCommon.MutationResult<CreateReviewMutation>;
export type CreateReviewMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateReviewMutation, CreateReviewMutationVariables>;