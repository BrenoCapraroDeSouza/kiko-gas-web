import { useContext } from 'react';

import { DashboardContext } from '@/contexts';

export function useDashboard() {
  return useContext(DashboardContext);
}
