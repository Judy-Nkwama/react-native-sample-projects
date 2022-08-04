import { createContext, useState } from "react";

export const authentificationCtx = createContext({
    token : "",
    isAuthentificated : false,
    authentificate : (token) => {},
    logout : () => {}
});

export default AuthentificationProvider = ({children}) =>{
    
    const [token, setToken] = useState();

    const authentificate = (token) => {
        setToken(token);
    };

    const logout = () => {
        setToken("");
    };

    const value = {
        token : token,
        isAuthentificated : !!token,
        authentificate : authentificate,
        logout : logout
    };

    return (
        <authentificationCtx.Provider value={value}>
            {children}
        </authentificationCtx.Provider>
    );
};