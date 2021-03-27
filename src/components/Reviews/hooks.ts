import { useMutation, useQuery } from "react-query";
import firebase from "../../utils/firebase";
import { Review } from "../../types";

type CreateReviewInput = {
  score: number;
  message: string;
  title: string;
  imdbID: string;
  user: firebase.User;
};

const transformCollectionToReviews = (
  collection: firebase.firestore.QuerySnapshot<firebase.firestore.DocumentData>
): Review[] => {
  return collection.docs.map(transformDocumentToReview);
};

const transformDocumentToReview = (
  document: firebase.firestore.QueryDocumentSnapshot<firebase.firestore.DocumentData>
): Review => {
  const data = document.data();

  return {
    score: data.score,
    message: data.message,
    created: data.created,
    movie: data.movie,
    postedBy: data.postedBy,
  };
};

export const useCreateReview = () => {
  const id = firebase.db.collection("reviews").doc().id;

  const createReview = ({
    score,
    message,
    user,
    imdbID,
    title,
  }: CreateReviewInput) => {
    if (!user.displayName) throw Error("User has no displayName");

    return {
      score,
      message,
      movie: {
        Title: title,
        imdbID,
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
      .where("movie.imdbID", "==", id)
      .get()
      .then(transformCollectionToReviews)
  );
};

export const useGetReviewsByUser = (userId: string) => {
  return useQuery(`user-${userId}`, () =>
    firebase.db
      .collectionGroup("reviews")
      .where("postedBy.id", "==", userId)
      .get()
      .then(transformCollectionToReviews)
  );
};
