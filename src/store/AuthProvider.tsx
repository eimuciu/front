import React, { useContext, createContext, useState } from 'react';

const AuthContext = createContext({});

interface Props {
  children: JSX.Element;
}

function AuthProvider({ children }: Props) {
  const [token, setToken] = useState(sessionStorage.getItem('tkn'));
  const [user, setUser] = useState({});

  const login = (tkn: string, credentials: any) => {
    sessionStorage.setItem('tkn', tkn);
    setToken(tkn);
    setUser(credentials);
  };

  const logout = () => {
    sessionStorage.removeItem('tkn');
    setToken(null);
  };

  const ctx = { login, logout, isUserLoggedIn: !!token, user };

  return <AuthContext.Provider value={ctx}>{children}</AuthContext.Provider>;
}

export function useAuthCtx(): any {
  return useContext(AuthContext);
}

export default AuthProvider;
