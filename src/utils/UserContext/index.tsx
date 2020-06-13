import React, { createContext, useState } from 'react';

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
    const [user, setUser] = useState<User | undefined>(initialUser);
    
    const contextValue: UserContext = {
        user,
        setUser: (user?: User) => { setUser(user) },
    };

    return (
        <UserContext.Provider value={contextValue}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContextProvider;
