import { useQuery } from 'react-query';

import { ClientDTO } from '@/@types';
import { api } from '@/config';
import { Storage } from '@/helpers';

export function useGetClients() {
  async function fetchQuery(): Promise<ClientDTO[]> {
    const accessToken = Storage.getItem('token');

    const { data } = await api.get<ClientDTO[]>('/clients', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        page: 1,
        pageSize: 100,
        orderBy: 'desc',
      },
    });

    return data;
  }

  const {
    isLoading,
    isFetching,
    data: clients,
    refetch: refreshClients,
  } = useQuery({
    queryKey: ['clients'],
    initialData: [],
    refetchOnWindowFocus: 'always',
    refetchOnReconnect: 'always',
    queryFn: fetchQuery,
  });

  return {
    clients: clients || [],
    isClientLoading: isLoading || isFetching,
    refreshClients,
  };
}
