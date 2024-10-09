import { createContext, PropsWithChildren, useEffect, useState } from 'react';

import { DashboardContextProps, DashboardTabType } from '@/@types';
import { Storage } from '@/helpers';
import { useAuth } from '@/hooks';

export const DashboardContext = createContext({} as DashboardContextProps);

export function DashboardProvider({ children }: Required<PropsWithChildren>) {
  const { isAuthenticated } = useAuth();

  const username = Storage.getItem('name') || '';

  const [currentTab, setCurrentTab] = useState<DashboardTabType>('clients');

  function changeToNextTab(tab: DashboardTabType): void {
    if (currentTab === tab) return;

    setCurrentTab(tab);
  }

  useEffect(() => {
    if (!isAuthenticated) setCurrentTab('clients');
  }, [isAuthenticated]);

  return (
    <DashboardContext.Provider
      value={{ username, currentTab, changeToNextTab }}
    >
      {children}
    </DashboardContext.Provider>
  );
}
