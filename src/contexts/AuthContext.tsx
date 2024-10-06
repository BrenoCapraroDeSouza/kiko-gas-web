import { createContext, PropsWithChildren, useEffect, useState } from 'react';

import { AuthContextProps } from '@/@types';
import { Storage } from '@/helpers';
import { useRefresh } from '@/hooks';

export const AuthContext = createContext({} as AuthContextProps);

export function AuthProvider({ children }: Required<PropsWithChildren>) {
  const { isRefreshError, refresh } = useRefresh();

  const hasToken = Storage.hasItem('token');

  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(hasToken);

  async function changeToLogged(): Promise<void> {
    const newTokenExists = Storage.hasItem('token');
    setIsAuthenticated(newTokenExists);
  }

  function handleLogout(): void {
    setIsAuthenticated(false);

    Storage.clear();
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
