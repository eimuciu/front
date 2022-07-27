import React, { useContext, createContext, useState } from 'react';

const AuthContext = createContext({});

interface Props {
  children: JSX.Element;
}

function AuthProvider({ children }: Props) {
  const [token, setToken] = useState(sessionStorage.getItem('tkn'));

  const login = (tkn: string) => {
    sessionStorage.setItem('tkn', tkn);
    setToken(tkn);
  };

  const logout = () => {
    sessionStorage.removeItem('tkn');
    setToken(null);
  };

  const ctx = { login, logout, isUserLoggedIn: !!token };

  return <AuthContext.Provider value={ctx}>{children}</AuthContext.Provider>;
}

export function useAuthCtx() {
  return useContext(AuthContext);
}

export default AuthProvider;
