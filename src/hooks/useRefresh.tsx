import { useState } from 'react';
import { useMutation } from 'react-query';

import { LoginResponseDTOProps } from '@/@types';
import { api } from '@/config';

export function useRefresh() {
  const [isRefreshDone, setIsRefreshDone] = useState<boolean>(false);

  async function fetchMutation(): Promise<void> {
    if (isRefreshDone) return;

    const accessToken = localStorage.getItem('token')!;

    const { data } = await api.post<LoginResponseDTOProps>(
      '/refresh',
      {},
      {
        headers: {
          Authorization: `Bearer ${JSON.parse(accessToken)}`,
        },
      },
    );

    setIsRefreshDone(true);

    localStorage.setItem('token', JSON.stringify(data.token));
    localStorage.setItem('name', JSON.stringify(data.name));
  }

  const { isError: isRefreshError, mutateAsync: refresh } = useMutation({
    mutationKey: ['refresh'],
    mutationFn: fetchMutation,
    onError: () => {
      setIsRefreshDone(false);

      localStorage.removeItem('token');
      localStorage.removeItem('name');
    },
  });

  return { isRefreshError, refresh };
}
