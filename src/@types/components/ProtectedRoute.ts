import { ReactNode } from 'react';

export type ProtectedRouteType = 'private' | 'public';

export interface ProtectedRouteProps {
  children: ReactNode;
  variant?: ProtectedRouteType;
}
