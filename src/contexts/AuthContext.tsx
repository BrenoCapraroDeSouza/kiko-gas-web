import Cookies from 'js-cookie';
import { createContext, PropsWithChildren, useState } from 'react';

import { AuthContextProps } from '@/@types';

export const AuthContext = createContext({} as AuthContextProps);

export function AuthProvider({ children }: Required<PropsWithChildren>) {
  const hasToken = !!Cookies.get('token');

  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(hasToken);

  async function changeToLogged(): Promise<void> {
    const newTokenExists = !!Cookies.get('token');
    setIsAuthenticated(newTokenExists);
  }

  function handleLogout(): void {
    setIsAuthenticated(false);

    Cookies.remove('token');
    Cookies.remove('name');
  }

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, changeToLogged, handleLogout }}
    >
      {children}
    </AuthContext.Provider>
  );
}
