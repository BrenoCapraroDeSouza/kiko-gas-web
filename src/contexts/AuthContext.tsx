import { createContext, PropsWithChildren, useEffect, useState } from 'react';

import { AuthContextProps } from '@/@types';
import { useRefresh } from '@/hooks';

export const AuthContext = createContext({} as AuthContextProps);

export function AuthProvider({ children }: Required<PropsWithChildren>) {
  const { isRefreshError, refresh } = useRefresh();

  const hasToken = !!localStorage.getItem('token');

  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(hasToken);

  async function changeToLogged(): Promise<void> {
    const newTokenExists = !!localStorage.getItem('token');
    setIsAuthenticated(newTokenExists);
  }

  function handleLogout(): void {
    setIsAuthenticated(false);

    localStorage.removeItem('token');
    localStorage.removeItem('name');
  }

  useEffect(() => {
    if (hasToken) refresh();
  }, [hasToken, refresh]);

  useEffect(() => {
    if (isRefreshError) handleLogout();
  }, [isRefreshError]);

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, changeToLogged, handleLogout }}
    >
      {children}
    </AuthContext.Provider>
  );
}
