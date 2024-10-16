import { useState } from 'react';
import { useMutation } from 'react-query';

import { ClientDTO, RegisterClientDTOProps } from '@/@types';
import { api } from '@/config';
import { Storage } from '@/helpers';

export function useCreateClient() {
  const [isCreateClientError, setIsCreateClientError] =
    useState<boolean>(false);

  async function fetchMutation(
    client: RegisterClientDTOProps,
  ): Promise<boolean> {
    const accessToken = Storage.getItem('token');
    const { data } = await api.post<ClientDTO>('/clients', client, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return !!data?.id;
  }

  const { isLoading: isCreatingClient, mutateAsync: createClient } =
    useMutation<boolean, Error, RegisterClientDTOProps>({
      mutationKey: ['create_client'],
      mutationFn: client => fetchMutation(client),
      onError: () => setIsCreateClientError(true),
    });

  return {
    isCreatingClient,
    isCreateClientError,
    createClient,
    setIsCreateClientError,
  };
}
