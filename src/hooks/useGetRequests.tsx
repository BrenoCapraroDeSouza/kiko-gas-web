import { useQuery } from 'react-query';

import { RequestResponseProps } from '@/@types';
import { api } from '@/config';
import { Storage } from '@/helpers';

export function useGetRequests() {
  async function fetchQuery(): Promise<RequestResponseProps[]> {
    const accessToken = Storage.getItem('token');

    const { data } = await api.get<RequestResponseProps[]>('/signals', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        page: 1,
        pageSize: 100,
      },
    });

    return data;
  }

  const {
    isLoading,
    isFetching,
    data: requests,
    refetch: refreshRequests,
  } = useQuery({
    queryKey: ['requests'],
    initialData: [],
    refetchOnReconnect: 'always',
    refetchOnWindowFocus: false,
    queryFn: fetchQuery,
  });

  return {
    requests: requests || [],
    isRequestsLoading: isLoading || isFetching,
    refreshRequests,
  };
}
