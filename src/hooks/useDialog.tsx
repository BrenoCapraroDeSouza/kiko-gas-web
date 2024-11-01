import { useContext } from 'react';

import { DialogContext } from '@/contexts';

export function useDialog() {
  return useContext(DialogContext);
}
