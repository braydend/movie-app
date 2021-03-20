import { useMutation, useQuery } from "react-query";
import firebase from "../../utils/firebase";

type WatchlistMutationInput = { userId: string; imdbID: string };
export type WatchlistItem = { user: string; imdbID: string; created: string };
export type Watchlist = WatchlistItem[];

const transformCollectionToWatchlists = (
  collection: firebase.firestore.QuerySnapshot<firebase.firestore.DocumentData>
): Watchlist => {
  return collection.docs.map(transformDocumentToWatchlist);
};

const transformDocumentToWatchlist = (
  document: firebase.firestore.QueryDocumentSnapshot<firebase.firestore.DocumentData>
): WatchlistItem => {
  const data = document.data();

  return {
    user: data.user,
    imdbID: data.imdbID,
    created: data.created,
  };
};

export const useWatchlistQuery = (userId: string) =>
  useQuery<Watchlist>(`watchlist-${userId}`, () =>
    firebase.db
      .collectionGroup("watchlist")
      .where("user", "==", userId)
      .get()
      .then(transformCollectionToWatchlists)
  );

export const useCreateWatchlistItemMutation = () => {
  const id = firebase.db.collection("watchlist").doc().id;

  const createWatchlistItem = ({ userId, imdbID }: WatchlistMutationInput) => {
    if (!userId) throw Error("No user set");

    return {
      imdbID: imdbID,
      user: userId,
      created: Date.now(),
    };
  };

  return useMutation<unknown, unknown, WatchlistMutationInput>(
    (watchlistInput) =>
      firebase.db
        .collection("watchlist")
        .doc(id)
        .set(createWatchlistItem(watchlistInput))
  );
};
