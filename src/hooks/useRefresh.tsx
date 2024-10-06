import { useState } from 'react';
import { useMutation } from 'react-query';

import { LoginResponseDTOProps } from '@/@types';
import { api } from '@/config';
import { Storage } from '@/helpers';

export function useRefresh() {
  const [isRefreshDone, setIsRefreshDone] = useState<boolean>(false);

  async function fetchMutation(): Promise<void> {
    if (isRefreshDone) return;

    const accessToken = Storage.getItem('token');

    const { data } = await api.post<LoginResponseDTOProps>(
      '/refresh',
      {},
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    );

    setIsRefreshDone(true);

    Storage.setItem('token', JSON.stringify(data.token));
    Storage.setItem('name', JSON.stringify(data.name));
  }

  const { isError: isRefreshError, mutateAsync: refresh } = useMutation({
    mutationKey: ['refresh'],
    mutationFn: fetchMutation,
    onError: () => {
      setIsRefreshDone(false);

      Storage.clear();
    },
  });

  return { isRefreshError, refresh };
}
