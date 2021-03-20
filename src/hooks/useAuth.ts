import { useEffect, useState } from "react";
import firebase from '../utils/firebase';

export const useAuth = (): [firebase.User | undefined, React.Dispatch<React.SetStateAction<firebase.User | undefined>>] => {
    const [authUser, setAuthUser] = useState<firebase.User>();

    useEffect(() => {
        const unsubscribe = firebase.auth.onAuthStateChanged(user => {
            if (user) {
                setAuthUser(user);
            } else {
                setAuthUser(undefined);
            }
        });

        return () => unsubscribe();
    });

    return [authUser, setAuthUser];
};