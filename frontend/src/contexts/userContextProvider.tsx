import { createContext, useState, ReactElement } from "react";
import api from "../api/api";
import { message } from "antd";

interface User {
    
    name: string;
    email: string;
}

interface UserContextValue {
    user: User | null;
    login: (values: { email: string; password: string }) => Promise<void>;
    register: (values: { name: string; email: string; password: string }) => Promise<void>;
    logout: () => void;
}

const initState: UserContextValue = {user : null, login : () => Promise.resolve(), register: () => Promise.resolve(), logout: () => {}}

type ChildrenType = { children?: ReactElement | ReactElement[] };

const UserContext = createContext<UserContextValue>(initState);

const UserProvider = ({children} : ChildrenType) => {
    const [user, setUser] = useState<User|null>(null);

    const login = async (values : {email: string; password: string}) => {
        try {
            const {data} = await api.post('/users/login', values);
            setUser({...data})
            console.log(data)
            message.success("User successfully Logged in")
        } catch (error) {
            console.log(error);
            message.error("User not found");
        }
    }

    const register = async (values: {name: string; email: string; password: string}) => {
        try {
          await api.post('/users/register', values);
          message.success('Successfully registered!');
        } catch (error) {
          console.log(error);
          message.error('Something went wrong...');
        }
    };

    const logout = () => {
        setUser(null);
    };

    return (
        <UserContext.Provider value={{user, login, register, logout}}>
            {children}
        </UserContext.Provider>
    )
}

export {UserProvider, UserContext};