import React, { createContext, useState } from 'react';
import { useLocalStorage } from '../useLocalStorage';

type User = {
    name: string;
};

interface UserContext {
    user?: User;
    setUser: (user?: User) => void;
};

export const UserContext = createContext<UserContext>({user: undefined, setUser: () => {}});

type Props = {
    user?: User;
};

const UserContextProvider: React.FC<Props> = ({ children, user: initialUser }) => {
    const [userLS, setUserLS] = useLocalStorage<User | undefined>('user', undefined);
    const [user, setUser] = useState<User | undefined>(userLS ?? initialUser);
    
    const updateUser = (user?: User) => {
        setUser(user);
        setUserLS(user);
    };

    const contextValue: UserContext = {
        user,
        setUser: updateUser,
    };

    return (
        <UserContext.Provider value={contextValue}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContextProvider;
