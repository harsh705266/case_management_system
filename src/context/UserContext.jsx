import { createContext, useContext, useState } from "react";
import { users as initialUsers } from "../data/mockData";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [users, setUsers] = useState(initialUsers);

    const addUser = (newUser) => {
        setUsers([...users, newUser]);
    };

    const removeUser = (userId) => {
        setUsers(users.filter(user => user.id !== userId));
    };

    return (
        <UserContext.Provider value={{ users, addUser, removeUser }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUsers = () => useContext(UserContext);
