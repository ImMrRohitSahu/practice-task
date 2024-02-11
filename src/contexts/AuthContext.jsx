import { createContext, useState } from "react";

export const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
const AuthContextProvider = ({ children }) => {
    const [userName, setUserName] = useState("")
  const [isAuth, setIsAuth] = useState(false);

  const authLoginHandler = (name) => {
    setIsAuth(true);
    setUserName(name)
  };

  const authLogoutHandler = () => {
    setIsAuth(false);
    setUserName("")
  };

  return (
    <AuthContext.Provider
      value={{ isAuth, authLoginHandler, authLogoutHandler, userName }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
