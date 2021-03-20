import { useMutation, useQuery } from "react-query";
import firebase from "../../utils/firebase";
import { Movie } from "../Movies/hooks";

type User = {
  id: string;
  name: string;
};

export type Review = {
  score: number;
  created: number;
  message: string;
  movie: Pick<Movie, "imdbID" | "Title">;
  postedBy: User;
};

type CreateReviewInput = {
  score: number;
  message: string;
  title: string;
  IMDBId: string;
  user: firebase.User;
};

export const useCreateReview = () => {
  const id = firebase.db.collection("reviews").doc().id;

  const createReview = ({
    score,
    message,
    user,
    IMDBId,
    title,
  }: CreateReviewInput) => {
    if (!user.displayName) throw Error("User has no displayName");

    return {
      score,
      message,
      movie: {
        Title: title,
        IMDBId,
      },
      postedBy: {
        id: user.uid,
        name: user.displayName,
      },
      created: Date.now(),
    };
  };

  return useMutation<unknown, unknown, CreateReviewInput>(
    (reviewInput: CreateReviewInput) =>
      firebase.db.collection("reviews").doc(id).set(createReview(reviewInput))
  );
};

export const useGetReviewsForMovie = (id: string) => {
  return useQuery<Review[]>(`movie-${id}-reviews`, () =>
    firebase.db
      .collectionGroup("reviews")
      .where("movie.IMDBId", "==", id)
      .get()
      .then(({ docs }) =>
        docs.map((_) => {
          const data = _.data();

          return {
            score: data.score,
            message: data.message,
            created: data.created,
            movie: data.movie,
            postedBy: data.postedBy,
          };
        })
      )
  );
};
