export type Maybe<T> = T | null;
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









export type Movie = {
  __typename?: 'Movie';
  _id: Scalars['ID'];
  _ts: Scalars['Long'];
  title: Scalars['String'];
  reviews: Array<Review>;
};

export type MovieInput = {
  title: Scalars['String'];
  reviews: Array<Scalars['ID']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  updateMovie?: Maybe<Movie>;
  updateReview?: Maybe<Review>;
  deleteReview?: Maybe<Review>;
  createReview: Review;
  deleteMovie?: Maybe<Movie>;
  createMovie: Movie;
};


export type MutationUpdateMovieArgs = {
  id: Scalars['ID'];
  data: MovieInput;
};


export type MutationUpdateReviewArgs = {
  id: Scalars['ID'];
  data: ReviewInput;
};


export type MutationDeleteReviewArgs = {
  id: Scalars['ID'];
};


export type MutationCreateReviewArgs = {
  data: ReviewInput;
};


export type MutationDeleteMovieArgs = {
  id: Scalars['ID'];
};


export type MutationCreateMovieArgs = {
  data: MovieInput;
};

export type Query = {
  __typename?: 'Query';
  findReviewByID?: Maybe<Review>;
  findMovieByID?: Maybe<Movie>;
};


export type QueryFindReviewByIdArgs = {
  id: Scalars['ID'];
};


export type QueryFindMovieByIdArgs = {
  id: Scalars['ID'];
};

export type Review = {
  __typename?: 'Review';
  _id: Scalars['ID'];
  movie: Movie;
  rating: Scalars['Int'];
  message?: Maybe<Scalars['String']>;
  reviewer: Scalars['String'];
  _ts: Scalars['Long'];
};

export type ReviewInput = {
  movie?: Maybe<ReviewMovieRelation>;
  reviewer: Scalars['String'];
  rating: Scalars['Int'];
  message?: Maybe<Scalars['String']>;
};

export type ReviewMovieRelation = {
  create?: Maybe<MovieInput>;
  connect?: Maybe<Scalars['ID']>;
};

