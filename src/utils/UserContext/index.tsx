import { createContext } from "react";

type ContextType = {
    user: firebase.User | undefined;
    setUser: React.Dispatch<React.SetStateAction<firebase.User | undefined>>;
};

const initialValue: ContextType = {
    user: undefined,
    setUser: () => {},
};

const UserContext = createContext<ContextType>(initialValue);

export default UserContext;