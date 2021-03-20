import firebase from "../../firebase";

type Movie = {
  IMDBId: string;
  title: string;
};

type User = {
  id: string;
  name: string;
};

export type Review = {
  score: number;
  created: number;
  message: string;
  movie: Movie;
  postedBy: User;
};

export const createReview = async (
  score: number,
  message: string,
  title: string,
  IMDBId: string,
  user: firebase.User
) => {
  const id = firebase.db.collection("reviews").doc().id;

  if (!user.displayName) throw Error("User has no displayName");

  const newReview: Review = {
    score,
    message,
    movie: {
      title,
      IMDBId,
    },
    postedBy: {
      id: user.uid,
      name: user.displayName,
    },
    created: Date.now(),
  };
  await firebase.db.collection("reviews").doc(id).set(newReview);
};

export const getReviewsForMovie = async (id: string): Promise<Review[]> => {
  const reviews = await firebase.db
    .collectionGroup("reviews")
    .where("movie.IMDBId", "==", id)
    .get();

  return reviews.docs.map((_) => {
    const data = _.data();

    return {
      score: data.score,
      message: data.message,
      created: data.created,
      movie: data.movie,
      postedBy: data.postedBy,
    };
  });
};
