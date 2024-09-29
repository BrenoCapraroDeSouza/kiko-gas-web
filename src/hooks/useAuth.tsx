import { useContext } from 'react';

import { AuthContextProps } from '@/@types';
import { AuthContext } from '@/contexts';

export function useAuth(): AuthContextProps {
  return useContext(AuthContext);
}
