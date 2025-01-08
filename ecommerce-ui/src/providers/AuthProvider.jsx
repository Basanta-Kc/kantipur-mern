import { useState, createContext, useContext, useEffect, use } from "react";

const AuthUserContext = createContext(null);

export const useAuthUser = () => {
  return useContext(AuthUserContext);
  // return use(AuthUserContext);
};

const getUserFromLocalStorage = () => {
  const authUser = localStorage.getItem("authUser");
  return JSON.parse(authUser);
};

export function AuthProvider({ children }) {
  const [authUser, setAuthUser] = useState(getUserFromLocalStorage);

  useEffect(() => {
    localStorage.setItem("authUser", JSON.stringify(authUser));
  }, [authUser]);

  return (
    <AuthUserContext.Provider value={{ authUser, setAuthUser }}>
      {children}
    </AuthUserContext.Provider>
  );
  // React 19
  // return (
  //   <AuthUserContext value={{ authUser, setAuthUser }}>
  //     {children}
  //   </AuthUserContext>
  // );
}
